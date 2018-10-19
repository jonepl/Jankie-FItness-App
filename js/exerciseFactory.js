var app = angular.module("exerciseModule", []);

app.factory('ExerciseFactory', function() {

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
            { 'name' : 'Cable Crossovers/Cable Flyes', 'primary' :  {'chest' : []}, 'secondary' : [ { 'muscle group' : []} ]}
        ]

    function getAllExercises(){
        
    }

    function getChestExercises() {

    }

    function getShouldersExercises() {

    }

    function getBackExercises() {

    }

    function getBicepExercises() {

    }

    function getTricepExercises() {

    }

    function getQuadExercises() {

    }

    function getHamstringExercises() {

    }

    function getCalfExercises() {

    }


    
    return exercises;
})