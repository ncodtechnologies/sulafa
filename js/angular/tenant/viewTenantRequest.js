app.controller('viewTenantRequestCntrl', function($scope, $http,$location,$route) {
	$scope.title = "SulafaApp";
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
	
	/*$scope.addTenant = function(id_tenant_request){
	$http({
		  method  : 'POST',
		  data	  : $.param({id_tenant_request:id_tenant_request}),
		  url     : 'controller/student/getClass.php',
		  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
	}).then(function mySucces(response) {
        $scope.classes = response.data.classes;
    }, function myError(response) {
        $scope.classes  = response.statusText;
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

