angular.module('symbolApp')
    .controller('SearchController', ['$scope', '$log', 'symbolIdCodeService', function ($scope, $log, symbolIdCodeService) {
        $scope.searchResults = [];

        var searchSymbols = function (searchString) {
            if (!searchString.trim()) {
                return
            }
            $log.debug('searchSymbols ' + searchString);
            var results = [];
            var ss = symbolIdCodeService.symbId.symbolSet;
            var reg = new RegExp(searchString, 'i');

            function searchElement(element) {
                if (reg.test(element.label)) {
                    results.push({entity: element, symbolset: ss});
                }
            }

            for (a = 0; a < symbolData.symbolSets.length; a += 1) {
                ss = symbolData.symbolSets[a];

                for (i = 0; i < ss.entities.length; i += 1) {
                    var el = ss.entities[i];
                    searchElement(el);
                    for (j = 0; j < el.entityTypes.length; j += 1) {
                        var entityType = el.entityTypes[j];
                        searchElement(entityType);
                        for (k = 0; k < entityType.entitySubTypes.length; k += 1) {
                            var entitySubType = entityType.entitySubTypes[k];
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


    }]);