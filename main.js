status = "";

function setup() {
    canvas = createCanvas(450, 380);
    canvas.center();
}

function draw() {
    image(video, 0 , 0, 480, 380);
}

function start() {
    object_detector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML= "Status : Detecting Objects";
}

function modelloaded() {
    console.log("Model is Loaded");
    status = true;
}

