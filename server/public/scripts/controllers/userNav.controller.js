myApp.controller('UserNavController',function(UserService) {
    console.log('UserNavController created');
    let vm = this;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;
  });