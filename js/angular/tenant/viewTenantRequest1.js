app.controller('viewTenantRequestCntrl', function($scope, $http,$location,$route,$routeParams) {
	$scope.title = "SulafaApp";
	//$scope.formData = {};
	/*

	$scope.addTenant = function(id_tenant_request){
    $http({
		  method  : 'POST',
		  url     : 'controller/addTenant.php',
		  data    : $.param(id_tenant_request:id_tenant_request),
	headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(function mySucces(response) {
        $scope.tenants = response.data;
    }, function myError(response) {
        $scope.tenants = response.statusText;
    });
	}*/
	
	$scope.loadTenantRequest = function(){
	$http({
		  method  : 'POST',
		  data	  : $.param({}),
		  url     : 'controller/getTenantRequest.php',
		  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
	}).then(function mySucces(response) {
        $scope.tenants = response.data.tenants;
    }, function myError(response) {
        $scope.tenants  = response.statusText;
    });
	}
	
	
	
});

