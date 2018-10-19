var app = angular.module("muscleModule", []);

app.factory('MuscleFactory', function() {

    var muscles = {
        "obliques" : "core", 
        "upper abdomen" : "core", 
        "lower abdomen" : "core",
        "Upper Trapezius" : "back", 
        "Latissimus dorsi" : "back", 
        "Teres minor" : "back", 
        "Teres major" : "back", 
        "Infraspinatus" : "back", 
        "Super spanaius" : "back", 
        "Infer spanaius" : "back", 
        "Rhomboid" : "back", 
        "Lower back" : "back",
        "Pectoralis Major" : 'chest',
        "Pectoralis Minor" : 'chest',
        "Short Head" : "biceps",
        "Long Head" : "biceps",
        "Gastrocnemius medial" : "calves",
        "Gastrocnemius lateral" : "calves",
        "soleus" : "calves",
        "gluteus maximus glutes" : "glutes", 
        "medius gluteus minimus" : "glutes", 
        "Tensor fasciae latae muscle" : "glutes",
        "Long Head" : "triceps", 
        "Lateral head" : "triceps", 
        "Medial head" : "triceps",
        "Anterior Deltoid" : "shoulders", 
        "Mid Deltoid" : "shoulders", 
        "Posterior Deltoid" : "shoulders",
        "Semitendinosus" : "hamstrings", 
        "Semimembranosus" : "hamstrings", 
        "Biceps femoris" : "hamstrings",
        "Rectus Femoris" : "quads", 
        "Vastus Lateralis" : "quads", 
        "Vastus Intermedius" : "quads", 
        "Vastus Medialis" : "quads",
    }
    return muscles;
})