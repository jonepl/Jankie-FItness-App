/*
    * TODO: Figure out how to fill in all primary secondary view buttons accordingly (muscle part name and muscle group)
    * TODO: Consider changing tooltip to hover box with with muscle group
    * TODO: Removed from saved workouts
    * TODO: Edit from saved workouts
    * TODO: Make button more functional
    * TODO: Make page more appealing
*/

var app = angular.module("myWorkOutApp", []);

app.controller('mycontroller', ['$scope', function($scope) {

    //https://stackoverflow.com/questions/31622770/how-to-import-json-file-into-angularjs-application

    var exercises = [
        { 'name' : 'Incline Barbell or Dumbbell Bench Press', 'primary' :  {'chest' : ['Pectoralis Major', 'Pectoralis Minor'] }, 'secondary' : { 'shoulders' : ['Anterior Deltoid'], 'Triceps': ['Long Head'], 'chest' : ['another'] } },
        { 'name' : 'Decline Barbell or Dumbbell Bench Press', 'primary' :  {'chest' : []}, 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : 'Flat Press Machine', 'primary' :  {'chest' : []}, 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : 'Incline Press Machine', 'primary' :  {'chest' : []}, 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : 'Decline Press Machine', 'primary' :  {'chest' : []}, 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : 'Dips', 'primary' :  {'chest' : []}, 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : 'Push-Ups', 'primary' :  {'chest' : []}, 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : 'Flat Dumbbell Flyes', 'primary' :  {'chest' : []}, 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : 'Incline Dumbbell Flyes', 'primary' :  {'chest' : []}, 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : 'Decline Dumbbell Flyes', 'primary' :  {'chest' : []}, 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : 'Pec Deck Machine', 'primary' :  {'chest' : []}, 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : 'Cable Crossovers/Cable Flyes', 'primary' :  {'chest' : []}, 'secondary' : [ { 'muscle group' : []} ]}]

    $scope.allWorkouts = [];
    $scope.viewExercises = exercises;
    $scope.newWorkout = [];
    $scope.workoutDetails = $scope.newWorkout;
    $scope.savedWorkouts = [];

    // Adds a new exercise to users new workout list
    $scope.addExercise = function(exercise) {
        exercise.done = false;
        if(isNew(exercise)) {
            $scope.newWorkout.push(exercise);
        }
    }

    // Removes new exercise from your new workout list
    $scope.deleteExercise = function(index) {     
        $scope.newWorkout.splice(index, 1);
    }

    // Change to handle workout name instead of list of workouts
    $scope.addToSavedWorkouts = function() {
        workoutName = "Workout " + ($scope.savedWorkouts.length + 1);
        if($scope.newWorkout.length > 0) {
            $scope.savedWorkouts.push({ 'name' : workoutName, 'workout' : $scope.newWorkout });
            $scope.newWorkout = [];
        }
    }

    // Sets workout details to selected workout
    $scope.setWorkoutDetails = function(index) { 
        var workouts = $scope.savedWorkouts[index];
        $scope.workoutDetails = workouts.workout;
    }

    // Determine if the exercise exists within newWorkout list
    function isNew(exercise) {
        for (let index = 0; index < $scope.newWorkout.length; index++) {
            if($scope.newWorkout[index] === exercise) return false;
        }
        return true;
    }

    $scope.getClass = function (exercise, musclePart, muscleGroup) {

        console.log(exercise);
        if(exercise.primary.hasOwnProperty(muscleGroup)) {
            if(exercise.primary[muscleGroup].includes(musclePart)) {
                return 'primary';
            }
        } else if(exercise.secondary.hasOwnProperty(muscleGroup)) {
            if(exercise.secondary[muscleGroup].includes(musclePart)) {
                return 'secondary';
            }
        }        
    }
}]);