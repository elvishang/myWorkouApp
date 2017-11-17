myApp.controller('WorkoutController',function(UserService) {
    console.log('WorkoutController created');
    let vm = this;
    vm.userService = UserService;

  });