app.controller('viewTenantRequestCntrl', function($scope, $http,$location,$route) {
	$scope.title = "SulafaApp";
	$scope.str = "Tenant Requests";
	$scope.formData={};
	
	$scope.addTenant = function(id_tenant_request){
    $http({
		  method  : 'POST',
		  data    : $.param({id_tenant_request:id_tenant_request}),
		  url     : 'controller/addTenant.php',
	headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(function mySucces(response) {
        $scope.tenants = response.data;
    }, function myError(response) {
        $scope.tenants = response.statusText;
    });
	}
	
	$scope.deleteTenantRequest = function(id_tenant_request){
    $http({
		  method  : 'POST',
		  data    : $.param({id_tenant_request:id_tenant_request}),
		  url     : 'controller/deleteTenantRequest.php',
	headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(function mySucces(response) {
        $scope.tenants = response.data;
		$route.reload();
    }, function myError(response) {
        $scope.tenants = response.statusText;
    });
	}
	
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

