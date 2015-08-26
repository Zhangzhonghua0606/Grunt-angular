define(['coreModule'], function(app) {
  return app.controller('ctrl.feature', [
    '$scope', '$q', '$timeout', '$interval', function($scope, $q, $timeout, $interval) {
      var vm;
      vm = this;
      vm.title = 'This is a feature page';
      return vm;
    }
  ]);
});
