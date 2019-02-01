app.controller('viewTenantCntrl', function($scope, $http,$location,$route) {
	$scope.title = "SulafaApp";
	
	$scope.loadTenantDt = function(id_tenant){
		$location.path("tenantDt/"+id_tenant);
	}
	
	$scope.loadTenants = function(){
	$http({
		  method  : 'POST',
		  data	  : $.param({}),
		  url     : 'controller/getTenants.php',
		  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
	}).then(function mySucces(response) {
        $scope.tenants = response.data.tenants;
    }, function myError(response) {
        $scope.tenants  = response.statusText;
    });
	}		
});

