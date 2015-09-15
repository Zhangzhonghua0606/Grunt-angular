define ['coreModule'], (app) ->
  app.controller 'ctrl.scope', [
    '$scope'
    '$q'
    '$timeout'
    '$interval'
    '$stateParams'
    ($scope, $q, $timeout, $interval, $stateParams) ->
      vm = this

      vm.title = 'This is a angular scope page'

      Scope = ->
        this.$$watchers = []
        this.$$asyncQueue = []

      Scope.prototype.$watch = (watchFn, listenerFn, valueEq) ->
        watcher =
          watchFn: watchFn
          listenerFn: listenerFn or ->
          valueEq: !!valueEq
        this.$$watchers.push watcher

      Scope.prototye.$$areEqual = (newValue, oldValue, valueEq) ->
        if valueEq
          return _.isEquals newValue, oldValue
        else
          return newValue is oldValue or (typeof newValue is 'number' and typeof oldValue is 'number' and isNaN(newValue) and isNaN(oldValue))

      Scope.prototype.$$digestOnce = ->
        self = this
        dirty = false
        _.forEach this.$$watchers, (watch) ->
          newValue = watch.watchFn(self)
          oldValue = watch.last
          if not this.$$areEqual newValue, oldValue, watch.valueEq
            watch.listenerFn newValue, oldValue, self
            dirty = true
          watch.last = if watch.valueEq then angular.copy newValue else newValue

        return dirty

      Scope.prototype.$digest = ->
        ttl = 10
        dirty = false
        # do
        #   while this.$$asyncQueue.length
        #     asyncTask = this.$$asyncQueue.shift()
        #     this.$eval asyncTask.expression

        #   dirty = this.$$digestOnce()
        #   if dirty and not (ttl--)
        #     throw '10 digest iterations reached'
        # while dirty

      Scope.prototype.$eval = (expr, locals) ->
        return expr this, locals

      Scope.prototype.$apply = (expr) ->
        try
          this.$eval(expr)
        finally
          this.$digest

      Scope.prototype.$evalAsync = (expr) ->
        data =
          scope: this
          expression: expr
        this.$$asyncQueue.push data

      vm
  ]
