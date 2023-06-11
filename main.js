function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/aXIsJRyz0/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear -  " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy -  " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img = document.getElementById("animal_image");
        img1 = document.getElementById("animal_image");
        img2 = document.getElementById("animal_image");
        img3 = document.getElementById("animal_image");

        if (results[0].label == "cow") {
            img.src = "download.jpg";
            img1.src = "";
            img2.src = "";
            img3.src = "";

        } else if (results[0].label == "lion") {
            img.src = "";
            img1.src = "a27bca9b813eb75d9fa54ec00d7d9d51.png";
            img2.src = "";
            img3.src = "";

        } else if (results[0].label == "dog") {
            img.src = "";
            img1.src = "";
            img2.src = "beagle-dog-cartoon-white-background_1308-75491.avif";
            img3.src = "";

        } else {
            img.src = "";
            img1.src = "";
            img2.src = "";
            img3.src = "cute-cat-cartoon-sitting_194935-99.avif";
        }
    }
}
    