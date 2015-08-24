define(['coreModule'], function(app) {
  return app.controller('ctrl.feature', [
    '$scope', function($scope) {
      var vm;
      vm = this;
      vm.title = 'This is a feature page';
      return vm;
    }
  ]);
});
