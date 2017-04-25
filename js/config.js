// config
var app = angular.module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngTouch',
    'ngStorage',
    'ui.router',
    'ui.bootstrap',
    'pascalprecht.translate'
]);

app.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
	function ($controllerProvider,$compileProvider,$filterProvider,$provide) {
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
        app.constant   = $provide.constant;
        app.value      = $provide.value;
}]);


