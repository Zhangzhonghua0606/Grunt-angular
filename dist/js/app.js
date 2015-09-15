define(['angular', 'angularUIRouter', 'angularAnimate', 'coreLoader'], function(angular) {
  var app;
  app = angular.module('my-app', ['ui.router', 'ngAnimate', 'coreModule']);
  app.config([
    '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');
      return $stateProvider.state('feature', {
        url: '/feature',
        templateUrl: 'partials/feature.html',
        controller: 'ctrl.feature',
        controllerAs: 'feature'
      }).state('member', {
        url: '/member',
        templateUrl: 'partials/member.html',
        controller: 'ctrl.member',
        controllerAs: 'member'
      }).state('home', {
        url: '/home',
        templateUrl: 'partials/home.html',
        controller: 'ctrl.home',
        controllerAs: 'home'
      }).state('angular', {
        url: '/angular/:target/edit/:id',
        templateUrl: 'partials/angular.html',
        controller: 'ctrl.angular',
        controllerAs: 'angular'
      }).state('scope', {
        url: '/scope',
        templateUrl: 'partials/scope.html',
        controller: 'ctrl.scope',
        controllerAs: 'angularScope'
      }).state('modal', {
        views: {
          modal: {
            templateUrl: "partials/modal/modal.html"
          }
        },
        parent: 'home',
        abstract: true
      }).state('modal.confirmAddToCart', {
        parent: 'modal',
        templateUrl: 'partials/modal/confirm.html',
        controller: 'ctrl.modal.confirm',
        controllerAs: 'confirm',
        onEnter: [
          '$state', function($state) {
            $(document).on('keyup', function(e) {
              if (e.keyCode === 27) {
                $(document).off('keyup');
                return $state.go('home');
              }
            });
            $(document).on('click', '.Modal-backdrop, .Modal-holder', function() {
              return $state.go('home');
            });
            return $(document).on('click', '.Modal-box, .Modal-box *', function(e) {
              return e.stopPropagation();
            });
          }
        ]
      }).state('modal.successfullyAdded', {
        parent: "modal",
        templateUrl: "partials/modal/success.html"
      });
    }
  ]).run([
    '$rootScope', function($rootScope) {
      $rootScope.hello = 'Hello Byron';
      return $rootScope.there = 'Hello Byron';
    }
  ]);
  return app;
});
