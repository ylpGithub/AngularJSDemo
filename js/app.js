'use strict';
app.run(['$rootScope', '$state', '$stateParams',function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
    ]
)
.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/page1');

    $stateProvider
        .state('page1', {
            url: '/page1',
            templateUrl: 'page/page_1.html'
        })
        .state('page2', {
            url: '/page2',
            controller: 'characterCtrl',
            controllerAs: 'character',
            templateUrl: 'page/page_2.html'
        })
        .state('page3', {
            url: '/page3',
            templateUrl: 'page/page_3.html'
        })
        .state('page4', {
            url: '/page4',
            templateUrl: 'page/page_4.html'
        })
    //.state('', {
    //  url: '/',
    //  templateUrl: '/.html',
    //  controller: '',
    //  controllerAs: '',
    //  resolve: {
    //	deps: ['$ocLazyLoad',
    //	  function( $ocLazyLoad ){
    //		return $ocLazyLoad.load(['js/controllers/chart.js']);
    //	}]
    //  }
    //})
}]);