var hr,mn,sc;
var hrAngle,mnAngle,scAngle;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);

}

function draw() {
  background("black");  
  translate (200,200);
  rotate (-90);
  hr = hour();
  sc = second();
  mn = minute();

 
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,60,0,360);

 


//drawing second hand

 push ();
rotate (scAngle);
stroke (255,0,0);
strokeWeight(5);
line (0,0,100,20);
pop ();  

//drawing minute hand

 push ();
rotate (mnAngle);
stroke (200,0,0);
strokeWeight(5);
line (0,0,75,0);
pop (); 

//drawing hour hand

 push ();
rotate (hrAngle);
stroke (300,0,0);
strokeWeight(5);
line (0,0,50,0);
pop (); 
 
    //drawing arcs
    strokeWeight(10);
    noFill();
    //seconds
    stroke(255,0,0);
    arc (0,0,300,300,0,scAngle);
    //minute
    stroke(200,0,0);
    arc(0,0,280,280,0,mnAngle);
    //hour
    stroke(300,0,0);
    arc(0,0,260,260,0,hrAngle);
}