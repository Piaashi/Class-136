video="";
status1="";
function preload()
{

}

function setup()
{
 canvas=createCanvas(480,380);
 canvas.center();
}

function draw()
{
 image(video,0,0,480,380);


}

function start()
{
  object_detector=ml5.objectDetector("cocossd",modelLoaded);
 document.getElementById("status").innerHTML="status:detectingObjects";
}

function modelLoaded()
{
 console.log("modelLoaded");
 status1=true;
 video.loop();
 video.speed(1);
 video.volume(1)
}