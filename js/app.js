var vegan = angular.module("vegan", ['ngRoute'])

    .directive('loading',   ['$http' ,function ($http)
    {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs)
            {
                scope.isLoading = function () {
                    return $http.pendingRequests.length > 0;
                };

                scope.$watch(scope.isLoading, function (v)
                {
                    if(v){
                        elm.show();
                    }else{
                        elm.hide();
                    }
                });
            }
        };

    }]);
// Create controller
vegan.controller('mainController', function ($scope, $route, $routeParams, $location) {
$scope.firstName= "John";
    $scope.lastName= "Doe";
})
vegan.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/vegetables', {
            templateUrl: 'pages/vegetables/vegetables.html',
            controller: 'vegetablesController'
        })
        .when('/fruits', {
            templateUrl: 'pages/fruits/fruits.html',
            controller: 'fruitsController'

        })
        .when('/who-are-we',{
            templateUrl: 'pages/who/who.html',
            controller: 'whoController'
        })
        .when('/vegetables/details-about-tommato-origin-and-nutritive-values',{
            templateUrl: 'pages/vegetables/vegs/tommato.html',
            controller: 'vegsCtrl'
        })
        .when('/vegetables/details-about-broccoli-origin-and-nutritive-values',{
            templateUrl: 'pages/vegetables/vegs/broccoli.html',
            controller: 'vegsCtrl'
        })
        .when('/vegetables/details-about-carrot-origin-and-nutritive-values',{
            templateUrl: 'pages/vegetables/vegs/carrot.html',
            controller: 'vegsCtrl'
        })
        .when('/vegetables/details-about-cabbage-origin-and-nutritive-values',{
            templateUrl: 'pages/vegetables/vegs/cabbage.html',
            controller: 'vegsCtrl'
        })
        .when('/vegetables/details-about-potato-origin-and-nutritive-values',{
            templateUrl: 'pages/vegetables/vegs/potato.html',
            controller: 'vegsCtrl'
        })
        .when('/vegetables/details-about-cucumber-origin-and-nutritive-values',{
            templateUrl: 'pages/vegetables/vegs/cucumber.html',
            controller: 'vegsCtrl'
        })
        .when('/fruits/details-about-apple-and-nutritive-values',{
            templateUrl: 'pages/fruits/frts/apple.html',
            controller: 'frutsCtrl'
        })
        .when('/fruits/details-about-apricots-and-nutritive-values',{
            templateUrl: 'pages/fruits/frts/apricots.html',
            controller: 'frutsCtrl'
        })
        .when('/fruits/details-about-grapes-and-nutritive-values',{
            templateUrl: 'pages/fruits/frts/grapes.html',
            controller: 'frutsCtrl'
        })
        .when('/fruits/details-about-pear-and-nutritive-values',{
            templateUrl: 'pages/fruits/frts/pear.html',
            controller: 'frutsCtrl'
        })
        .when('/fruits/details-about-plum-and-nutritive-values',{
            templateUrl: 'pages/fruits/frts/plum.html',
            controller: 'frutsCtrl'
        })
        .when('/fruits/details-about-strawberry-and-nutritive-values',{
            templateUrl: 'pages/fruits/frts/strawberry.html',
            controller: 'frutsCtrl'
        })

        .otherwise({
            templateUrl: "pages/home/home.html"
        })

});

