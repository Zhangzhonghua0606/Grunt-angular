define ['coreModule'], (app) ->
  app.controller 'ctrl.member', ['$scope', ($scope) ->
    vm = this
    vm.title = 'This is a member page'

    vm
  ]
