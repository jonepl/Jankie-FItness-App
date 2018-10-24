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
        "bicep" : { "muscles" :[ { "name" : "Biceps Brachii (Short Head)","path" : "./img/chest-clav.jpeg" }, { "name" :"Biceps Brachii (Long Head)","path" : "./img/chest-clav.jpeg" }, { "name" : "Brachialis","path" : "./img/chest-clav.jpeg" }],
        "details" : {
            "group" : "bicep",    
            "title" : "",
                "body" : "This is bicep rule of thumb",
            }
        },
        "tricep" : { "muscles" :[{"name" : "Long Head", "path" : "./img/chest-clav.jpeg"}, {"name" : "Lateral head","path" : "./img/chest-clav.jpeg"}, {"name" : "Medial head","path" : "./img/chest-clav.jpeg"}],
        "details" : {
            "group" : "tricep",    
            "title" : "",
                "body" : "This is tricep rule of thumb",
            }
        },
        "forearm" : { "muscles" :[{}],
        "details" : {
            "group" : "foream",    
            "title" : "",
                "body" : "This is foream rule of thumb",
            }
        },
        "abdominal" : { "muscles" :[ { "name" : "External Obliques", "path" : "./img/chest-clav.jpeg"}, { "name" : "Internal Obliques", "path" : "./img/chest-clav.jpeg"}, { "name" : "Rectus Abdominis", "path" : "./img/chest-clav.jpeg"}],
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
        "calf" : { "muscles" :[{ "name" : "Gastrocnemius medial", "path" : "./img/chest-clav.jpeg"}, {"name" : "Gastrocnemius lateral", "path" : "./img/chest-clav.jpeg"}, {"name" : "Soleus", "path" : "./img/chest-clav.jpeg"}],
        "details" : {
            "group" : "calf",    
            "title" : "",
                "body" : "This is calves rule of thumb rule of thumb",
            }
        },
        "back" : { "muscles" :[ {"name" : "Upper Trapezius", "path" : "./img/chest-clav.jpeg" }, {"name" : "Middle Trapezius", "path" : "./img/chest-clav.jpeg" } , {"name" : "Lower Trapezius", "path" : "./img/chest-clav.jpeg" },  {"name" : "Latissimus Dorsi", "path" : "./img/chest-clav.jpeg" }, {"name" : "Teres minor", "path" : "./img/chest-clav.jpeg" }, {"name" : "Teres Major", "path" : "./img/chest-clav.jpeg" }, {"name" : "Infraspinatus", "path" : "./img/chest-clav.jpeg" }, {"name" : "Super Spanaius", "path" : "./img/chest-clav.jpeg" }, {"name" : "Infer Spanaius", "path" : "./img/chest-clav.jpeg" }, {"name" : "Rhomboid", "path" : "./img/chest-clav.jpeg" }, {"name" : "Lower Back", "path" : "./img/chest-clav.jpeg" }],
        "details" : {
            "group" : "back",    
            "title" : "",
                "body" : "This is back rule of thumb rule of thumb",
            }
        },
        "hamstring" : { "muscles" :[{ "name" : "Semitendinosus", "path" : "./img/chest-clav.jpeg"}, { "name" : "Semimembranosus", "path" : "./img/chest-clav.jpeg"}, {"name" : "Biceps femoris", "path" : "./img/chest-clav.jpeg"}],
        "details" : {
            "group" : "hamstring",    
            "title" : "",
                "body" : "This is hamstring rule of thumb rule of thumb",
            }
        },
        "quad" : { "muscles" :[{ "name" : "Rectus Femoris", "path" : "./img/chest-clav.jpeg"}, {"name" : "Vastus Lateralis", "path" : "./img/chest-clav.jpeg"}, {"name" : "Vastus Intermedius", "path" : "./img/chest-clav.jpeg"}, {"name" : "Vastus Medialis", "path" : "./img/chest-clav.jpeg"}],
        "details" : {
            "group" : "quad",    
            "title" : "",
                "body" : "This is Quad rule of thumb rule of thumb",
            }
        },
        "glutes" : {
            "muscles" : [{ "name" : "Gluteus Maximus", "path" : "./img/chest-clav.jpeg"}, { "name" : "Gluteus Medius", "path" : "./img/chest-clav.jpeg"}],
            "details" : {
                "group" : "glutes",
                "title" : "This is the modal title for glutes",
                "body" : "This is glutes rule of thumb rule of thumb",
            }
        }
    }

    return muscles;
})