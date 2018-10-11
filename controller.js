var app = angular.module("myWorkOutApp", []);

app.controller('mycontroller', ['$scope', function($scope) {

    //https://stackoverflow.com/questions/31622770/how-to-import-json-file-into-angularjs-application
    // var validExercises = { 
    //     'Barbell Squats' : ["Hamstrings", "Quadriceps", "Glutes"], 
    //     "Bench Press" : ["Chest", "Triceps"], 
    //     "Barbell Curls" : ["Biceps"], 
    //     "Barbell Rows" : ["Biceps"],
    //     'Upright rows' : ["Deltoids", "Trapezius"],
    //     'Leg curls' : ["Hamstrings"],
    //     'Skull Crusher' : ["Triceps"],
    //     'Barbell Deadlift' : ["Hamstrings", "Quadriceps", "Glutes", "Trapezius", "Core"],
    //     'Bent-over barbell rows' : ["Back"],
    //     'Calf Raieses' : ["Calves"],
    //     'Dumbbell Press': ["Deltoids"]
    // }

    var exercises = [
        { 'name' : 'Incline Barbell or Dumbbell Bench Press', 'primary' :  {'chest' : ['Sternal'] }, 'secondary' : { 'shoulder' : ['Anterior Deltoid'], 'Triceps': ['Long Head'] } },
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

    // var workouts;
    // var routine;

    //$scope.workouts = [];
    $scope.viewMuscleGroups = [];
    //$scope.viewExercises = [];
    $scope.viewWorkouts = [];
    //$scope.validExercises = validExercises;
    $scope.viewExercises = exercises;

    // TODO: Validate new exercise
    $scope.add = function(exercise) {
        
        exercise.done = false;
        if(isNew(exercise)) {
            console.log("It's new mofo");
            $scope.viewWorkouts.push(exercise);
            // $scope.newExercise = '';
            addMuscleGroup(exercise);
        }
    }

    // TODO Fix this to handle whole exercises
    function addMuscleGroup(exercise) {
        // Iterate through the object

        $scope.viewMuscleGroups = $scope.viewMuscleGroups.concat(Object.values(exercise.primary))
        $scope.viewMuscleGroups = $scope.viewMuscleGroups.concat(Object.values(exercise.secondary))

        // if exercise.name is not in workouts add it
        if(exercise.name in $scope.viewExercises) {
            console.log("Seen this already");
            
        }
    }

    $scope.deleteExercise = function(index) {
        
        var muscleGroups = [];
        var exercise = $scope.viewWorkouts[index];
        $scope.viewWorkouts.splice(index, 1);

        muscleGroups = muscleGroups.concat(Object.values(exercise.primary))
        muscleGroups = muscleGroups.concat(Object.values(exercise.secondary))
        deleteMuscleGroup(muscleGroups);
        // if(isValid(exercise)) {
  
        // }
        
    }

    function deleteMuscleGroup(muscleGroups) {
        muscleGroups.forEach(muscleGroup => {
            $scope.muscleGroups[muscleGroup] = $scope.muscleGroups[muscleGroup] - 1;
            if($scope.muscleGroups[muscleGroup] == 0) delete $scope.muscleGroups[muscleGroup];
        })
        
    }

    function isValid(exercise) {

        if(exercise in validExercises) return true;
        else return false;
    }

    function isNew(ex) {

        for (let index = 0; index < $scope.viewWorkouts.length; index++) {
            if($scope.viewWorkouts[index] === ex) return false;
        }

        return true;
    }
}]);