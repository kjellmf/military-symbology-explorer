angular.module('symbolApp')
    .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'app/components/home/home.html'
        })
        .state('main', {
            url: '/main',
            templateUrl: 'app/components/symbol/main.html'
        })
        .state('frames', {
            url: '/frames',
            templateUrl: 'app/components/frames/frames.html'
        })
        .state('frames.reality', {url: "#reality"})
        .state('frames.exercise', {url: "#exercise"})
        .state('frames.simulation', {url: "#simulation"})

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: 'app/components/about/about.html'
        });
});
