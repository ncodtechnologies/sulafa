
app.controller('viewVisitorDtCntrl', function($scope, $http,$location,$route,$routeParams) {
	$scope.title = "SulafaApp";
	$scope.formData={};
	$scope.formData.id_visitor= $routeParams.id_visitor;
	
	$scope.loadVisitorDt = function(){
	$http({
		  method  : 'POST',
		  data	  : $.param($scope.formData),
		  url     : 'controller/getVisitorDt.php',
		  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
	}).then(function mySucces(response) {
		$scope.formData.name = response.data.visitors[0].name;
		$scope.formData.id = response.data.visitors[0].id_visitor;
		$scope.formData.gate_access = response.data.visitors[0].gate_access;
		$scope.formData.valley_access = response.data.visitors[0].valley_access;
    }, function myError(response) {
        $scope.visitors  = response.statusText;
    });
	}
});
