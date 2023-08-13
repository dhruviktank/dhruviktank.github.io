var app = angular.module("myModule",['ngRoute']);

app.config(function ($routeProvider){
    $routeProvider
    .when("/About",{
        templateUrl: "About.html",
    })
    .when("/Resume", {
        templateUrl: "resume.html",
    })
    .when("/",{
        templateUrl: "About.html",
    })
});