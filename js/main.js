'use strict';
app.controller('HomeCtrl',
    ["$sce", "$timeout", "$http", "$q", function ($sce, $timeout, $http, $q) {
        var controller = this;
        controller.state = null;
        controller.API = null;
        controller.currentVideo = 0;
		var deferred = $q.defer();
		
		

        controller.onPlayerReady = function(API) {
            controller.API = API;
        };

        controller.onCompleteVideo = function() {
            controller.isCompleted = true;

            controller.currentVideo++;

            if (controller.currentVideo >= controller.videos.length) controller.currentVideo = 0;

            controller.setVideo(controller.currentVideo);
        };
		
		 controller.loadData = function() {
                $http.get("current.json").then(response,
               	
				function(response) {
				
				var result= [];

                for (var i=0, l=response.data.length; i<l; i++) {
                    var mediaSources = [];
 
                    for (var mi=0, ml=response.data[i].length; mi<ml; mi++) {
                        var mediaFile = {
                            src: $sce.trustAsResourceUrl(response.data[i][mi].src), type: response.data[i][mi].type
                        };
 
                        mediaSources.push(mediaFile);
                    }
 
                    result.push(mediaSources);
                }
 
                deferred.resolve(result);
            },
 
            function(error) {
                deferred.reject(error);
            }
			 
			 );
 
          return deferred.promise;
            
		 };

        

        controller.config = {
            preload: "none",
            autoHide: false,
            autoHideTime: 3000,
            autoPlay: false,
            sources: controller.loadData,
            theme: {
                url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
            },
            plugins: {
                poster: "http://www.videogular.com/assets/images/videogular.png"
            }
        };

        controller.setVideo = function(index) {
            controller.API.stop();
            controller.currentVideo = index;
            controller.config.sources = controller.videos[index];
            $timeout(controller.API.play.bind(controller.API), 100);
        };
    }]
);