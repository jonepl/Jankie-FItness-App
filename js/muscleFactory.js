var app = angular.module("muscleModule", []);

app.factory('MuscleFactory', function() {

    var muscles = {
        "chest" : { 
            "muscles" : [ { "name" : "Pectoralis Major Calviular Head", "path" : "./img/chest-clav.jpeg"}, {"name" : "Pectoralis Major Sternocostal Head", "path" : "./img/chest-stern.jpg"}, {"name" : "Pectoralis Major Abdonimal Head", "path" : "./img/chest-ab.jpg"}, {"name" : "Pectoralis Minor", "path" : "img/chest-clav.jpeg"}],
            "details" : {
                "group" : "chest",
                "title" : "",
                "body" : "This is chest rule of thumb",
            }
        },
        "bicep" : { "muscles" :[ { "name" : "Biceps Brachii (Short Head)","path" : "./img/biceps.jpg" }, { "name" :"Biceps Brachii (Long Head)","path" : "./img/biceps.jpg" }, { "name" : "Brachialis","path" : "./img/biceps.jpg" }],
        "details" : {
            "group" : "bicep",    
            "title" : "",
                "body" : "This is bicep rule of thumb",
            }
        },
        "tricep" : { "muscles" :[{"name" : "Long Head", "path" : "./img/triceps.jpeg"}, {"name" : "Lateral head","path" : "./img/triceps.jpeg"}, {"name" : "Medial head","path" : "./img/triceps.jpeg"}],
        "details" : {
            "group" : "tricep",    
            "title" : "",
                "body" : "This is tricep rule of thumb",
            }
        },
        "forearm" : { "muscles" :[{ "name" : "brachioradialis", "path" : "./img/forearm.jpg" }, { "name" : "flexors", "path" : "./img/forearm.jpg" }, { "name" : "extensors", "path" : "./img/forearm.jpg"} ],
        "details" : {
            "group" : "foream",    
            "title" : "",
                "body" : "This is foream rule of thumb",
            }
        },
        "abdominal" : { "muscles" :[ { "name" : "External Obliques", "path" : "./img/abdominals.jpg"}, { "name" : "Internal Obliques", "path" : "./img/abdominals.jpeg"}, { "name" : "Rectus Abdominis", "path" : "./img/abdominals.jpeg"}],
        "details" : {
            "group" : "abdominal",    
            "title" : "",
                "body" : "This is abdominal rule of thumb",
            }
        },
        "shoulder" : { "muscles" :[ {"name" : "Anterior Deltoid", "path" : "./img/ant-delt.jpg"}, {"name" : "Mid Deltoid", "path" : "./img/med-delt.jpg"}, {"name" : "Posterior Deltoid", "path" : "./img/chest-clav.jpeg"}],
        "details" : {
            "group" : "shoulder",    
            "title" : "",
                "body" : "This is shoulders rule of thumb",
            }
        },
        "calf" : { "muscles" :[{ "name" : "Gastrocnemius medial", "path" : "./img/calves.jpg"}, {"name" : "Gastrocnemius lateral", "path" : "./img/calves.jpg"}, {"name" : "Soleus", "path" : "./img/calves.jpg"}],
        "details" : {
            "group" : "calf",    
            "title" : "",
                "body" : "This is calves rule of thumb rule of thumb",
            }
        },
        "back" : { "muscles" :[ {"name" : "Upper Trapezius", "path" : "./img/back.jpg" }, {"name" : "Middle Trapezius", "path" : "./img/back.jpg" } , {"name" : "Lower Trapezius", "path" : "./img/back.jpg" },  {"name" : "Latissimus Dorsi", "path" : "./img/back.jpg" }, {"name" : "Teres minor", "path" : "./img/back.jpg" }, {"name" : "Teres Major", "path" : "./img/back.jpg" }, {"name" : "Infraspinatus", "path" : "./img/back.jpg" }, {"name" : "Super Spanaius", "path" : "./img/back.jpg" }, {"name" : "Infer Spanaius", "path" : "./img/back.jpg" }, {"name" : "Rhomboid", "path" : "./img/back.jpg" }, {"name" : "Lower Back", "path" : "./img/back.jpg" }],
        "details" : {
            "group" : "back",    
            "title" : "",
                "body" : "This is back rule of thumb rule of thumb",
            }
        },
        "hamstring" : { "muscles" :[{ "name" : "Semitendinosus", "path" : "./img/hamstrings.jpg"}, { "name" : "Semimembranosus", "path" : "./img/hamstrings.jpg"}, {"name" : "Biceps femoris", "path" : "./img/hamstrings.jpg"}],
        "details" : {
            "group" : "hamstring",    
            "title" : "",
                "body" : "This is hamstring rule of thumb rule of thumb",
            }
        },
        "quad" : { "muscles" :[{ "name" : "Rectus Femoris", "path" : "./img/quads.jpg"}, {"name" : "Vastus Lateralis", "path" : "./img/quads.jpg"}, {"name" : "Vastus Intermedius", "path" : "./img/quads.jpg"}, {"name" : "Vastus Medialis", "path" : "./img/quads.jpg"}],
        "details" : {
            "group" : "quad",    
            "title" : "",
                "body" : "This is Quad rule of thumb rule of thumb",
            }
        },
        "glutes" : {
            "muscles" : [{ "name" : "Gluteus Maximus", "path" : "./img/glutes.jpg"}, { "name" : "Gluteus Medius", "path" : "./img/glutes.jpg"}],
            "details" : {
                "group" : "glutes",
                "title" : "This is the modal title for glutes",
                "body" : "This is glutes rule of thumb rule of thumb",
            }
        }
    }

    return muscles;
})