"use strict";
app.run(["$templateCache",
        function ($templateCache) {
            $templateCache.put("vg-templates/vg-next-video",
                '<div class="loader-container" ng-if="ctrl.isCompleted">' +
                    '<div round-progress max="ctrl.max" current="ctrl.current" color="#eeeeee" bgcolor="#333333" radius="50" stroke="10"></div>' +
                    '<div class="cancel" ng-click="ctrl.cancelTimer()">cancel</div>' +
                '</div>'
            );
        }
    ])
.directive("vgNextVideo",
[function () {
    return {
        restrict: "E",
        require: "^videogular",
        templateUrl: function (elem, attrs) {
            return attrs.vgTemplate || 'vg-templates/vg-next-video';
        },
        scope: {
            vgSrc: "=",
            vgTime: "=?"
        },
        controllerAs: "ctrl",
        controller: [
            function() {
            }
        ],
        link: function (scope, elem, attr, API) {
            scope.API = API;
        }
    }
}]);

