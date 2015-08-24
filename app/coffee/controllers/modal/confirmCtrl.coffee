'use strict'

define ['coreModule'], (app) ->
  app.controller 'ctrl.modal.confirm', [
    '$scope'
    'userService'
    , ($scope, userService) ->
      vm = this

      vm.user = userService.user

      vm.removeEmail = ->
        delete vm.user.email

      vm
  ]
