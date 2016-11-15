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
  $scope.pageName = $stateParams.page_name;
  $scope.content = pages[$scope.pageName].content;
});

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state({
      name: 'page_view',
      url: '/{page_name}',
      templateUrl: 'page_view.html',
      controller: 'pageViewController'
    });
    // .state({
    //
    // })

});
