
app.controller('viewAdvCntrl', function($scope, $http,$location,$route,$routeParams) {
	$scope.title = "SulafaApp";
	$scope.str = "Advertisements";
	$scope.formData={};
	$scope.formData.id_tenant= $routeParams.id_tenant;
		
	
	$scope.loadAdv = function(){
	$http({
		  method  : 'POST',
		  data	  : $.param($scope.formData),
		  url     : 'controller/getAdv.php',
		  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
	}).then(function mySucces(response) {
        $scope.advs = response.data.advs;
    }, function myError(response) {
        $scope.advs  = response.statusText;
    });
	}
	
});

