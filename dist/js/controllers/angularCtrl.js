define(['coreModule'], function(app) {
  return app.controller('ctrl.angular', [
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
        console.log('Promise one resolved with ', one);
        anotherDeferred = $q.defer();
        $timeout(function() {
          return anotherDeferred.resolve('bar');
        }, 1000);
        return anotherDeferred.promise;
      }).then(function(two) {
        return console.log('Promise two resolved with ', two);
      });
      return vm;
    }
  ]);
});
