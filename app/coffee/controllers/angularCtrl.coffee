define ['coreModule'], (app) ->
  app.controller 'ctrl.angular', [
    '$scope'
    '$q'
    '$timeout'
    '$interval'
    '$stateParams'
    ($scope, $q, $timeout, $interval, $stateParams) ->
      vm = this

      vm.title = 'This is a angular page'

      console.log $stateParams

      deferred = $q.defer()

      # A demo for deferred.promise.then(success callback, error callback, progress callback)
      #
      # deferred.promise.then (data) ->
      #   console.log 'success: ' + data
      # , (error) ->
      #   console.log 'fail: ' + error
      # , (notification) ->
      #   console.log notification

      # progress = 0;
      # interval = $interval ->
      #   if progress >= 100
      #     $interval.cancel interval;
      #     deferred.resolve 'All done!'
      #   progress += 10;
      #   deferred.notify(progress + '%...');
      # , 100

      # A demo for deferred.promise.then(success callback).catch(error callback)
      #
      # $timeout ->
      #   deferred.resolve 'I am ready'
      #   # deferred.reject 'I failed'
      # , 2000

      # deferred.promise
      # .then (data) ->
      #   console.log 'success: ' + data
      # .catch (error) ->
      #   console.log 'fail: ' + error

      # A dome for chain programing via promise.then(callback).then(callback)...
      # The last step's returned value will be passed to next step.
      # deferred.promise
      # .then (val) ->
      #   console.log val
      #   return 'B';
      # .then (val) ->
      #   console.log val
      #   return 'C'
      # .then (val) ->
      #   console.log(val);

      # deferred.resolve('A');

      $timeout ->
        deferred.resolve('foo');
      , 1000

      deferred.promise
      .then (one) ->
        # console.log('Promise one resolved with ', one);
        anotherDeferred = $q.defer();
        # resolve after another second
        $timeout ->
          anotherDeferred.resolve 'bar'
        , 1000
        return anotherDeferred.promise
      .then (two) ->
        # console.log('Promise two resolved with ', two);

      vm
  ]

  # test scope in angular
  app.controller 'outer', [
    '$scope'
    ($scope) ->
      vm = this

      $scope.a = 1
      $scope.data =
        a: 2

      $scope.$watch 'a', (newValue) ->
        console.log 'a = ' + newValue

      vm.flag = 2

      $scope.$watch 'vm.flag', (newValue) ->
        console.log 'vm.flag = ' + newValue

      @internalVar = 3;
      $scope.add = =>
        @internalVar++
        console.log @internalVar

      newScope = $scope.$new()
      newScope.tag = 10
      $scope.minus = ->
        newScope.tag--

      newScope.$watch 'tag', (newValue) ->
        console.log 'tag = ' + newValue
      vm
  ]

  app.controller 'inner', [
    '$scope'
    ($scope) ->
      vm = this

      vm
  ]
