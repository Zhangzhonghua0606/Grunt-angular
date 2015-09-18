define ['coreModule'], (app) ->
  app.controller 'ctrl.home', [
    '$scope'
    'userService'
    '$state'
    , ($scope, userService, $state) ->
      vm = this

      vm.title = 'This is a home page'

      vm.currentUser =
        id: 2011416973
        badge: 'YT00542'
        name: 'Byron'
        age: 24
        sex: 'male'
        email: 'xiaoqi_2591@outlook.com'

      userService.user = vm.currentUser

      vm.addToCart = ->
        $state.go 'modal.confirmAddToCart'

      testArguments = (separator) ->
        # Same as [].slice.call(arguments)
        args = Array.prototype.slice.call arguments, 1
        # Copy an Array
        shallowCopy = args.slice()

        # arguments is not an array.
        console.log _.isObject arguments
        console.log _.isArray args

        console.log arguments
        # Outputs b,c
        console.log args.join separator

        # args.push 'd' # Add 'd' to the end
        # args.unshift 'a' # Add 'a' to the front

        [].push.apply args, ['d', 'e'] # same as args.concat(['d', 'e'])
        [].unshift.apply args, ['a', 'b'] # Add 'a'，'b' to the front, same as ['a', 'b'].concat(args)
        # Note: concat can not mutate the args. The returned value is the merged result.

        console.log args
        # while args.length > 0
        #   console.log args.shift() # Remove from the front of an Array

      init = ->
        testArguments ',', 'b', 'c'

      init()

      vm
  ]
