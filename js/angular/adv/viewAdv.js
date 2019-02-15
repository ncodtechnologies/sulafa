
app.controller('viewAdvCntrl', function($scope, $http,$location,$route,$routeParams) {
	$scope.title = "SulafaApp";
	$scope.str = "Advertisements";
	$scope.formData={};
	$scope.formData.id_tenant= $routeParams.id_tenant;
	
	$scope.rejected = {};
	$scope.approved = {};
	$scope.pending = {};
	$scope.accept = {};
	$scope.reject = {};
		
	
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
	
	$scope.acceptAdv = function(adv){	   
        $scope.approved[adv.id_adv] = true;
		$scope.pending[adv.id_adv] = true;
		$scope.rejected[adv.id_adv] = false;
		$scope.accept[adv.id_adv] = true;
		$scope.reject[adv.id_adv] = false;
		
		$http({
		  method  : 'POST',
		  data	  : $.param({id_adv:adv.id_adv}),
		  url     : 'controller/statusAcceptAdv.php',
			  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
		}).then(function mySucces(response) {
			$scope.visitors = response.data.visitors;
			$scope.loadAdv();
		}, function myError(response) {
			$scope.visitors  = response.statusText;
		});
			
    };
	
	$scope.rejectAdv = function(adv){
		$scope.pending[adv.id_adv] = true;
        $scope.rejected[adv.id_adv] = true;
		$scope.approved[adv.id_adv] = false;
		$scope.reject[adv.id_adv] = true;
		$scope.accept[adv.id_adv] = false;
		
		$http({
		  method  : 'POST',
		  data	  : $.param({id_adv:adv.id_adv}),
		  url     : 'controller/statusRejectAdv.php',
		  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
			}).then(function mySucces(response) {
				$scope.visitors = response.data.visitors;
				$scope.loadVisitors();
			}, function myError(response) {
				$scope.visitors  = response.statusText;
			});
    };
	
});

