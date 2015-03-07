angular.module('symbolApp')
    .factory('pathService', ['$log', 'config', function ($log, config) {

        function getEntityFn(entity, symbolSetObj, standardIdentityId, alternative) {
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

        function getFrameFn(contextId, standardIdentityId, symbolSetObj, status, useCivilianFrame) {
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

        function getStatusFn(standardIdentityId, symbolSetObj, statusObj, alternateAmplifiers) {
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

        function getHqtfdFn(standardIdentityId, symbolSetObj, hqtfdObj) {
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

        function getAmplifierFn(standardIdentityId, amplifierDescriptorObj, symbolSetObj) {
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

        function getModifierOneFn(modifierOneObj, symbolSetObj) {

            var fn = modifierOneObj ?  modifierOneObj.graphic : "";
            return fn ? config.SVG_PATH + symbolSetObj.graphicFolder["modifierOnes"] + "/" + fn  : null;
        }


        function getModifierTwoFn(modifierTwoObj, symbolSetObj) {
            var fn = modifierTwoObj ?  modifierTwoObj.graphic : "";
            return fn ? config.SVG_PATH + symbolSetObj.graphicFolder["modifierTwos"] + "/" + fn  : null;
        }

        return {
            getEntityFilePath: getEntityFn,
            getFrameFilePath: getFrameFn,
            getStatusFilePath: getStatusFn,
            getHqtfdFilePath: getHqtfdFn,
            getAmplifierFilePath: getAmplifierFn,
            getModifierOneFilePath: getModifierOneFn,
            getModifierTwoFilePath: getModifierTwoFn
        }
    }]);

