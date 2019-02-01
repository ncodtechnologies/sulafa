app.controller('viewTenantDtCntrl', function($scope, $http,$location,$route,$routeParams) {
	
	$scope.title = "SulafaApp";
	$scope.formData = {};
	$scope.formData.id_tenant= $routeParams.id_tenant;
	
	$scope.loadVisitors = function(id_tenant){
		console.log(id_tenant);
		$location.path("visitors/"+id_tenant);
	}
	
	$scope.loadTenantDt = function(){
		$http({
			method	: 'POST',
			url		:'controller/getTenantDt.php',
			data	: $.param($scope.formData),
			 headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
	}).then(function mySucces(response) {
		console.log($scope.formData.id_tenant);
		$scope.formData.name		= response.data.tenants[0].name;
		$scope.formData.id 	= response.data.tenants[0].id;
		$scope.formData.phone 		= response.data.tenants[0].phone;
		$scope.formData.emirates_id 		= response.data.tenants[0].emirates_id;
		$scope.formData.room_no 		= response.data.tenants[0].room_no;
		$scope.formData.pass_hash= response.data.tenants[0].pass_hash;
    }, function myError(response) {
		
        $scope.tenants = response.statusText;
		});
	}
	
	
	
});

