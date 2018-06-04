var app = angular.module("ghapi_issues",[]);
app.controller("IssuesController", function($scope, $http){
    const clientId='';
    var search = new URLSearchParams()
    search.set('order', '-score');
    
    $scope.posts = []; 
    $scope.nuevopost={};
    viewModel = this;
    $http.get("https://api.github.com/repos/parguita/testissues/issues")
        .then(function(response){ 
             $scope.posts = response.data; 
        },function(error){
            console.log(error);
        });
    $scope.addPost = function(){ 
        $http.post("https://api.github.com/repos/parguita/testissues/issues",{
                      'title': $scope.nuevopost.title,
                      'body': $scope.nuevopost.body
                },{
                  headers:{
                      'Authorization': 'token '+ $scope.nuevopost.token,
                  }
                }
                  )
                    .then(function(response){ 
                        $scope.posts.push(response.data); 
                        console.log(response);
                    },
                          function(error){
                        console.log('Error');
                        console.log(error);
                    });
                },function(error){
                    console.log(error);
    }
});