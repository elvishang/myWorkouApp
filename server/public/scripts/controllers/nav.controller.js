myApp.controller('NavController',function(UserService) {
    console.log('NavController created');
    let vm = this;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;
  });