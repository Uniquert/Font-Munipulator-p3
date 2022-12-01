difference = 0;
rightWristX = 0;
leftWristX = 0;


function setup() 
{
    video = createCapture(VIDEO);
    video.size(550, 560);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() 
{
    console.log("Posenet Model is Loaded");
}

function gotPoses(results) 
{
    if(results.length > 0) {
        console.log(results);
    
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + 
    " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}

function draw()
{
    background('#90EE90');

    document.getElementById("text_sites").innerHTML =
    "Font size of the Text will be = " + difference + "px";
    textSize(difference);
    fill("#014EFF");
    text('Yo', 50, 400);

}