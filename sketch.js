//namespacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

//declaring global variables
var engine, world;
var box1, pig1;
var backgroundImg;
var platform;
var slingshot;

function preload() {
    //to load background image
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    //crated a canvas
    var canvas = createCanvas(1200,400);
    //created a engine for ABG game from main engine
    engine = Engine.create();
    //to give engine a world
    world = engine.world;

    //created a ground from ground class
    ground = new Ground(600,height,1200,20)
    //created a platform from ground class
    platform = new Ground(150,305,300,170);
    //created a structure for ABG 
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);
    
    
    
    //created a link between bird and point
    slingshot = new Slingshot(bird.body,{x:200, y:50});

}

function draw(){
    //to clear screen and give it a backimage
    background(backgroundImg);
    //to update the engine
    Engine.update(engine);
    //to display box2's x and y position and its angle
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    //to display the created objects
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    

    bird.display();

    platform.display();
    slingshot.display();
    
}

//function for mouseDragged that when mouse is pressed over bird and dragged it will drag the bird
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
//function for mouseReleased that when mouse will be released after dragging to certain point the bird will detatch
function mouseReleased(){
    slingshot.fly();
}