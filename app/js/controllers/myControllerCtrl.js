define(['js/coreModule'], function(app) {
  app.controller('myController', ['$scope', function($scope){
    vm = this;
    vm.hello = "Hello Bryon";
    return vm;
  }]);
});
