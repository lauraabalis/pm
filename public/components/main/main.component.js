(function() {
    'use strict';

    angular.module('app')
        .component('mainComponent', {
          templateUrl: 'components/main/main.template.html',
          controller: function () {
          // controller: function (taskService) {
            var ctrl = this;

            ctrl.foodDrink = [];
            ctrl.addFoodDrink = addFoodDrink;

            ctrl.activities = [];
            ctrl.addActivity = addActivity;

            ctrl.decor = [];
            ctrl.addDecor = addDecor;

            ctrl.partyFavors = [];
            ctrl.addPartyFavor = addPartyFavor;
            //ctrl.tasks = taskService.tasks;

            ctrl.activityCheckbox = false;

            ctrl.activityColor = "red";

            function addFoodDrink() {
              ctrl.foodDrink.push({
                task: ctrl.newFoodDrink
              });
              ctrl.newFoodDrink = null;
            }

            function addActivity() {
              ctrl.activities.push({
                task: ctrl.newActivity
              });
              ctrl.newActivity = null;
            }

            function addDecor() {
              ctrl.decor.push({
                task: ctrl.newDecor
              });
              ctrl.newDecor = null;
            }

            function addPartyFavor() {
              ctrl.partyFavors.push({
                task: ctrl.newPartyFavor
              });
              ctrl.newPartyFavor = null;
            }

          }
        });

})();
