angular.module('TourLeader.controllers', [])

.controller('AppCtrl', function ($scope) {
})
.controller('StartCtrl', function ($scope, $state) {
    var t1 = $.now();
    //do somthing
    var diff = t1 - $.now();
    if (diff < 1000) {
        setTimeout(function () {
            //$ionicNativeTransitions.stateGo('app.menu.tabs.home', {}, {
            //    "type": "slide",
            //    "direction": "up", // 'left|right|up|down', default 'left' (which is like 'next')
            //    "duration": 1500, // in milliseconds (ms), default 400
            //});
            $state.go('app.menu.tabs.home');
        }, 1000 - diff);
    }
    else {
        $state.go('app.menu.tabs.home');
    }
})


.controller('MenuCtrl', function ($scope, $ionicHistory) {
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.goBack = function () {
        $ionicHistory.goBack();
    };
    $scope.swipeLeft = function () {
        alert("hi");
    }
})
.controller('TabsCtrl', function ($scope) {
})

.controller('HomeCtrl', function ($scope, Locales, SlideShows, $state) {
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    //$ionicTabsDelegate.select(0);

    $scope.navTitle = '<img style="height: 100%;" src="../images/logoiclubs.png" />';
    $scope.locales = Locales.all();
    $scope.favorito = function (local) {

    };
    $scope.SlideShows = SlideShows.all();
    $scope.gotoLocation = function () {
        $state.go('app.menu.Place');
    }
})
.controller('PlaceCtrl', function ($scope) {
    //$ionicGesture.on('swipe', function (event) {
    //    alert("hi");

    //});
    $scope.navTitle = "Place"
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });
});
