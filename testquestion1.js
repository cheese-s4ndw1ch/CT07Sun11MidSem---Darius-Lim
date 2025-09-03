function setup(){
 createCanvas(600, 400), 
 

 
 


ball = new Sprite(ball.x, ball.y, 10) ;
ball.x = mousex;
ball.y = mousey;
ball.shape = "circle";
ball.collider = "dynamic";
ball.mass = 2;
ball.gravity.y = 10;


}


function draw() {
 (bg, 0, 0 ,600, 400)
 fill("green")
}















