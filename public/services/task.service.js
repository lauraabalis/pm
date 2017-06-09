(function() {
    'use strict';

    angular
        .module('app')
        .service('taskService', taskService);

    taskService.$inject = ['$http'];

    function taskService($http) {
      this.foodDrinkTasks = [
        {
          task: "Task1"
        },
        {
          task: "Task2"
        },
        {
          task: "Task3"
        }
    ];
    this.activityTasks = [
      {
        task: "Task4"
      },
      {
        task: "Task5"
      },
      {
        task: "Task6"
      }
    ];
    this.decorTasks = [
      {
        task: "Task7"
      },
      {
        task: "Task8"
      },
      {
        task: "Task9"
      }
    ];
    this.partyFavorTasks = [
      {
        task: "Task10"
      },
      {
        task: "Task11"
      },
      {
        task: "Task12"
      }
    ];
    }
})();
