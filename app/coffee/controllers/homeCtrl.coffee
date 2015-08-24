define ['coreModule'], (app) ->
  app.controller 'ctrl.home', ['$scope', ($scope) ->
    vm = this
    vm.title = 'This is a home page'

    vm
  ]
