// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])



.controller('FirstController', function($scope) {
  /* BODY OF CONTROLLER - ADD CODE HERE */

    $scope.itemsList = [];

    // this function is exposed to view
    $scope.handleButtonClick = function() {
        alert("User Clicked Me");
    }

   $scope.myName = "Aaron Saunders"

   $scope.fullName = {
      "first" : "Aaron",
      "last"  : "Saunders"
   };

   /**
   * fills the itemsList variable with data to be displayed on the page
   */
   function populateList() {
      // adds a new element (specified JSON object) to $scope.itemsList
      $scope.itemsList.push({"name":"big screen TV", "room":"Basement"});
      $scope.itemsList.push({"name":"Xbox One", "room":"Basement"});
      $scope.itemsList.push({"name":"Ice Maker", "room":"Kitchen"});
   }

   // call function to populate list
   populateList();
});