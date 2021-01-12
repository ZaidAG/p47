const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var ground;
var myEngine, myWorld;

function setup() {
    createCanvas(1000,600);
    //createSprite(400, 200 ,50, 50);
    myEngine = Engine.create();
    myWorld = myEngine.world;
    Engine.run(myEngine);

    ground=new Ground(500,600,1000,40);
    globby=new Glob(80,540,40);
    evilMinions1=new miniEvil(700,600,20,20);
}


function draw() {
    background(0);  

    ground.display();
    globby.display();
    evilMinions1.display();
    
  }
  function keyPressed(){
    if(keyCode===32){
     console.log("Hi");
    }
    if(keyCode===DOWN_ARROW){
      //image=loadImage();
    }
    if(keyCode===UP_ARROW){

    }
    if(keyCode===RIGHT_ARROW){

    }
    if(keyCode===LEFT_ARROW){

    }
  }