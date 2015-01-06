angular.module('symbolApp')
    .controller('FramesCtrl', ['$scope', '$log', 'config', function ($scope, $log, config) {
        var SVG_PATH = config.SVG_PATH;
        $scope.affiliations = symbolData.affiliations;
        $scope.standardIdentities = symbolData.standardIdentities;
        $scope.SVG_PATH = SVG_PATH;
        $scope.dimensions = symbolData.dimensions.filter(function (item) {
            return item.geometry == "POINT"
        });

        $scope.getFrameFn = function (standardIdentity, dimension) {
            var aff = symbolData.affiliations;
            var obj = aff[$scope.context][dimension.id][standardIdentity.id];
            return obj ? SVG_PATH + obj.graphic : config.BLANK_PATH;

        }
    }])

    .directive('frametable', ['$log', function ($log) {
        return {
            restrict: 'E',
            controller: 'FramesCtrl',
            scope: {
                context: '@'
            },
            templateUrl: 'app/components/frames/frame_tbl.html'
        };
    }]);