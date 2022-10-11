noseX = 0;
noseY = 0;

function preload() {
  clown_nose = loadImage("https://i.postimg.cc/y6gpFmMZ/image.png");
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("PoseNet has been initialized");
}

function draw() {
  image(video, 0, 0, 300, 300);
  fill(225, 0, 0);
  stroke(255, 0, 0);
  image(clown_nose, noseX - 34, noseY - 15, 80, 80)
}

function take_snapshot() {
  save("Filtered_Image.png");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("Nose X =" + noseX);
    console.log("Nose Y =" + noseY);
  }
}