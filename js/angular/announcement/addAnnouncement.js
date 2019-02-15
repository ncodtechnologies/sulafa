app.controller('addAnnouncementCntrl', function($scope, $http,$route) {
	$scope.title = "SulafaApp";
	$scope.str = "Announcement";
	$scope.formData={};		
		
	$scope.processForm = function(){
	$http({
		  method  : 'POST',
		  data	  : $.param($scope.formData),
		  url     : 'controller/addAnnouncement.php',
		  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
	}).then(function mySucces(response) {
        $scope.announcements = response.data;
    }, function myError(response) {
        $scope.announcements  = response.statusText;
    });	
	}
});

