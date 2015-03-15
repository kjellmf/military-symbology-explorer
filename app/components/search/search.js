angular.module('symbolApp')
    .controller('SearchController', ['$scope', '$log', 'symbolIdCodeService', function ($scope, $log, symbolIdCodeService) {
        $scope.searchResults = [];

        var searchSymbols = function (searchString) {
            $log.debug('searchSymbols ' + searchString);
            var ss = symbolIdCodeService.symbId.symbolSet;
            var reg = new RegExp(searchString, 'i');
            var results = [];
            for (a = 0; a < symbolData.symbolSets.length; a += 1) {
                ss = symbolData.symbolSets[a];

                for (i = 0; i < ss.entities.length; i += 1) {
                    var el = ss.entities[i];
                    if (el.label.search(reg) > -1) {
                        results.push(el);
                    }
                    for (j = 0; j < el.entityTypes.length; j += 1) {
                        var entityType = el.entityTypes[j];
                        if (entityType.label.search(reg) > -1) {
                            results.push(entityType);
                        }
                        for (k = 0; k < entityType.entitySubTypes.length; k += 1) {
                            var entitySubType = entityType.entitySubTypes[k];
                            if (entitySubType.label.search(reg) > -1) {
                                results.push(entitySubType);
                            }

                        }

                    }
                }
            }

            $scope.searchResults = results;


        };

        $scope.searchString = "Hello";
        $scope.$watch('searchString', function (newValue, oldValue) {
            $log.debug('Changed value from ' + oldValue + ' to ' + newValue);
            if (newValue) {
                searchSymbols(newValue);
            }

        });


    }]);