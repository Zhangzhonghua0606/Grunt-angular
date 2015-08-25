define ['coreModule'], (app) ->
  app.controller 'ctrl.member', ['$scope', ($scope) ->
    vm = this
    vm.title = 'This is a member page'

    vm.goToTop = ->
      $('.member-div').scrollTop 0
      return

    vm.goToBottom = ->
      scrollHeight = $('.scroll-list').height()
      $('.member-div').scrollTop scrollHeight
      return

    $scope.$watch ->
      $('.member-div').scrollTop()
    , (newValue) ->
      vm.scrollTopValue = newValue

    vm
  ]
