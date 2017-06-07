(function() {
    'use strict';

    angular.module('app')
        .component('mainComponent', {
          templateUrl: 'components/main/main.template.html',
          controller: function () {
          // controller: function (taskService) {
            var ctrl = this;
            ctrl.tasks = [];
            ctrl.showTask = showTask;
            //ctrl.tasks = taskService.tasks;

            function showTask() {
              ctrl.tasks.push({
                task: ctrl.newTask.task
              });
              ctrl.newTask.task = null;
            }
          }
        });

})();
