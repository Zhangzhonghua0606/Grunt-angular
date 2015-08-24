define(['coreModule'], function(app) {
  return app.controller('ctrl.home', [
    '$scope', function($scope) {
      var vm;
      vm = this;
      vm.title = 'This is a home page';
      return vm;
    }
  ]);
});
