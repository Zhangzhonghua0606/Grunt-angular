'use strict';
define(['coreModule'], function(app) {
  return app.controller('ctrl.modal.confirm', [
    '$scope', 'userService', function($scope, userService) {
      var vm;
      vm = this;
      vm.user = userService.user;
      vm.removeEmail = function() {
        return delete vm.user.email;
      };
      return vm;
    }
  ]);
});
