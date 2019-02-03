app.controller('viewCarCleaningCntrl', function($scope, $http,$location,$route,$routeParams) {
	
	$scope.title = "SulafaApp";
	$scope.formData = {};
	
	
	$scope.loadCarCleaningDt = function(){
		$http({
			method	: 'POST',
			url		:'controller/getCarCleaningRequest.php',
			data	: $.param({}),
			 headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
	}).then(function mySucces(response) {
		$scope.formData.id_plan			= response.data.cars[0].id_plan;
		$scope.formData.id_tenant 		= response.data.cars[0].id_tenant;
		$scope.formData.vehicle_no 		= response.data.cars[0].vehicle_no;
		$scope.formData.date 			= response.data.cars[0].requested_date;
    }, function myError(response) {
		
        $scope.cars = response.statusText;
		});
	}
	
	
	
});

