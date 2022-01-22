status = "";
objects = [];
inputObject = document.getElementById("inputObject").innerHTML;

function setup(){
    canvas = createCanvas(380 , 480);
    canvas.center();
    video = createVideo('animals.mp4');
    video.hide();
}

function start(){
 objectDetector = ml5.objectDetector('cocossd', modelLoaded);
 document.getElementById("status").innerHTML = "Status : " + inputObject;   
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function draw(){
    image(video, 0, 0, 480, 380);
    if(status != ""){
for(i =0; i < objects.length; i++){
    document.getElementById("status").innerHTML = "Status : Objects Detected";
    document.getElementById("number_of_objects").innerHTML = "Number of Animals detected are : " + objects.length;

    fill("#00dfea")
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
    noFill();
    stroke("#00dfea");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
    }
}

function gotResults(){
    if(error) {
        console.error();
    }
    console.log(results);
    animals = results;
}