
app.controller('viewAnnouncementCntrl', function($scope, $http,$route) {
	$scope.title = "SulafaApp";
	$scope.str = "Announcement";
	$scope.formData={};
	
	$scope.loadAnnouncements = function(){
	$http({
		  method  : 'POST',
		  data	  : $.param({}),
		  url     : 'controller/getAnnouncement.php',
		  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
	}).then(function mySucces(response) {
		$scope.announcements = response.data.announcements;
    }, function myError(response) {
        $scope.announcements  = response.statusText;
    });
	}
	
	$scope.removeAnnouncement = function(id_announcement){
		console.log(id_announcement);
	$http({
		  method  : 'POST',
		  data	  : $.param({id_announcement:id_announcement}),
		  url     : 'controller/deleteAnnouncement.php',
		  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
	}).then(function mySucces(response) {
		$scope.announcements = response.data.announcements;
		$scope.loadAnnouncements();
    }, function myError(response) {
        $scope.announcements  = response.statusText;
    });
	}
});
