define(['coreModule'], function(app) {
  return app.controller('ctrl.member', [
    '$scope', function($scope) {
      var vm;
      vm = this;
      vm.title = 'This is a member page';
      vm.goToTop = function() {
        $('.member-div').scrollTop(0);
      };
      vm.goToBottom = function() {
        var scrollHeight;
        scrollHeight = $('.scroll-list').height();
        $('.member-div').scrollTop(scrollHeight);
      };
      $scope.$watch(function() {
        return $('.member-div').scrollTop();
      }, function(newValue) {
        return vm.scrollTopValue = newValue;
      });
      return vm;
    }
  ]);
});
