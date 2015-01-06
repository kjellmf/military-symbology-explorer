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

 .directive('symbsetsymb', ['$log', 'config', 'pathService', function ($log, config, pathService) {

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
    }]);