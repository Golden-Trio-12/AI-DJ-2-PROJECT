song_1 = ""
song_2 = ""

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song = loadSound("CupSong.mp3");
    song = loadSound("Sunflower.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
  }

  function draw(){
      image(video, 0, 0, 600, 500);
  }

  function modelLoaded() {
    console.log("poseNet is Initialized");
  }

  function gotPoses(results) {
      if (results.length > 0) {
          console.log(results);
          leftWristX = results[0].poses.leftWrist.x;
          leftWristY = results[0].pose.leftWrist.y;

          rightWristX = results[0].poses.rightWrist.x;
          rightWristY = results[0].pose.rightWrist.y;

          console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
          console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);

          scoreLeftWrist = results[0].pose.keypoints[9].score;
          scoreRightWrist = results[0].pose.keypoints[10].score;
          console.log("scoreRightWrist =" + scoreRightWrist + "scoreLeftWrist =" + scoreLeftWrist);
      }
  }