angular.module('symbolApp')
    .factory('pathService', ['$log', 'config', function ($log, config) {

        var service = {
            getEntityFilePath: getEntityFilePath,
            getFrameFilePath: getFrameFilePath,
            getStatusFilePath: getStatusFilePath,
            getHqtfdFilePath: getHqtfdFilePath,
            getAmplifierFilePath: getAmplifierFilePath,
            getModifierOneFilePath: getModifierOneFilePath,
            getModifierTwoFilePath: getModifierTwoFilePath,
            getBoundingOctagonFilePath: getBoundingOctagonFilePath
        };
        return service;

        function getEntityFilePath(entity, symbolSetObj, standardIdentityId, alternative) {
            var fn = "";

            if (entity) {
                if (entity.icon === 'FULL_FRAME' || entity.icon === 'SPECIAL') {
                    fn = entity[standardIdentityMap2[standardIdentityId]];
                } else {
                    if (alternative) {
                        fn = entity.alternativeGraphic || entity.graphic;
                    } else {
                        fn = entity.graphic;
                    }
                }
            }
            return fn ? config.SVG_PATH + symbolSetObj.graphicFolder["entities"] + "/" + fn : null;
        }

        function getFrameFilePath(contextId, standardIdentityId, symbolSetObj, status, useCivilianFrame) {
            var dimensionId = symbolSetObj.dimensionId,
                fn = "";
            if (dimensionId && contextId && standardIdentityId) {
                var a1 = symbolData.affiliations[contextId];
                if (a1) {
                    var a2 = a1[dimensionId];
                    if (a2 && a2[standardIdentityId]) {
                        var a3 = a2[standardIdentityId];
                        if (status && status.digits == "1") {
                            if (useCivilianFrame && a3.plannedCivilianGraphic) {
                                fn = a3.plannedCivilianGraphic;
                            } else {
                                if (a3.plannedGraphic) {
                                    fn = a3.plannedGraphic;
                                } else {
                                    $log.warn('Missing plannedGraphics. Using graphic instead.');
                                    fn = a3.graphic;
                                }
                            }
                        } else {
                            if (useCivilianFrame && a3.civilianGraphic) {
                                fn = a3.civilianGraphic;
                            } else {
                                fn = a3.graphic;
                            }
                        }
                    }
                }
            }
            return fn ? config.SVG_PATH + fn : null;
        }

        function getStatusFilePath(standardIdentityId, symbolSetObj, statusObj, alternateAmplifiers) {
            var dimensionId = symbolSetObj.dimensionId,
                fn = "";
            if (alternateAmplifiers) {
                if (dimensionId && statusObj && standardIdentityId && statusObj.graphics) {
                    var sig = statusObj.graphics[symbolData.standardIdentityGroupMapping[standardIdentityId]];
                    if (sig) {
                        var dim = sig[dimensionId];
                        fn = dim ? dim.graphic : null;
                    }
                }
            } else {
                fn = statusObj.graphic;
            }
            return fn ? config.SVG_PATH + fn : null;
        }

        function getHqtfdFilePath(standardIdentityId, symbolSetObj, hqtfdObj) {
            var dimensionId = symbolSetObj.dimensionId,
                fn = "";
            if (dimensionId && hqtfdObj && standardIdentityId && hqtfdObj.graphics) {
                var sig = hqtfdObj.graphics[symbolData.standardIdentityGroupMapping[standardIdentityId]];
                if (sig) {
                    var dim = sig[dimensionId];
                    fn = dim ? dim.graphic : null;
                }
            }
            return fn ? config.SVG_PATH + fn : null;
        }

        function getAmplifierFilePath(standardIdentityId, amplifierDescriptorObj, symbolSetObj) {
            var fn = "";
            if (symbolSetObj.geometry == "MIXED") {
                return null;
            }
            if (standardIdentityId && amplifierDescriptorObj && amplifierDescriptorObj.graphics) {
                var sig = amplifierDescriptorObj.graphics[symbolData.standardIdentityGroupMapping[standardIdentityId]];
                fn = sig ? sig.graphic : null;
            }
            return fn ? config.SVG_PATH + fn : null;
        }

        function getModifierOneFilePath(modifierOneObj, symbolSetObj) {

            var fn = modifierOneObj ?  modifierOneObj.graphic : "";
            return fn ? config.SVG_PATH + symbolSetObj.graphicFolder["modifierOnes"] + "/" + fn  : null;
        }


        function getModifierTwoFilePath(modifierTwoObj, symbolSetObj) {
            var fn = modifierTwoObj ?  modifierTwoObj.graphic : "";
            return fn ? config.SVG_PATH + symbolSetObj.graphicFolder["modifierTwos"] + "/" + fn  : null;
        }

        function getBoundingOctagonFilePath(symbolSetObj) {
            if (symbolSetObj.id == "SS_AIR_MISSILE" || symbolSetObj.id == "SS_SPACE_MISSILE") {
                return "assets/img/BoundingOctagonVertical.svg";
            } else {
                return "assets/img/BoundingOctagonHorizontal.svg";
            }

        }
    }]);

