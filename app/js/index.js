var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/feature");

  $stateProvider.state('feature', {
    url: "/feature",
    templateUrl: "partials/feature.html",
    controller: "ctrl.feature",
    controllerAs: "feature"
  })
  .state('member', {
    url: "/member",
    templateUrl: "partials/member.html",
    controller: "ctrl.member",
    controllerAs: "member"
  })
  .state('modal', {
    views: {
      modal: {
        templateUrl: "partials/modal/modal.html"
      }
    },
    abstract: true
  })
  .state('modal.confirmAddToCart', {
    parent: "modal",
    templateUrl: "partials/modal/confirm.html",
    onEnter: ["$state", function($state) {
      $(document).on("keyup", function(e) {
        if(e.keyCode == 27) {
          $(document).off("keyup");
          $state.go("feature");
        }
      });

      $(document).on("click", ".Modal-backdrop, .Modal-holder", function() {
        $state.go("feature");
      });

      $(document).on("click", ".Modal-box, .Modal-box *", function(e) {
        e.stopPropagation();
      });
    }],
  })
  .state('modal.successfullyAdded', {
    parent: "modal",
    templateUrl: "partials/modal/success.html"
  });
}).run();

myApp.controller('myController', function($scope) {
  vm = this;
  vm.hello = 'hello world';
});


