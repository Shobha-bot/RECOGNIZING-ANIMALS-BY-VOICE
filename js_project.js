function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/l5NEyEXJE/model.json', {
        probabilityThreshold: 0.7
    }, modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
var horse = 0;
var lion = 0;

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Detected voice is of - ' + results[0].label;
        document.getElementById("result_count").innerHTML = 'Detected Dog - ' + dog + ' Detected Cat - ' + cat;
        
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_count").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        img = document.getElementById('image');

        //Condition for dog
        if(results[0].label == "Puppy"){
            img.src = 'dog-barking.gif';
            dog = dog + 1;
        }

        //Condition for cat
        else if(results[0].label == "Meowing"){
            img.src = 'cat-meowing.gif';
            cat = cat + 1;
        }
         
        //Condition for pony
        else if(results[0].label == "Neighing"){
            img.src = 'pony-horse.gif'; 
            horse = horse + 1;
        }

        //Condition for lion
        else if(results[0].label == "Roaring"){
            img.src = 'lion-roar.gif';
            lion = lion + 1;
        }
         //Condition for background noise
        else{
            img.src = 'talking.gif';
 
        }
    }
}