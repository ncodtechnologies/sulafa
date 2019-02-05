app.controller('viewMaintenanceCntrl', function($scope, $http,$location,$route,$routeParams) {
	
	$scope.title = "SulafaApp";	
	$scope.str = "Maintanance";
	
	$scope.formData={};
	$scope.formData.id_tenant= $routeParams.id_tenant;
	
	$scope.loadMaintenanceDt = function(id_tenant){
		$http({
			method	: 'POST',
			data	: $.param($scope.formData),
			url		:'controller/getMaintenanceRequest.php',
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
	}).then(function mySucces(response) {
		$scope.maintenance 	=response.data.maintenance;/*
		$scope.formData.type			= response.data.maintenance[0].type;
		$scope.formData.id_tenant 		= response.data.maintenance[0].id_tenant;
		$scope.formData.description		= response.data.maintenance[0].description;
		$scope.formData.service_date 	= response.data.maintenance[0].service_date;
		$scope.formData.requested_date	= response.data.maintenance[0].requested_date;*/
    }, function myError(response) {
		
        $scope.maintenance = response.statusText;
		});
	}	
	
});

