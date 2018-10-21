var app = angular.module("muscleModule", []);

app.factory('MuscleFactory', function() {

    var muscles = {
        "chest" : { 
            "muscles" : ["Pectoralis Major Calviular Head", "Pectoralis Major Sternocostal Head", "Pectoralis Major Abdonimal Head", "Pectoralis Minor"],
            "details" : {
                "group" : "chest",
                "title" : "",
                "body" : "This is chest rule of thumb",
            }
        },
        "bicep" : { "muscles" :["Biceps Brachii (Short Head)", "Biceps Brachii (Long Head)", "Brachialis"],
        "details" : {
            "group" : "bicep",    
            "title" : "",
                "body" : "This is bicep rule of thumb",
            }
        },
        "tricep" : { "muscles" :["Long Head", "Lateral head", "Medial head"],
        "details" : {
            "group" : "tricep",    
            "title" : "",
                "body" : "This is tricep rule of thumb",
            }
        },
        "forearm" : { "muscles" :[],
        "details" : {
            "group" : "foream",    
            "title" : "",
                "body" : "This is foream rule of thumb",
            }
        },
        "abdominal" : { "muscles" :["External Obliques", "Internal Obliques", "Rectus Abdominis"],
        "details" : {
            "group" : "abdominal",    
            "title" : "",
                "body" : "This is abdominal rule of thumb",
            }
        },
        "shoulder" : { "muscles" :["Anterior Deltoid", "Mid Deltoid", "Posterior Deltoid"],
        "details" : {
            "group" : "shoulder",    
            "title" : "",
                "body" : "This is shoulders rule of thumb",
            }
        },
        "calf" : { "muscles" :["Gastrocnemius medial", "Gastrocnemius lateral", "Soleus"],
        "details" : {
            "group" : "calf",    
            "title" : "",
                "body" : "This is calves rule of thumb rule of thumb",
            }
        },
        "back" : { "muscles" :["Upper Trapezius", "Middle Trapezius", "Lower Trapezius",  "Latissimus Dorsi", "Teres minor", "Teres Major", "Infraspinatus", "Super Spanaius", "Infer Spanaius", "Rhomboid", "Lower Back"],
        "details" : {
            "group" : "back",    
            "title" : "",
                "body" : "This is back rule of thumb rule of thumb",
            }
        },
        "hamstring" : { "muscles" :["Semitendinosus", "Semimembranosus", "Biceps femoris"],
        "details" : {
            "group" : "hamstring",    
            "title" : "",
                "body" : "This is hamstring rule of thumb rule of thumb",
            }
        },
        "quad" : { "muscles" :["Rectus Femoris", "Vastus Lateralis", "Vastus Intermedius", "Vastus Medialis"],
        "details" : {
            "group" : "quad",    
            "title" : "",
                "body" : "This is Quad rule of thumb rule of thumb",
            }
        },
        "glutes" : {
            "muscles" : ["Gluteus Maximus", "Gluteus Medius"],
            "details" : {
                "group" : "glutes",
                "title" : "This is the modal title for glutes",
                "body" : "This is glutes rule of thumb rule of thumb",
            }
        }
    }

    // var muscles = {
    //     "obliques" : "core", 
    //     "upper abdomen" : "core", 
    //     "lower abdomen" : "core",

    //     "Upper Trapezius" : "back", 
    //     "Latissimus dorsi" : "back", 
    //     "Teres minor" : "back", 
    //     "Teres major" : "back", 
    //     "Infraspinatus" : "back", 
    //     "Super spanaius" : "back", 
    //     "Infer spanaius" : "back", 
    //     "Rhomboid" : "back", 
    //     "Lower back" : "back",
        
    //     "Pectoralis Major Calviular Head" : 'chest',
    //     "Pectoralis Major Sternocostal Head" : 'chest',
    //     "Pectoralis Major Abdonimal Head" : 'chest',
    //     "Pectoralis Minor" : 'chest',

    //     "Biceps Brachii - Short Head" : "biceps",
    //     "Biceps Brachii - Long Head" : "biceps",

    //     "Gastrocnemius medial" : "calves",
    //     "Gastrocnemius lateral" : "calves",
    //     "soleus" : "calves",

    //     "gluteus maximus glutes" : "glutes", 
    //     "medius gluteus minimus" : "glutes", 
    //     "Tensor fasciae latae muscle" : "glutes",
    //     "Long Head" : "triceps", 
    //     "Lateral head" : "triceps", 
    //     "Medial head" : "triceps",

    //     "Anterior Deltoid" : "shoulders", 
    //     "Mid Deltoid" : "shoulders", 
    //     "Posterior Deltoid" : "shoulders",

    //     "Semitendinosus" : "hamstrings", 
    //     "Semimembranosus" : "hamstrings", 
    //     "Biceps femoris" : "hamstrings",
    //     "Rectus Femoris" : "quads", 
    //     "Vastus Lateralis" : "quads", 
    //     "Vastus Intermedius" : "quads", 
    //     "Vastus Medialis" : "quads",
    // }
    return muscles;
})