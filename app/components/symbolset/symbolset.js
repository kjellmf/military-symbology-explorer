angular.module('symbolApp')
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('symbolSet', {
                url: '/symbolset/:symbolSetId',
                templateUrl: 'app/components/symbolset/symbolset.html',
                controller: 'SymbolSetBrowserCtrl'
            })
            .state('symbolSet.symboltable', {url: "#symboltable"})
            .state('symbolSet.modifierone', {url: "#modifierone"})
            .state('symbolSet.modifiertwo', {url: "#modifiertwo"})

    })

    .factory('currentSymbol', ['$log', 'config', function ($log, config) {
        var entity = config.BLANK_PATH,
            entityFn = config.BLANK_PATH,
            frameFn = config.BLANK_PATH,
            mod1Fn = config.BLANK_PATH,
            mod2Fn = config.BLANK_PATH;
        return {
            setEntity: function (newEntity) {
                entity = newEntity;
            },
            getEntity: function () {
                return entity
            },
            setEntityFn: function (myEntityFn) {
                entityFn = myEntityFn;
            },
            getEntityFn: function () {
                return entityFn;
            },
            setFrameFn: function (myFrameFn) {
                frameFn = myFrameFn;
            },
            getFrameFn: function () {
                return frameFn;
            },
            setMod1Fn: function (myMod1Fn) {
                mod1Fn = myMod1Fn;
            },
            getMod1Fn: function () {
                return mod1Fn;
            },
            setMod2Fn: function (myMod2Fn) {
                mod2Fn = myMod2Fn;
            },
            getMod2Fn: function () {
                return mod2Fn;
            }
        };
    }])

    .controller('SymbolSetBrowserCtrl', ['$scope', '$stateParams', '$log', 'symbolIdCodeService', 'config', function ($scope, $stateParams, $log, symbolIdCodeService, config) {
        if ($stateParams.symbolSetId) {
            var tmp = findWithAttr(symbolData.symbolSets, 'id', $stateParams.symbolSetId);
            if (tmp) {
                $scope.currentSymbolSet = tmp;
            } else {
                $scope.currentSymbolSet = symbolIdCodeService.symbId.symbolSet;
            }
        } else {
            $scope.currentSymbolSet = symbolIdCodeService.symbId.symbolSet;
        }

        //$scope.frame = symbolIdCodeService.getFrameFn;
        //$scope.main = symbolIdCodeService.getEntityFn;
        $scope.symbolData = symbolData;


        var SVG_PATH = config.SVG_PATH;
        $scope.SVG_PATH = SVG_PATH;

        $scope.changeSymbolSet = function (symbolSet) {
            $scope.ttest = symbolSet.id;
            $scope.modonepath = SVG_PATH + symbolSet.graphicFolder["modifierOnes"] + "/";
            $scope.modtwopath = SVG_PATH + symbolSet.graphicFolder["modifierTwos"] + "/";
            if (symbolSet.id == "SS_AIR_MISSILE" || symbolSet.id == "SS_SPACE_MISSILE") {
                $scope.currentBoundingOctagon = "assets/img/BoundingOctagonVertical.svg";
            } else {
                $scope.currentBoundingOctagon = "assets/img/BoundingOctagonHorizontal.svg";
            }
        };

        $scope.changeSymbolSet($scope.currentSymbolSet);

        $scope.getLabel = function (element) {
            return element.digits + " " + element.label;
        };
    }])

    .controller('SidebarCtrl', ['$scope', 'currentSymbol', function ($scope, currentSymbol) {
        $scope.currentSymbolSet = $scope.$parent.currentSymbolSet;
        $scope.entity = currentSymbol.getEntity;
        $scope.entityFn = currentSymbol.getEntityFn;
        $scope.frameFn = currentSymbol.getFrameFn;
        $scope.modOneFn = currentSymbol.getMod1Fn;
        $scope.modTwoFn = currentSymbol.getMod2Fn;
    }])

    .directive('symbsetsymb', ['$log', 'config', 'pathService', 'currentSymbol', function ($log, config, pathService, currentSymbol) {

        function link(scope, element, attrs) {
            //var sicObj = processSIC(scope.sic, scope.alternative);
            scope.entityFn = "";
            var currentSymbolSet = scope.$parent.currentSymbolSet;
            var dimensionId = currentSymbolSet.dimensionId,
                contextId = 'REALITY',
                siId = scope.si || "SI_UNKNOWN";
            // Get main icon

            var gg = scope.entity;

            scope.entityFn = pathService.getEntityFilePath(scope.entity, currentSymbolSet, siId) || config.BLANK_PATH;
            scope.frameFn = pathService.getFrameFilePath(contextId, siId, currentSymbolSet) || config.BLANK_PATH;
            element.bind('click', function () {
                scope.$apply(function () {
                    currentSymbol.setEntity(scope.entity);
                    currentSymbol.setEntityFn(scope.entityFn);
                    currentSymbol.setFrameFn(scope.frameFn);
                });

                $log.debug('Click ' + scope.si + " " + scope.entity.label);
            })

        }

        return {
            restrict: 'E',
            scope: {
                entity: '=',
                si: '@'
            },
            template: function (element, attrs) {
                return '<div class="milsymbol"><img class="symbol-sm" ng-src="{{frameFn}}"/><img class="symbol-sm" ng-src="{{entityFn}}"/></div>';
            },
            link: link
        };
    }])

    .directive('symbsetmod1', ['$log', 'config', 'pathService', 'currentSymbol', function ($log, config, pathService, currentSymbol) {
        function link(scope, element, attrs) {

            element.bind('click', function () {
                scope.$apply(function () {
                    currentSymbol.setMod1Fn(scope.modonepath + scope.modone.graphic);
                });

                $log.debug('Click ' + scope.modone.label);
            })
        }

        return {
            restrict: 'E',
            template: function (element, attrs) {
                return '<div class="milsymbol symbol-smm"><img ng-src="{{currentBoundingOctagon}}"><img class="symbol-sm" ng-src="{{modonepath+modone.graphic}}"></div>';
            },
            link: link
        };
    }])

    .directive('symbsetmod2', ['$log', 'config', 'pathService', 'currentSymbol', function ($log, config, pathService, currentSymbol) {
        function link(scope, element, attrs) {

            element.bind('click', function () {
                scope.$apply(function () {
                    currentSymbol.setMod2Fn(scope.modtwopath + scope.modtwo.graphic);
                });

                $log.debug('Click ' + scope.modtwo.label);
            })
        }

        return {
            restrict: 'E',
            template: function (element, attrs) {
                return '<div class="milsymbol symbol-smm"><img ng-src="{{currentBoundingOctagon}}"><img class="symbol-sm" ng-src="{{modtwopath+modtwo.graphic}}"></div>';
            },
            link: link
        };
    }])

    .filter('limitUseToFilter', function () {
        return function (input, isEnabled) {
            // if isEnable then filter out wines
            if (isEnabled) {
                return input.filter(function (item) { return item.limitUseTo});
            }
            else {
                return input
            }
        };
    });


