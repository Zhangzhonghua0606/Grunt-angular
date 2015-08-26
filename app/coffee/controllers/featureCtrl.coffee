define ['coreModule'], (app) ->
  app.controller 'ctrl.feature', [
    '$scope'
    '$q'
    '$timeout'
    '$interval'
    ($scope, $q, $timeout, $interval) ->

      vm = this
      vm.title = 'This is a feature page'

      vm
    ]
