define(['js/coreModule'], function(app){
  app.controller('ctrl.feature', function($state, $scope) {
    vm = this;
    vm.hello = 'hello feature';

    vm.goToMember = function() {
      $state.go('member');
    }

    var activities = [
      {
        id: 1,
        action: "create",
      },
      {
        id: 2,
        action: "claim",
      },
      {
        id: 3,
        action: "comment",
      }
    ];

    var newActivities = [
      {
        id: 1,
        action: "create",
      },
      {
        id: 2,
        action: "claim",
      },
      {
        id: 3,
        action: "comment",
      },
      {
        id: 4,
        action: "resolve",
      },
      {
        id: 5,
        action: "comment",
      },
      {
        id: 6,
        action: "close",
      }
    ]

    var activity = {
      id: 7,
      action: "comment",
    }

    // Use `concat` will return the new array.
    var concatedArray = activities.concat(newActivities.slice(-1));
    // What if we concat an object?
    var concatedArray2 = activities.concat(activity);

    // Little difference between `push` and `concat`
    // Use `push` will put new item into original array. if new item is an array then an array will be pushed into the source array.
    // Note: the difference between `newActivities.slice(-1)[0]` and `newActivities.slice(-1)`
    // if no `[0]` activities will format like -- [object, object, object, array[1]] --
    // oops! That definitely what we don't want to perform.
    var copyActivities = activities; //This is a transtion quote, which means if `copyActivities` changes, `activities` will changes too.
    activities.push(newActivities.slice(-1)[0]);

    // What if we push an object?
    var copyActivities2 = activities;
    copyActivities2.push(activity);

    // The concatedArray is equivalent to activites
    // console.log(concatedArray);
    // console.log(concatedArray2);  //print out [object, object, object, object]

    // console.log(copyActivities);
    // console.log(copyActivities2);

    // Use `apply` method to extend method `push`
    // Array.prototype.push.apply(activities, newActivities); // or activities.push.apply(activities, newActivites);
    // console.log(activities);


    return vm;
  });
});
