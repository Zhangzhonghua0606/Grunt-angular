define(['coreModule'], function(app) {
  return app.controller('ctrl.member', [
    '$scope', function($scope) {
      var vm;
      vm = this;
      vm.title = 'This is a member page';
      return vm;
    }
  ]);
});
