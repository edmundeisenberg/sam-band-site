let x=0;
let height = 400;
let width = 600;

function setup() {
	var canvas = createCanvas(width, height);
	canvas.parent('effect-3');
	frameRate(10);
	
}

function draw() {
	background(220);

	for(var y=1;y<9;y+=1){
		stroke(0);
	  line(width/2,height/2+(x*y)%width,width/2-(x*y)%width,height/2);
	  stroke((126*y)%255);
	  line(width/2-(x*y)%width,height/2,width/2,height/2-(x*y)%width);
	  stroke((255*y)%255);
	  line(width/2,height/2-(x*y)%width,width/2+(x*y)%width,height/2);
	  //line(width/2,height/2+x,width/2-x,height/2);
	  rotate(frameCount / 200.0);
	}
	if (x>width){
		x=0;
	}
	x+=3;
}