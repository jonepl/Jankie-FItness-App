/*
    * DONE: Figure out how to fill in all primary secondary view buttons accordingly (muscle part name and muscle group)
    * TODO: Consider changing tooltip to hover box with with muscle group (GIF)
    * TODO: Removed from saved workouts
    * TODO: Edit from saved workouts
    * TODO: Make exercise buttons selection more functional 
    * TODO: Make page more appealing
*/

var app = angular.module("myWorkOutApp", []);

app.controller('mycontroller', ['$scope', 'MuscleFactory', 'ExerciseFactory', function($scope, MuscleFactory, ExerciseFactory) {

    $scope.viewExercises = ExerciseFactory;
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

    $scope.editSavedWorkouts = function() {
        // Not Yet Implemented
    }

    $scope.deleteFromSavedWorkouts = function() {
        // Not Implemented
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

    // Returns the appropriate class name for the exercise muscle group
    $scope.getClass = function (exercise, musclePart) {
        
        var muscleGroup = MuscleFactory[musclePart];

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
    