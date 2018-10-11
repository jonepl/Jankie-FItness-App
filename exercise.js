var temp = { 
    "priamry" : { "muscle group" : ["muscle parts"] },
    "secondary" : {"muscle group" : ["muscle parts"]}
}


var temp2 = [{  
                'name' : "Flat Barbell or Dumbbell Bench Press",
                'primary' : [ {'chest' : []} ],
                'secondary' : [{'triceps' : []}] 
            }]


var exercise = [
        { 'name' : 'Incline Barbell or Dumbbell Bench Press', 'primary' : [ {'chest' : []} ], 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : "Decline Barbell or Dumbbell Bench Press", 'primary' : [ {'chest' : []}], 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : "Flat[ Chest ]Press Machine", 'primary' : [ {'chest' : []}], 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : "Incline[ Chest ]Press Machine", 'primary' : [ {'chest' : []}], 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : "Decline[ Chest ]Press Machine", 'primary' : [ {'chest' : []}], 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : "Dips (on parallel bars with slight forward lean)", 'primary' : [ {'chest' : []}], 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : "Push-Ups", 'primary' : [ {'chest' : []}], 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : "Flat Dumbbell Flyes", 'primary' : [ {'chest' : []}], 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : "Incline Dumbbell Flyes", 'primary' : [ {'chest' : []}], 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : "Decline Dumbbell Flyes", 'primary' : [ {'chest' : []}], 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : "Pec Deck Machine", 'primary' : [ {'chest' : []}], 'secondary' : [ { 'muscle group' : []} ] },
        { 'name' : "Cable Crossovers/Cable Flyes", 'primary' : [ {'chest' : []}], 'secondary' : [ { 'muscle group' : []} ]}
        ]

    "Pull-Ups" : ["back"],
    "Chin-Ups" : ["back"],
    "Lat Pull-Downs" : ["back"],
    "Bent Over Barbell or Dumbbell Rows" : ["back"],
    "T-Bar Rows" : ["back"],
    "Seated Cable Rows" : ["back"],
    "Chest Supported Barbell or Dumbbell Rows" : ["back"],
    "Chest Supported Machine Rows" : ["back"],
    "Inverted Rows" : ["back"],
    "Barbell, Dumbbell or Machine Shrugs" : ["back"],

    // Shoulder
    Seated Overhead Barbell or Dumbbell Press
    Standing Overhead Barbell or Dumbbell Press
    Overhead Machine Press
    Arnold Press
    Barbell, Dumbbell or Machine Upright Rows
    Dumbbell, Cable or Machine Lateral Raises
    Dumbbell, Cable or Machine Front Raises
    Barbell, Dumbbell, or Machine Rear Delt Rows, Raises or Flyes

    // Quads
    Barbell or Dumbbell Squats
    Barbell or Dumbbell Front Squats
    Barbell or Dumbbell Split Squats
    Barbell or Dumbbell Lunges
    Barbell or Dumbbell Step-Ups
    Leg Press
    Single Leg Press
    Machine Squat/Hack Squat
    Leg Extensions

    // Hamstring
    Barbell or Dumbbell Romanian Deadlifts
    Barbell or Dumbbell Straight Leg Deadlifts
    Barbell or Dumbbell Sumo Deadlifts
    Glute-Ham Raises
    Hyperextensions
    Cable Pull-Throughs
    Good-Mornings
    Leg Curls

    // Biceps
    Standing Barbell or Dumbbell Curls
    Barbell or Dumbbell Preacher Curls
    Seated Dumbbell Curls
    Incline Dumbbell Curls
    Hammer Curls
    Concentration Curls
    Cable Curls
    Biceps Curl Machine

    // Triceps
    Dips (on parallel bars, elbows close to body, without forward lean)
    Flat Close Grip Bench Press
    Decline Close Grip Bench Press
    Close Grip Push-Ups
    Laying Barbell or Dumbbell Triceps Extensions
    Skull Crushers
    Overhead Barbell or Dumbbell Triceps Extensions
    Cable Press-Downs
    Bench Dips
]

module.exports = exercise;