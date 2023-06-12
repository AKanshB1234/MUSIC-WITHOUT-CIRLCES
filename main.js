/**sr = 0;
sl = 0;
lwx = 0;
lwy = 0;
rwx = 0;
rwy = 0;

function setup(){
    canvas = createCanvas(600,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", showresult);
}

function modelLoaded(){
    console.log("Model is linked");
}
function showresult(result){
    console.log(result);
    sl = result[0].pose.keypoints[9].score;
    sr = result[0].pose.keypoints[10].score;
    lwx = result[0].pose.leftWrist.x;
    lwy = result[0].pose.leftWrist.y;
    rwx = result[0].pose.rightWrist.x;
    rwy = result[0].pose.rightWrist.y;
    
}**/
function draw(){
    image(video, 0, 0, 600, 400);
    fill("yellow");
    stroke("yellow");
    if(sr > 0.1){
        circle(rwx -50 , rwy-400 , 20);
        if(sn=="1"){
            if(rwy > 0 && rwy <= 80){
                document.getElementById("sp").innerHTML = "Speed = 2.5x";
                song1.rate(2.5);
             }
            else if(rwy > 80 && rwy <= 160){
                document.getElementById("sp").innerHTML = "Speed = 2.0x";
                song1.rate(2.0);
             }
             else if(rwy > 160 && rwy <= 240){
                document.getElementById("sp").innerHTML = "Speed = 1.5x";
                song1.rate(1.5);
             }
             else if(rwy > 240 && rwy <= 320){
                document.getElementById("sp").innerHTML = "Speed = 1.0x";
                song1.rate(1.0);
             }
             else if(rwy > 320 && rwy <= 400){
                document.getElementById("sp").innerHTML = "Speed = 0.5x";
                song1.rate(0.5);
             }
        }
        if(sn=="2"){
         if(rwy > 0 && rwy <= 80){
            document.getElementById("sp").innerHTML = "Speed = 2.5x";
            song1.rate(2.5);
         }
        else if(rwy > 80 && rwy <= 160){
            document.getElementById("sp").innerHTML = "Speed = 2.0x";
            song1.rate(2.0);
         }
         else if(rwy > 160 && rwy <= 240){
            document.getElementById("sp").innerHTML = "Speed = 1.5x";
            song1.rate(1.5);
         }
         else if(rwy > 240 && rwy <= 320){
            document.getElementById("sp").innerHTML = "Speed = 1.0x";
            song1.rate(1.0);
         }
         else if(rwy > 320 && rwy <= 400){
            document.getElementById("sp").innerHTML = "Speed = 0.5x";
            song1.rate(0.5);
         }
        }
        if(sn="3"){
            if(rwy > 0 && rwy <= 80){
                document.getElementById("sp").innerHTML = "Speed = 2.5x";
                song1.rate(2.5);
             }
            else if(rwy > 80 && rwy <= 160){
                document.getElementById("sp").innerHTML = "Speed = 2.0x";
                song1.rate(2.0);
             }
             else if(rwy > 160 && rwy <= 240){
                document.getElementById("sp").innerHTML = "Speed = 1.5x";
                song1.rate(1.5);
             }
             else if(rwy > 240 && rwy <= 320){
                document.getElementById("sp").innerHTML = "Speed = 1.0x";
                song1.rate(1.0);
             }
             else if(rwy > 320 && rwy <= 400){
                document.getElementById("sp").innerHTML = "Speed = 0.5x";
                song1.rate(0.5);
             }
        }
    } 

    if(sl > 0.1){
        if(sn==1){
            circle(lwx , lwy-100 , 20);
        numberlwy = Number(lwy);
        volume = numberlwy/400;
        
        document.getElementById("vo").innerHTML = "Volume =" + (volume * 100).toFixed(1);
        song1.setVolume(volume);
        }
        if(sn==2){
            circle(lwx , lwy-100 , 20);
        numberlwy = Number(lwy);
        volume = numberlwy/400;
        
        document.getElementById("vo").innerHTML = "Volume =" + (volume * 100).toFixed(1);
        song2.setVolume(volume);
        }
        if(sn==3){
            circle(lwx , lwy-100 , 20);
        numberlwy = Number(lwy);
        volume = numberlwy/400;
        
        document.getElementById("vo").innerHTML = "Volume =" + (volume * 100).toFixed(1);
        song3.setVolume(volume);
        }
    }
    
}
sl = 0;
sr = 0;
lwx = 0;
lwy = 0;
rwx = 0;
rwy = 0;
sn = 0;

function preload(){
    song1 = loadSound("In the end.mp3");
    song2 = loadSound("Unstoppable.mp3");
    song3 = loadSound("CT.mp3");
}

function setup() {
	canvas =  createCanvas(600, 400);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
    
    model = ml5.poseNet(video , modelLoaded);
	model.on("pose" , showResult);
}

function modelLoaded(){
    console.log("Model is linked");
}

function showResult(results){
   console.log(results);
   sl = results[0].pose.keypoints[9].score;
   sr = results[0].pose.keypoints[10].score;
   lwx = results[0].pose.leftWrist.x;
   lwy = results[0].pose.leftWrist.y;
   rwx = results[0].pose.rightWrist.x;
   rwy = results[0].pose.rightWrist.y;
   console.log(rwy);
}


/**function draw(){
    image(video , 0, 0, 600,400);
    fill("yellow");
    stroke("yellow");
    if(sr > 0.1){
        circle(rwx -50 , rwy-400 , 20);
         if(rwy > 0 && rwy <= 80){
            document.getElementById("sp").innerHTML = "Speed = 2.5x";
            song1.rate(2.5);
         }
        else if(rwy > 80 && rwy <= 160){
            document.getElementById("sp").innerHTML = "Speed = 2.0x";
            song1.rate(2.0);
         }
         else if(rwy > 160 && rwy <= 240){
            document.getElementById("sp").innerHTML = "Speed = 1.5x";
            song1.rate(1.5);
         }
         else if(rwy > 240 && rwy <= 320){
            document.getElementById("sp").innerHTML = "Speed = 1.0x";
            song1.rate(1.0);
         }
         else if(rwy > 320 && rwy <= 400){
            document.getElementById("sp").innerHTML = "Speed = 0.5x";
            song1.rate(0.5);
         }
    } 

    if(sl > 0.1){
        circle(lwx , lwy-100 , 20);
        numberlwy = Number(lwy);
        volume = numberlwy/400;
        
        document.getElementById("vo").innerHTML = "Volume =" + (volume * 100).toFixed(1);
        song1.setVolume(volume);
    }

}**/

function play(){
    ush = document.getElementById("slt").value;
    if(ush == "In the end"){
        song1.setVolume(0.5);
        song1.rate(1);
        song1.play();
        song3.stop();
        song2.stop();
        sn =1;
    }
    if(ush =="Unstoppable"){
        song2.setVolume(0.5);
        song2.rate(1);
        song2.play();
        song3.stop();
        song1.stop();
        sn =2;
    }
    if(ush == "Cheap thrills"){
        song3.setVolume(0.5);
        song3.rate(1);
        song3.play();
        song1.stop();
        song2.stop();
        sn =3;
    }
}
function stop(){
    song1.stop();
    song2.stop();
    song3.stop();
}