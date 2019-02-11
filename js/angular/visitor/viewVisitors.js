app.controller('viewVisitorCntrl', function($scope, $http,$location,$route,$routeParams) {
	$scope.title = "SulafaApp";
	$scope.str = "Visitors";
	$scope.formData={};
	$scope.formData.id_tenant= $routeParams.id_tenant;
	$scope.rejected = {};
	$scope.approved = {};
	$scope.pending = {};
	$scope.accept = {};
	$scope.reject = {};
	
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
	$scope.app =true;
	$scope.rej =true;
	
	 /* $scope.rejectVisitor = function (index) {
		  $scope.num1 = index;
        $scope.accept =false;
        $scope.reject = true;
		$scope.rej =false;
		$scope.pen =true;
		$scope.app =true;
      };*/	  
	  $scope.accept1 = function(index){
		  
        $scope.accept =true;
        $scope.reject =false;		
		$scope.rej =true;
		$scope.pen =true;
		$scope.app =false;
		$scope.num3 = index;
  };
	
	$scope.acceptVisitor = function(visitor){	   
        $scope.approved[visitor.id_visitor] = true;
		$scope.pending[visitor.id_visitor] = true;
		$scope.rejected[visitor.id_visitor] = false;
		$scope.accept[visitor.id_visitor] = true;
		$scope.reject[visitor.id_visitor] = false;
    };
	 $scope.rejectVisitor = function(visitor){
		$scope.pending[visitor.id_visitor] = true;
        $scope.rejected[visitor.id_visitor] = true;
		$scope.approved[visitor.id_visitor] = false;
		$scope.reject[visitor.id_visitor] = true;
		$scope.accept[visitor.id_visitor] = false;
    };

});

