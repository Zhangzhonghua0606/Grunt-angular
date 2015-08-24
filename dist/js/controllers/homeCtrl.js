define(['coreModule'], function(app) {
  return app.controller('ctrl.home', [
    '$scope', 'userService', function($scope, userService) {
      var vm;
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
      return vm;
    }
  ]);
});
