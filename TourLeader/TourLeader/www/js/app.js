/* Autor: Soroosh Ansari */

angular.module('TourLeader', ['ionic', 'TourLeader.controllers', 'TourLeader.services'])

.run(function ($ionicPlatform, $state) {
    $ionicPlatform.ready(function () {

        ////navigator.splashscreen.show();
        //if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        //    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        //    cordova.plugins.Keyboard.disableScroll(true);

        //}
        //if (window.StatusBar) {
        //    //StatusBar.styleDefault();
        //    StatusBar.styleLightContent();
        //}

        //setTimeout(function () {
        //    navigator.splashscreen.hide();
        //    $state.go('app.menu.tabs.home')
        //}, 2000);
        $state.go('app.start');
        //$state.go('app.menu.tabs.home');
    });
})

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    //$ionicConfigProvider.backButton.previousTitleText(true);
    //$ionicConfigProvider.backButton.text('back');

    $ionicConfigProvider.tabs.position('bottom');


    $stateProvider

  .state('app', {
      url: '/app',
      abstract: true,
      template: '<ion-nav-view name="MainContent"></ion-nav-view>',
      controller: "AppCtrl"
  })
  .state('app.start', {
      url: '/app/start',
      views: {
          "MainContent": {
              templateUrl: 'templates/start.html',
              controller: "StartCtrl"
          }
      }
  })
  .state('app.menu', {
      url: '/app/menu',
      views: {
          "MainContent": {
              templateUrl: 'templates/menu.html',
              controller: "MenuCtrl"
          }
      }
  })
  .state('app.menu.tabs', {
      url: '/app/menu/tabs',
      views: {
          "menuContent": {
              templateUrl: 'templates/tabs.html',
              controller: "TabsCtrl"
          }
      }
  })
  .state('app.menu.tabs.home', {
      url: '/app/menu/tabs/home',
      views: {
          "home": {
              templateUrl: "templates/home.html",
              controller: "HomeCtrl"
          }
      }
  })
  .state('app.menu.Place', {
      url: '/app/menu/Place',
      views: {
          "menuContent": {
              templateUrl: "templates/Place.html",
              controller: "PlaceCtrl"
          }
      }
  });

    $urlRouterProvider.otherwise('/app/start');

})
.directive('dragBack', function ($ionicGesture, $state) {
    return {
        restrict: 'A',
        link: function (scope, elem, attr) {

            $ionicGesture.on('swipe', function (event) {

                console.log('Got swiped!');
                event.preventDefault();
                window.history.back();

            }, elem);

        }
    }
});
