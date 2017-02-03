'use strict';
app.controller('relatedController', function($scope, $http) {

	$http.get("videodata.json").then(function (response) {$scope.videos = response.data.videos;});
	$scope.removeItem = function (x) {$scope.videos.splice(x, 1);};
	
});


/*$http.get("current.json").then(function (response) {
			
			for (var i=0, l=response.data.sources.length; i<l; i++)
			{
			console.log(response.data.sources[i]);
			controller.videos.push(response.data.sources[i]);
			}
			console.log("all list loaded");
			console.log(response.data);
			console.log(controller.videos);
			
		});
		*/