define(['coreModule'], function(app) {
  return app.controller('ctrl.angular', [
    '$scope', '$q', '$timeout', '$interval', function($scope, $q, $timeout, $interval) {
      var deferred, vm;
      vm = this;
      vm.title = 'This is a angular page';
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
