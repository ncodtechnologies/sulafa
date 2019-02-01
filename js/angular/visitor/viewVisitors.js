
app.controller('viewVisitorCntrl', function($scope, $http,$location,$route,$routeParams) {
	$scope.title = "SulafaApp";
	$scope.formData={};
	$scope.formData.id_tenant= $routeParams.id_tenant;
	
	$scope.loadVisitorDt = function(id_visitor){
		$location.path("visitorDt/"+id_visitor);
	}
	
	$scope.loadVisitors = function(){
	$http({
		  method  : 'POST',
		  data	  : $.param($scope.formData),
		  url     : 'controller/getVisitors.php',
		  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
	}).then(function mySucces(response) {
        $scope.visitors = response.data.visitors;
    }, function myError(response) {
        $scope.visitors  = response.statusText;
    });
	}
	
	
	
});

