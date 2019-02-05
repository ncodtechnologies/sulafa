app.controller('viewCarCleaningCntrl', function($scope, $http,$location,$route,$routeParams) {
	
	$scope.title = "SulafaApp";
	$scope.str = "Car Cleaning Request";
	$scope.formData={};
	$scope.formData.id_tenant= $routeParams.id_tenant;
	
	$scope.loadCarCleaningDt = function(id_tenant){
		$http({
			method	: 'POST',
			data	: $.param($scope.formData),
			url		:'controller/getCarCleaningRequest.php',
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
	}).then(function mySucces(response) {
		$scope.cars = response.data.cars;
		/*$scope.formData.id_plan			= response.data.cars[0].id_plan;
		$scope.formData.id_tenant 		= response.data.cars[0].id_tenant;
		$scope.formData.vehicle_no 		= response.data.cars[0].vehicle_no;
		$scope.formData.date 			= response.data.cars[0].requested_date;*/
    }, function myError(response) {
		
        $scope.cars = response.statusText;
		});
	}
	

});

