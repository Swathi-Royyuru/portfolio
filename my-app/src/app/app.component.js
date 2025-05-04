var app = angular.module('myApp', []);

app.controller('MapCtrl', function($scope) {
  var autocomplete;

  function initAutocomplete() {
    var input = document.getElementById('autocomplete');
    autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', function () {
      var place = autocomplete.getPlace();
      $scope.address = place.formatted_address || input.value;
      $scope.$apply();
    });
  }

  $scope.goToLocation = function () {
    alert("Going to: " + $scope.address); // You can add your logic here
  };

  google.maps.event.addDomListener(window, 'load', initAutocomplete);
});
