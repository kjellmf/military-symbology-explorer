angular.module('symbolApp')
    .factory('pathService', ['config', function (config) {

        function getEntityFn(entity, symbolSetObj, standardIdentityId, alternative) {
            var fn = "";

            if (entity) {
                if (entity.icon === 'FULL_FRAME') {
                    fn = entity[standardIdentityMap2[standardIdentityId]];
                } else {
                    if (alternative) {
                        fn = entity.alternativeGraphic || gg.graphic;
                    } else {
                        fn = entity.graphic;
                    }
                }
            }
            return fn ? config.SVG_PATH + symbolSetObj.graphicFolder["entities"] + "/" + fn : null;
        }

        function getFrameFn(contextId, standardIdentityId, symbolSetObj, status) {
            var dimensionId = symbolSetObj.dimensionId,
                fn = "";
            if (dimensionId && contextId && standardIdentityId) {
                var a1 = symbolData.affiliations[contextId];
                if (a1) {
                    var a2 = a1[dimensionId];
                    if (a2) {
                        var a3 = a2[standardIdentityId];
                        if (status && status.digits == "1") {
                            fn = a3 ? a3.plannedGraphic : null;
                        } else {
                            fn = a3 ? a3.graphic : null;
                        }
                    }
                }
            }
            return fn ? config.SVG_PATH + fn : null;
        }

        function getStatusFn(standardIdentityId, symbolSetObj, status) {
             var dimensionId = symbolSetObj.dimensionId,
                fn = "";
            if (dimensionId && status && standardIdentityId && status.graphics) {
                var sig = status.graphics[symbolData.standardIdentityGroupMapping[standardIdentityId]];
                if (sig) {
                    var dim = sig[dimensionId];
                    fn = dim ? dim.graphic : null;
                }
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

        function getAmplifierFn(standardIdentityId, amplifierDescriptorObj) {
            var fn = "";
            if (standardIdentityId && amplifierDescriptorObj && amplifierDescriptorObj.graphics) {
                var sig = amplifierDescriptorObj.graphics[symbolData.standardIdentityGroupMapping[standardIdentityId]];
                fn = sig ? sig.graphic : null;
            }
            return fn ? config.SVG_PATH + fn : null;
        }

        function getModifierOneFn() {
            var fn = "";
            var sic = symbolIdCode;
            fn = sic.symbolSet.digits + sic.sectorOneModifier.digits;
            return fn ? SVG_PATH + symbolIdCode.symbolSet.graphicFolder["modifierOnes"] + "/" + fn + "1.svg" : null;
        }


        function getModifierTwoFn() {
            var fn = "";
            var sic = symbolIdCode;
            fn = sic.symbolSet.digits + sic.sectorTwoModifier.digits;
            if (sic.sectorTwoModifier.digits == "00") {
                return ""
            }
            return fn ? SVG_PATH + symbolIdCode.symbolSet.graphicFolder["modifierTwos"] + "/" + fn + "2.svg" : null;
        }

        return {
            getEntityFilePath: getEntityFn,
            getFrameFilePath: getFrameFn,
            getStatusFilePath: getStatusFn,
            getHqtfdFilePath : getHqtfdFn,
            getAmplifierFilePath : getAmplifierFn
        }
    }]);

