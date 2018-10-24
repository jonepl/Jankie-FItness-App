var app = angular.module("exerciseModule", []);

app.factory('ExerciseFactory', ['MuscleFactory', function(MuscleFactory) {

    var ExerciseFactory = {}
    var muscleGroups = MuscleFactory;
    var chestExercises = [];
    var backExercises = [];
    var shoulderExercises = [];
    var abExercises = [];
    var bicepExercises = [];
    var tricepExercises = [];
    var forearmExercises = [];
    var quadExercises = [];
    var hamstringExercises = [];
    var calfExercises = [];
    
    // Update to primary, secondary, tertiary Muscles
    var exercises = [
        { 
            'name' : 'Incline Barbell or Dumbbell Bench Press', 
            'primaryFocus' : {
                'chest' : [muscleGroups.chest.muscles[0], muscleGroups.chest.muscles[1]],
                'shoulder' : [muscleGroups.shoulder.muscles[0]]
            }, 
            'primary' :  {
                'chest' : [muscleGroups.chest.muscles[1], muscleGroups.chest.muscles[2]] 
            }, 
            'secondary' : { 
                'shoulder' : [muscleGroups.shoulder.muscles[0]], 
                'tricep': [muscleGroups.tricep.muscles[0], muscleGroups.tricep.muscles[2]] 
            } 
        },
        { 'name' : 'Decline Barbell or Dumbbell Bench Press', 'primaryFocus' :  {'chest' : [ muscleGroups.chest.muscles[1],  muscleGroups.chest.muscles[2], muscleGroups.shoulder.muscles[0], muscleGroups.tricep.muscles[0], muscleGroups.tricep.muscles[1], muscleGroups.tricep.muscles[2]] }, 'primary' :  {'chest' : [ muscleGroups.chest.muscles[1], 'Pectoralis Minor'] }, 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : 'Flat Press Machine', 'primaryFocus' :  {'chest' : []}, 'primary' :  {'chest' : ['Pectoralis Major', 'Pectoralis Minor'] }, 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : 'Incline Press Machine', 'primaryFocus' :  {'chest' : []}, 'primary' :  {'chest' : ['Pectoralis Major', 'Pectoralis Minor'] }, 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : 'Decline Press Machine', 'primaryFocus' :  {'chest' : []}, 'primary' :  {'chest' : ['Pectoralis Major', 'Pectoralis Minor'] }, 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : 'Dips', 'primaryFocus' :  {'chest' : []}, 'primary' :  {'chest' : ['Pectoralis Major', 'Pectoralis Minor'] }, 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : 'Push-Ups', 'primaryFocus' :  {'chest' : []}, 'primary' :  {'chest' : ['Pectoralis Major', 'Pectoralis Minor'] }, 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : 'Flat Dumbbell Flyes', 'primaryFocus' :  {'chest' : []}, 'primary' :  {'chest' : ['Pectoralis Major', 'Pectoralis Minor'] }, 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : 'Incline Dumbbell Flyes', 'primaryFocus' :  {'chest' : []}, 'primary' :  {'chest' : ['Pectoralis Major', 'Pectoralis Minor'] }, 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : 'Decline Dumbbell Flyes', 'primaryFocus' :  {'chest' : []}, 'primary' :  {'chest' : ['Pectoralis Major', 'Pectoralis Minor'] }, 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : 'Pec Deck Machine', 'primaryFocus' :  {'chest' : []}, 'primary' :  {'chest' : ['Pectoralis Major', 'Pectoralis Minor'] }, 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : 'Cable Crossovers/Cable Flyes', 'primaryFocus' :  {'chest' : []}, 'primary' :  {'chest' : ['Pectoralis Major', 'Pectoralis Minor'] }, 'secondary' : [ { 'muscle group' : []} ]},
        { 
            'name' : 'Lat Pull-Downs', 
            'primaryFocus' :  {
                'back' : [muscleGroups.back.muscles[3], muscleGroups.back.muscles[5]]
            }, 
            'primary' :  { }, 
            'secondary' : { 
                'back' : [ muscleGroups.back.muscles[1], muscleGroups.back.muscles[2] ],
            } 
        },
        { 
            'name' : 'Squat', 
            'primaryFocus' :  {
                'quad' : [muscleGroups.quad.muscles[0], muscleGroups.quad.muscles[1], muscleGroups.quad.muscles[2], muscleGroups.quad.muscles[3]],
                'glutes' : [muscleGroups.glutes[0], muscleGroups.glutes[1]]
            }, 
            'primary' :  { 
                'hamstring' : [muscleGroups.hamstring.muscles[0],muscleGroups.hamstring.muscles[1],muscleGroups.hamstring.muscles[2]]
            }, 
            'secondary' : { 
                'back' : [muscleGroups.back.muscles[1], muscleGroups.back.muscles[2]],
                'calf' : [ muscleGroups.calf.muscles[0], muscleGroups.calf.muscles[1], muscleGroups.calf.muscles[2] ]
            } 
        },
        { 
            'name' : 'Concentrated Curl', 
            'primaryFocus' :  {
                'bicep' : [muscleGroups.bicep.muscles[0], muscleGroups.bicep.muscles[1], muscleGroups.bicep.muscles[2]],
            }, 
            'primary' :  { }, 
            'secondary' : { } 
        },
    ]

    var exerciseGroups = {
        'all' : exercises,
        "chest" : chestExercises,
        "back" : backExercises,
        "shoulder" : shoulderExercises,
        "ab" : abExercises,
        "bicep" : bicepExercises,
        "tricep" : tricepExercises,
        "forearm" : forearmExercises,
        "quad" : quadExercises,
        "hamstring" : hamstringExercises,
        "calf" : calfExercises,

    }
    
    ExerciseFactory.getAllExercises = function getAllExercises(){
        return exercises;
    }

    ExerciseFactory.getFocusExercises = function getFocusExercises(muscleGroup){

        if(exerciseGroups[muscleGroup].length == 0) {
            for (let i = 0; i < exercises.length; i++) {
                if(muscleGroup in exercises[i].primaryFocus || muscleGroup in exercises[i].primary) {
                    exerciseGroups[muscleGroup].push(exercises[i]);
                }   
            }
        }
        return exerciseGroups[muscleGroup];
    }

    return ExerciseFactory;
}])