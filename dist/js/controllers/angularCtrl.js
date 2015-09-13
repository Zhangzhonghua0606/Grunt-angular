define(['coreModule'], function(app) {
  app.controller('ctrl.angular', [
    '$scope', '$q', '$timeout', '$interval', '$stateParams', function($scope, $q, $timeout, $interval, $stateParams) {
      var deferred, vm;
      vm = this;
      vm.title = 'This is a angular page';
      console.log($stateParams);
      deferred = $q.defer();
      $timeout(function() {
        return deferred.resolve('foo');
      }, 1000);
      deferred.promise.then(function(one) {
        var anotherDeferred;
        anotherDeferred = $q.defer();
        $timeout(function() {
          return anotherDeferred.resolve('bar');
        }, 1000);
        return anotherDeferred.promise;
      }).then(function(two) {});
      return vm;
    }
  ]);
  app.controller('outer', [
    '$scope', function($scope) {
      var newScope, vm;
      vm = this;
      $scope.a = 1;
      $scope.data = {
        a: 2
      };
      $scope.$watch('a', function(newValue) {
        return console.log('a = ' + newValue);
      });
      vm.flag = 2;
      $scope.$watch('vm.flag', function(newValue) {
        return console.log('vm.flag = ' + newValue);
      });
      this.internalVar = 3;
      $scope.add = (function(_this) {
        return function() {
          _this.internalVar++;
          return console.log(_this.internalVar);
        };
      })(this);
      newScope = $scope.$new();
      newScope.tag = 10;
      $scope.minus = function() {
        return newScope.tag--;
      };
      newScope.$watch('tag', function(newValue) {
        return console.log('tag = ' + newValue);
      });
      return vm;
    }
  ]);
  return app.controller('inner', [
    '$scope', function($scope) {
      var vm;
      vm = this;
      return vm;
    }
  ]);
});
