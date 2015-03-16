angular.module('symbolApp')
    .controller('SearchController', ['$scope', '$log', 'symbolIdCodeService', function ($scope, $log, symbolIdCodeService) {
        $scope.searchResults = [];

        var searchSymbols = function (searchString) {
            if (!searchString.trim()) {
                return
            }
            $log.debug('searchSymbols ' + searchString);
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
                        sic:sic
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

        $scope.searchString = "infan";
        $scope.$watch('searchString', function (newValue, oldValue) {
            $log.debug('Changed value from ' + oldValue + ' to ' + newValue);
            if (newValue.trim()) {
                searchSymbols(newValue);
            }

        });


    }])
    .directive('searchsymb', ['$log', 'config', 'pathService', 'currentSymbol', 'symbolsetBrowserSettings', function ($log, config, pathService, currentSymbol, symbolsetBrowserSettings) {

        function link(scope, element, attrs) {
            scope.entityFn = "";
            var currentSymbolSet = scope.symbolSet;
            var dimensionId = currentSymbolSet.dimensionId,
                contextId = 'REALITY',
                siId = scope.si || "SI_UNKNOWN";

            scope.entityFn = pathService.getEntityFilePath(scope.entity, currentSymbolSet, siId) || config.BLANK_PATH;
            if (scope.entity.id == 'OWN_SHIP') {
                scope.frameFn = config.BLANK_PATH;
            } else {
                scope.frameFn = pathService.getFrameFilePath(contextId, siId, currentSymbolSet, null, symbolsetBrowserSettings.settings.useCivilianFrames) || config.BLANK_PATH;
            }
            element.bind('click', function () {
                scope.$apply(function () {
                    currentSymbol.symb.entity = scope.entity;
                    currentSymbol.symb.entityFn = scope.entityFn;
                    currentSymbol.symb.frameFn = scope.frameFn;
                });
            })
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
                    + '<img class="symbol-sm" ng-src="{{entityFn}}">'
                    + '</div>';
            },
            link: link
        };
    }])

;