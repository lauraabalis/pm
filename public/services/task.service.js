(function() {
    'use strict';

    angular
        .module('app')
        .service('taskService', taskService);

    taskService.$inject = ['$http'];

    function taskService($http) {
      this.tasks = {
        foodDrinkTasks: [
          {task: "Hummus and pita"},
          {task: "Champagne"},
          {task: "Cake"}
        ],
        activityTasks: [
          {task: "Photo booth and props"},
          {task: "D.J."},
          {task: "Ring toss"}
        ],
        decorTasks: [
          {task: "Flowers"},
          {task: "Candles"},
          {task: "Confetti"}
        ],
        partyFavorTasks: [
          {task: "Jewelry"},
          {task: "Candy"},
          {task: "Stationery"}
        ]
      };

      this.getTasks = function(key) {
        return this.tasks[key];
      };

      this.addTask = function(key, task) {
        this.tasks[key].push(task);
      };

      // this.removeTask = function(key, task) {
      //   var
      // }
    }
})();
