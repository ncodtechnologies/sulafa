
var app = angular.module("sulafaApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        controller: 'blankCtrl',
        templateUrl : "view/blank.html"
    })
    .when("/tenants", {
        controller: 'viewTenantCntrl',
        templateUrl : "view/tenant/viewTenants.html"
    })
    .when("/tenantDt/:id_tenant?/", {
        controller: 'viewTenantDtCntrl',
        templateUrl : "view/tenant/viewTenantDt.html"
    })
    .when("/visitors/:id_tenant?/", {
        controller: 'viewVisitorCntrl',
        templateUrl : "view/visitor/viewVisitors.html"
    })
    .when("/visitorDt/:id_visitor?/", {
        controller: 'viewVisitorDtCntrl',
        templateUrl : "view/visitor/viewVisitorDt.html"
    })
    .when("/tenantRequest", {
        controller: 'viewTenantRequestCntrl',
        templateUrl : "view/tenant/viewTenantRequest.html"
    })
    .when("/carCleaning/:id_tenant?/", {
        controller: 'viewCarCleaningCntrl',
        templateUrl : "view/car_cleaning/viewCarCleaning.html"
    })
    .when("/maintenance/:id_tenant?/", {
        controller: 'viewMaintenanceCntrl',
        templateUrl : "view/maintenance/viewMaintenance.html"
    })
    .when("/adv/:id_tenant?/", {
        controller: 'viewAdvCntrl',
        templateUrl : "view/adv/viewAdv.html"
    })
    .when("/addAnnouncement/", {
        controller: 'addAnnouncementCntrl',
        templateUrl : "view/announcement/addAnnouncement.html"
    })
    .when("/viewAnnouncement/", {
        controller: 'viewAnnouncementCntrl',
        templateUrl : "view/announcement/viewAnnouncement.html"
    })
});

app.controller('sulafaCtrl', function($scope,sharedService,$rootScope) {
    $rootScope.title = "App";
});

app.service("sharedService", function() {
    this.data = "App";

    this.activateMenu = function(menu,$rootScope)
    {
        $rootScope.activemenu_students = "";
        $rootScope.activemenu_teachers = "";
        $rootScope.activemenu_classes = "";
        $rootScope.activemenu_fees = "";
        if(menu=="students")
            $rootScope.activemenu_students = "active";
        if(menu=="teachers")
            $rootScope.activemenu_teachers = "active";
        if(menu=="classes")
            $rootScope.activemenu_classes = "active";
        if(menu=="fees")
            $rootScope.activemenu_fees = "active";
    }

});





