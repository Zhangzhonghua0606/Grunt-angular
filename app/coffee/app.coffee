define [
  'angular'
  'angularUIRouter'
  'angularAnimate'
  'coreLoader'
], (angular) ->
  app = angular.module 'my-app', [
    'ui.router'
    'ngAnimate'
    'coreModule'
  ]

  app.config [
    '$stateProvider'
    '$urlRouterProvider'
    ($stateProvider, $urlRouterProvider) ->
      $urlRouterProvider.otherwise '/home'

      $stateProvider.state 'feature',
        url: '/feature'
        templateUrl: 'partials/feature.html'
        controller: 'ctrl.feature'
        controllerAs: 'feature'
      .state 'member',
        url: '/member'
        templateUrl: 'partials/member.html'
        controller: 'ctrl.member'
        controllerAs: 'member'
      .state 'home',
        url: '/home'
        templateUrl: 'partials/home.html'
        controller: 'ctrl.home'
        controllerAs: 'home'
      .state 'angular',
        url: '/angular'
        templateUrl: 'partials/angular.html'
        controller: 'ctrl.angular'
        controllerAs: 'angular'
      .state 'modal',
        views:
          modal:
            templateUrl: "partials/modal/modal.html"
        parent: 'home'
        abstract: true
      .state 'modal.confirmAddToCart',
        parent: 'modal'
        templateUrl: 'partials/modal/confirm.html'
        controller: 'ctrl.modal.confirm'
        controllerAs: 'confirm'
        onEnter: ['$state', ($state) ->
          $(document).on 'keyup', (e) ->
            if e.keyCode is 27
              $(document).off 'keyup'
              $state.go 'home'

          $(document).on 'click', '.Modal-backdrop, .Modal-holder', ->
            $state.go 'home'

          $(document).on 'click', '.Modal-box, .Modal-box *', (e) ->
            e.stopPropagation()
        ],
      .state 'modal.successfullyAdded',
        parent: "modal"
        templateUrl: "partials/modal/success.html"
    ]
    .run ['$rootScope', ($rootScope) ->
      $rootScope.hello = 'Hello Byron'
    ]
  app
