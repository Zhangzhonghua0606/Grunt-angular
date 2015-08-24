define ['coreModule'], (app) ->
  app.controller 'ctrl.feature', ['$scope', ($scope) ->
    vm = this
    vm.title = 'This is a feature page'

    vm
  ]
