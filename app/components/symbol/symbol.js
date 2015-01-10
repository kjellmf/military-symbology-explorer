angular.module('symbolApp')
    .factory('symbolIdCodeService', ['config', 'pathService', function (config, pathService) {
        var symbolIdCode = {};
        var undef = {"label": "Undefined", digits: "00"};
        var SVG_PATH = config.SVG_PATH;
        symbolIdCode.versionCode1 = "1";
        symbolIdCode.versionCode2 = "0";
        symbolIdCode.context = symbolData.contexts[0];
        symbolIdCode.standardIdentity = symbolData.standardIdentities[3];
        symbolIdCode.symbolSet = symbolData.symbolSets[4];
        symbolIdCode.status = symbolData.statuses[0];
        symbolIdCode.hqtfDummy = symbolData.hqtfDummies[0];
        symbolIdCode.amplifier = symbolData.amplifier[1];
        symbolIdCode.amplifierDescriptor = symbolData.amplifier[1].descriptors[5];
        symbolIdCode.entity = symbolIdCode.symbolSet.entities[1];
        symbolIdCode.entityType = symbolIdCode.entity.entityTypes[2];
        symbolIdCode.entitySubType = symbolIdCode.entityType.entitySubTypes[0];
        symbolIdCode.sectorOneModifier = null;
        symbolIdCode.sectorTwoModifier = null;


        function computeSymbolIdentificationCode() {
            var sic = symbolIdCode;
            var version = sic.versionCode1 + sic.versionCode2;
            var context = sic.context ? sic.context.digits : "0";
            var standardIdentity = sic.standardIdentity ? sic.standardIdentity.digits : "0";
            var symbolSet = sic.symbolSet ? sic.symbolSet.digits : "00";
            var status = sic.status ? sic.status.digits : "0";
            var hqtfDummy = sic.hqtfDummy ? sic.hqtfDummy.digits : "0";
            var amplifier = sic.amplifier ? sic.amplifier.digits : "0";
            var amplifierDescriptor = sic.amplifierDescriptor ? sic.amplifierDescriptor.digits : "0";
            var entity = sic.entity ? sic.entity.digits : "00";
            var entityType = sic.entityType ? sic.entityType.digits : "00";
            var entitySubType = sic.entitySubType ? sic.entitySubType.digits : "00";
            var mod1 = sic.sectorOneModifier ? sic.sectorOneModifier.digits : "00";
            var mod2 = sic.sectorTwoModifier ? sic.sectorTwoModifier.digits : "00";

            return version + context + standardIdentity + symbolSet + status + hqtfDummy + amplifier + amplifierDescriptor
                + entity + entityType + entitySubType + mod1 + mod2;

        }

        function getEntityFn() {
            var gg = symbolIdCode.entitySubType || symbolIdCode.entityType || symbolIdCode.entity;
            return pathService.getEntityFilePath(gg, symbolIdCode.symbolSet, symbolIdCode.standardIdentity.id);
        }

        function getFrameFn() {
            var sic = symbolIdCode;
            return pathService.getFrameFilePath(sic.context.id, sic.standardIdentity.id, sic.symbolSet, sic.status);
        }

        function getStatusFn() {
            var sic = symbolIdCode;
            return pathService.getStatusFilePath(sic.standardIdentity.id, sic.symbolSet, sic.status);
        }

        function getAmplifierFn() {
            var fn = "";
            var sic = symbolIdCode;
            if (sic.standardIdentity && sic.amplifier && sic.amplifierDescriptor) {
                fn = sic.standardIdentity.digits + sic.amplifier.digits + sic.amplifierDescriptor.digits;
            }
            return fn ? SVG_PATH + "Echelon/" + fn + ".svg" : null;

        }

        function getModifierOneFn() {
            var fn = "";
            var sic = symbolIdCode;
            if (sic.symbolSet && sic.sectorOneModifier) {
                fn = sic.symbolSet.digits + sic.sectorOneModifier.digits;
            }
            return fn ? SVG_PATH + symbolIdCode.symbolSet.graphicFolder["modifierOnes"] + "/" + fn + "1.svg" : null;
        }


        function getModifierTwoFn() {
            var fn = "";
            var sic = symbolIdCode;
            if (sic.sectorTwoModifier) {
                fn = sic.symbolSet.digits + sic.sectorTwoModifier.digits;
            }
            if (sic.sectorTwoModifier && sic.sectorTwoModifier.digits == "00") {
                return null
            }
            return fn ? SVG_PATH + symbolIdCode.symbolSet.graphicFolder["modifierTwos"] + "/" + fn + "2.svg" : null;
        }

        return {
            symbId: symbolIdCode,
            getEntityFn: getEntityFn,
            getFrameFn: getFrameFn,
            getStatusFn: getStatusFn,
            getAmplifilerFn: getAmplifierFn,
            getModiferOneFn: getModifierOneFn,
            getModiferTwoFn: getModifierTwoFn,
            setStandardIdentity: function (standardIdentity) {
                symbolIdCode.standardIdentity = standardIdentity;
            },
            setContext: function (context) {
                symbolIdCode.context = context;
            },
            setSymbolSet: function (symbolSet) {
                symbolIdCode.symbolSet = symbolSet;
            },
            setStatus: function (status) {
                symbolIdCode.status = status;
            },
            setAmplifier: function (amplifer) {
                symbolIdCode.amplifier = amplifer;
            },
            setAmplifierDescriptor: function (amplifierDescriptor) {
                symbolIdCode.amplifierDescriptor = amplifierDescriptor;

            },
            setHQTFDummy: function (hqTFDummy) {
                symbolIdCode.HQTFDummy = hqTFDummy;
            },
            setEntity: function (entity) {
                symbolIdCode.entity = entity;
            },
            setEntityType: function (entityType) {
                symbolIdCode.entityType = entityType;
            },
            setEntitySubType: function (entitySubType) {
                symbolIdCode.entitySubType = entitySubType;
            },
            setSectorOneModifier: function (sectorOneModifier) {
                symbolIdCode.sectorOneModifier = sectorOneModifier || {"label": "Undefined", "digits": "00"};
            },
            setSectorTwoModifier: function (sectorTwoModifier) {
                symbolIdCode.sectorTwoModifier = sectorTwoModifier || {"label": "Undefined", "digits": "00"};
            },
            getSymbolIdentificationCode: function () {
                return computeSymbolIdentificationCode();
            }
        };
    }])

    .controller('SymbolCtrl', ['$scope', '$log', 'symbolIdCodeService', function ($scope, $log, symbolIdCodeService) {
        $scope.frame = symbolIdCodeService.getFrameFn;
        $scope.main = symbolIdCodeService.getEntityFn;
        $scope.amplifierFn = symbolIdCodeService.getAmplifilerFn;
        $scope.modifierOneFn = symbolIdCodeService.getModiferOneFn;
        $scope.modifierTwoFn = symbolIdCodeService.getModiferTwoFn;
        $scope.statusFn = symbolIdCodeService.getStatusFn;
        $scope.echelon = "svg/MIL_STD_2525D_Symbols/Echelon/415.svg";
        $scope.symbolData = symbolData;
        $scope.myHQTFDummy = symbolIdCodeService.symbId.hqtfDummy;
        $scope.context = symbolIdCodeService.symbId.context;
        $scope.standardIdentity = symbolIdCodeService.symbId.standardIdentity;
        $scope.currentSymbolSet = symbolIdCodeService.symbId.symbolSet;
        $scope.status = symbolIdCodeService.symbId.status;
        $scope.amplifier = symbolIdCodeService.symbId.amplifier;
        $scope.amplifierDescriptor = symbolIdCodeService.symbId.amplifierDescriptor;
        $scope.symbId = symbolIdCodeService.symbId;
        $scope.ss = symbolIdCodeService;
        $scope.entity = symbolIdCodeService.symbId.entity;
        $scope.entityType = symbolIdCodeService.symbId.entityType;
        $scope.entitySubType = symbolIdCodeService.symbId.entitySubType;
        $scope.sectorOneModifier = symbolIdCodeService.symbId.sectorOneModifier;

        $scope.changeContext = function (context) {
            symbolIdCodeService.setContext(context);
        };

        $scope.changeStandardIdentity = function (standardIdentity) {
            symbolIdCodeService.setStandardIdentity(standardIdentity);

        };

        $scope.changeSymbolSet = function (symbolSet) {
            symbolIdCodeService.setSymbolSet(symbolSet);
            $scope.entity = null;

            $scope.entity = symbolSet.entities[0];
            $scope.changeEntity(symbolSet.entities[0]);
            symbolIdCodeService.setSectorOneModifier(null);
            symbolIdCodeService.setSectorTwoModifier(null);
            $scope.amplifier = symbolData.amplifier[0];
            $scope.changeAmplifier(symbolData.amplifier[0]);


        };

        $scope.changeStatus = function (status) {
            symbolIdCodeService.setStatus(status);
        };

        $scope.changeHQTFDummy = function (hqTfDummy) {
            symbolIdCodeService.setHQTFDummy(hqTfDummy);
        };

        $scope.changeAmplifier = function (amplifier) {
            symbolIdCodeService.setAmplifier(amplifier);
            $scope.amplifierDescriptor = amplifier.descriptors[0];
            $scope.changeAmplifierDescriptor(amplifier.descriptors[0]);
        };

        $scope.changeAmplifierDescriptor = function (amplifierDescriptor) {
            symbolIdCodeService.setAmplifierDescriptor(amplifierDescriptor);
        };

        $scope.changeEntity = function (entity) {
            symbolIdCodeService.setEntity(entity);
            $scope.entityType = null;
            $scope.changeEntityType(null);
        };

        $scope.changeEntityType = function (entityType) {
            symbolIdCodeService.setEntityType(entityType);
            $scope.entitySubType = null;
            $scope.changeEntitySubType(null);
        };

        $scope.changeEntitySubType = function (entitySubType) {
            symbolIdCodeService.setEntitySubType(entitySubType);
        };


        $scope.getLabel = function (element) {
            return element.digits + " " + element.label;
        };

    }])

    .controller('SymbolIdCodeCtrl', ['$scope', 'symbolIdCodeService', function ($scope, symbolCodeIdService) {
        var sid = symbolCodeIdService.symbId;
        $scope.symbId = symbolCodeIdService.symbId;
        $scope.sid = symbolCodeIdService.getSymbolIdentificationCode;
        $scope.gget = function (name) {
            return sid[name] || {"label": "Undefined", "digits": "00"};

        };
    }]);




