(function() {
    'use strict';

    angular.module('app')
        .component('mainComponent', {
          templateUrl: 'components/main/main.template.html',
          controller: function ($http) {
            var ctrl = this;
            console.log("test");
            ctrl.tasks = [];

            ctrl.$onInit = function() {
              $http.get("/api/tasks")
                .then(function(response) {
                  ctrl.posts = response.data;
                });
            };

          }
        });

})();
