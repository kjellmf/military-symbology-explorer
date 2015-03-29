angular.module('symbolApp')

    .factory('searchSettings', ['$log', function ($log) {
        settings = {
            searchString: 'tank',
            standardIdentityId: 'SI_FRIEND',
            contextId: 'REALITY'
        };
        return {
            settings: settings
        };
    }])

    //.config(function ($asideProvider) {
    //    angular.extend($asideProvider.defaults, {
    //        container: 'body',
    //        html: true
    //    });
    //})


    .controller('SearchController', ['$scope', '$log', 'symbolIdCodeService', 'searchSettings', function ($scope, $log, symbolIdCodeService, searchSettings) {
        $scope.searchResults = [];
        $scope.aside = {title: 'Settings', content: "'app/components/about/about.html'"};

        var searchSymbols = function (searchString) {
            if (!searchString.trim()) {
                return
            }
            var results = [];
            var symbolSet = symbolIdCodeService.symbId.symbolSet;
            var entity = null;
            var entityType = null;
            var entitySubType = null;
            var reg = new RegExp(searchString, 'i');

            function searchElement(element) {
                if (reg.test(element.label)) {
                    var entitySic = entity ? entity.digits : "00";
                    var entityTypeSic = entityType ? entityType.digits : "00";
                    var entitySubTypeSic = entitySubType ? entitySubType.digits : "00";
                    var sic = "1003" + symbolSet.digits + "0000" + entitySic
                        + entityTypeSic + entitySubTypeSic + "0000";
                    results.push({
                        currentEntity: element,
                        symbolSet: symbolSet,
                        entity: entity,
                        entityType: entityType,
                        entitySubType: entitySubType,
                        sic: sic
                    });
                }
            }

            for (var a = 0; a < symbolData.symbolSets.length; a += 1) {
                symbolSet = symbolData.symbolSets[a];
                entity = null;
                entityType = null;
                entitySubType = null;

                for (var i = 0; i < symbolSet.entities.length; i += 1) {
                    entity = symbolSet.entities[i];
                    entityType = null;
                    entitySubType = null;
                    searchElement(entity);
                    for (var j = 0; j < entity.entityTypes.length; j += 1) {
                        entityType = entity.entityTypes[j];
                        entitySubType = null;
                        searchElement(entityType);
                        for (var k = 0; k < entityType.entitySubTypes.length; k += 1) {
                            entitySubType = entityType.entitySubTypes[k];
                            searchElement(entitySubType);
                        }
                    }
                }
            }
            $scope.searchResults = results;
        };

        var searchModifiers = function (searchString) {
            if (!searchString.trim()) {
                return
            }
            var results = [];
            var symbolSet = symbolIdCodeService.symbId.symbolSet;
            var modOne = null;
            var modTwo = null;
            var reg = new RegExp(searchString, 'i');

            function searchModifierElement(element, isModOne) {
                if (reg.test(element.label)) {
                    var entitySic = "00";
                    var entityTypeSic = "00";
                    var entitySubTypeSic = "00";
                    var modOneSic = isModOne ? element.digits : "00";
                    var modTwoSic = !isModOne ? element.digits : "00";
                    var sic = "1003" + symbolSet.digits + "0000" + entitySic
                        + entityTypeSic + entitySubTypeSic + modOneSic + modTwoSic;
                    results.push({
                        modifier: element,
                        symbolSet: symbolSet,
                        isModifierOne: isModOne ? true : false,
                        sic: sic
                    });
                }
            }

            for (var a = 0; a < symbolData.symbolSets.length; a += 1) {
                symbolSet = symbolData.symbolSets[a];
                if (symbolSet.sectorOneModifiers) {
                    for (var i = 0; i < symbolSet.sectorOneModifiers.length; i += 1) {
                        modOne = symbolSet.sectorOneModifiers[i];
                        searchModifierElement(modOne, true);
                    }
                }
                if (symbolSet.sectorTwoModifiers) {
                    for (var j = 0; j < symbolSet.sectorTwoModifiers.length; j += 1) {
                        modTwo = symbolSet.sectorTwoModifiers[j];
                        searchModifierElement(modTwo);
                    }
                }
            }
            $scope.searchResultsModifiers = results;
        };

        $scope.settings = searchSettings.settings;
        $scope.$watch('settings.searchString', function (newValue, oldValue) {
            var trimmedSearchString = newValue.trim();
            if (trimmedSearchString && trimmedSearchString.length > 2) {
                searchSymbols(trimmedSearchString);
                searchModifiers(trimmedSearchString);
            }
        });
    }])

    .directive('searchsymb', ['$log', 'config', 'pathService', 'currentSymbol', 'searchSettings', function ($log, config, pathService, currentSymbol, searchSettings) {
        function link(scope, element, attrs) {
            scope.entityFn = "";
            var currentSymbolSet = scope.symbolSet;
            var settings = searchSettings.settings;
            var contextId = settings.contextId || 'REALITY';
            var siId = scope.si || settings.standardIdentityId || "SI_UNKNOWN";
            scope.entityFn = pathService.getEntityFilePath(scope.entity, currentSymbolSet, siId) || config.BLANK_PATH;
            scope.geometry = scope.entity.geometryType || currentSymbolSet.geometry || "POINT";
            if (currentSymbolSet.id == "SS_CONTROL_MEASURE" && scope.geometry == "MIXED") {
                // control measures have default GeometryType=POINT
                scope.geometry = "POINT";
            }
            if (scope.entity.id == 'OWN_SHIP') {
                scope.frameFn = config.BLANK_PATH;
            } else {
                scope.frameFn = pathService.getFrameFilePath(contextId, siId, currentSymbolSet, null) || config.BLANK_PATH;
            }
        }

        return {
            restrict: 'E',
            scope: {
                entity: '=',
                symbolSet: '=',
                si: '@'
            },
            template: function (element, attrs) {
                return '<div class="searchsymbol">'
                    + '<img class="symbol-sm" ng-src="{{frameFn}}">'
                    + '<img class="symbol-sm symbol-{{geometry}}" ng-src="{{entityFn}}">'
                    + '</div>';
            },
            link: link
        };
    }])

    .directive('searchmod', ['$log', 'config', 'pathService', function ($log, config, pathService) {
        function link(scope, element, attrs) {
            var modifierObj = scope.modifierData.modifier;
            var symbolSetObj = scope.modifierData.symbolSet;
            if (scope.modifierData.isModifierOne) {
                scope.modifierFn = pathService.getModifierOneFilePath(modifierObj, symbolSetObj)
            } else {
                scope.modifierFn = pathService.getModifierTwoFilePath(modifierObj, symbolSetObj)
            }
            scope.boundingOctagonFn = pathService.getBoundingOctagonFilePath(symbolSetObj);
        }

        return {
            restrict: 'E',
            scope: {
                modifierData: '='
            },
            template: function (element, attrs) {
                return '<div class="searchsymbol">'
                    + '<img class="symbol-sm" ng-src="{{boundingOctagonFn}}">'
                    + '<img class="symbol-sm" ng-src="{{modifierFn}}">'
                    + '</div>';
            },
            link: link
        };
    }])

    .controller("SearchSettingsCtrl", ["$scope", "searchSettings", "$timeout", function ($scope, searchSettings, $timeout) {
        $scope.settings = searchSettings.settings;
        $scope.standardIdentities = symbolData.standardIdentities;
        $scope.updateSearchResults = function () {
            var tmp = searchSettings.settings.searchString;
            $timeout(function () {
                $scope.settings.searchString = "";
            });
            $timeout(function () {
                $scope.settings.searchString = tmp;
            });


        };


    }])


;