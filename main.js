function setup()
{
    canvas=createCanvas(600,400);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,500);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotposes);   
}
function draw()
{
    background("lightblue");
}
function modelLoaded()
{
    console.log('poseNet model initialized');
}
function gotposes(results)
{
    if (results.length > 0 )
    {
        console.log(results);
    }
}