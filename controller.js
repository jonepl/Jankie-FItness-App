var app = angular.module("myWorkOutApp", []);

app.controller('mycontroller', ['$scope', function($scope) {

    //https://stackoverflow.com/questions/31622770/how-to-import-json-file-into-angularjs-application
    var validExercises = { 
        'Barbell Squats' : ["Hamstrings", "Quadriceps", "Glutes"], 
        "Bench Press" : ["Chest", "Triceps"], 
        "Barbell Curls" : ["Biceps"], 
        "Barbell Rows" : ["Biceps"],
        'Upright rows' : ["Deltoids", "Trapezius"],
        'Leg curls' : ["Hamstrings"],
        'Skull Crusher' : ["Triceps"],
        'Barbell Deadlift' : ["Hamstrings", "Quadriceps", "Glutes", "Trapezius", "Core"],
        'Bent-over barbell rows' : ["Back"],
        'Calf Raieses' : ["Calves"],
        'Dumbbell Press': ["Deltoids"]
    }

    $scope.exercises = [];
    $scope.muscleGroups = {};
    $scope.validExercises = validExercises

    $scope.add = function(ex) {
        var newExercise = { 'name' : ex, 'done' : false };
        var result = isNew(newExercise);
        if(result) {
            $scope.exercises.push(newExercise);
            $scope.newExercise = '';

            if(isValid(newExercise.name)) {
                var muscleGroup = validExercises[newExercise.name];
                addMuscleGroup(muscleGroup);
            }
        }
        console.log(ex);
    }

    $scope.addExercise = function() {
        
        var newExercise = { 'name' : $scope.newExercise, 'done' : false };
        var result = isNew(newExercise);
        console.log(result);
        if(result) {
            $scope.exercises.push(newExercise);
            $scope.newExercise = '';

            if(isValid(newExercise.name)) {
                var muscleGroup = validExercises[newExercise.name];
                addMuscleGroup(muscleGroup);
            }
        }
    }

    $scope.deleteExercise = function(index) {
        
        var exercise = $scope.exercises[index].name;
        $scope.exercises.splice(index, 1);

        if(isValid(exercise)) {
            var muscleGroup = validExercises[exercise]
            deleteMuscleGroup(muscleGroup);
        }
        
    }

    function addMuscleGroup(muscleGroups) {
        muscleGroups.forEach(muscleGroup => {
            if( !(muscleGroup in $scope.muscleGroups) ) {            
                $scope.muscleGroups[muscleGroup] = 1;
            } else {
                $scope.muscleGroups[muscleGroup] = $scope.muscleGroups[muscleGroup] + 1;
            }
        });
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

    function isNew(exercise) {
        
        if(exercise in $scope.exercises) return false;
        else return true;

    }
}]);