define(['coreModule'], function(app) {
  return app.controller('ctrl.home', [
    '$scope', 'userService', '$state', function($scope, userService, $state) {
      var init, testArguments, vm;
      vm = this;
      vm.title = 'This is a home page';
      vm.currentUser = {
        id: 2011416973,
        badge: 'YT00542',
        name: 'Byron',
        age: 24,
        sex: 'male',
        email: 'xiaoqi_2591@outlook.com'
      };
      userService.user = vm.currentUser;
      vm.addToCart = function() {
        return $state.go('modal.confirmAddToCart');
      };
      testArguments = function(separator) {
        var args, shallowCopy;
        args = Array.prototype.slice.call(arguments, 1);
        shallowCopy = args.slice();
        console.log(_.isObject(arguments));
        console.log(_.isArray(args));
        console.log(arguments);
        console.log(args.join(separator));
        [].push.apply(args, ['d', 'e']);
        [].unshift.apply(args, ['a', 'b']);
        return console.log(args);
      };
      init = function() {
        return testArguments(',', 'b', 'c');
      };
      init();
      return vm;
    }
  ]);
});
