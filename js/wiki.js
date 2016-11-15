var app = angular.module('wiki', ['ui.router']);

function WikiPage(title, content) {
  this.title = title;
  this.content = content;
}

var pages = {
  Python: new WikiPage('Python', 'Python is a fun to use programming language. It is great for beginners.'),
  HTML: new WikiPage('HTML', 'HTML is the markup language used for making pages on the world wide web.')
};

app.controller('pageViewController', function($scope, $stateParams) {
  $scope.page = pages[$stateParams.page_name];
  $scope.state = true;
  if(!$scope.page){
    $scope.page = new WikiPage($stateParams.page_name, 'The page doesn\'t exist');
    $scope.state = false;
  }
});


app.controller('pageEditController', function($scope, $stateParams) {
  $scope.page = pages[$stateParams.page_name];
});

app.controller('pageSaveController', function($scope, $stateParams) {
  $scope.page = pages[$stateParams.page_name];
});

app.controller('pageCreatController', function($scope, $stateParams) {
  $scope.page = pages[$stateParams.page_name];
});


app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state({
      name: 'page_view',
      url: '/{page_name}',
      templateUrl: 'page_view.html',
      controller: 'pageViewController'
    })
    .state({
      name: 'page_edit',
      url: '/{page_name}/page_edit',
      templateUrl: 'page_edit.html',
      controller: 'pageEditController'
    })
    .state({
      name: 'creat_page',
      url: '/{page_name}/creat_page',
      templateUrl: 'creat_page.html',
      controller: 'pageCreatController'
    });
    // .state({
    //   name: 'save_page',
    //   url: '/{page_name}/save_page',
    //   templateUrl: 'save.html',
    //   controller: 'pageSaveController'
    // });

    $urlRouterProvider.otherwise('/');
});
