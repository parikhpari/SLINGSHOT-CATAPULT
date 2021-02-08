class Slingshot{
    constructor(bodyA,pointB){
    //declared options for the chain object
    var options={
        bodyA: bodyA,
        pointB: pointB ,
        length: 10,
        stiffness: 0.08
    }
    //to create a general chain from constraint class of matter.
    this.sling=Constraint.create(options);
    //created a property for pointB
    this.pointB= pointB;

    this.image1=loadImage("sprites/sling1.png");
    this.image2=loadImage("sprites/sling2.png");
    this.image3=loadImage("sprites/sling3.png");

    //to add it to the main world
    World.add(world,this.sling);
    }
        //made a function fly in which the bodyA will be empty 
        fly(){
            this.sling.bodyA=null;
        }
    display(){
        image(this.image1,200,25);
        image(this.image2,170,15);

        //made a condition that bodyA is not empty and henceforth it will carry out all the functions
        if(this.sling.bodyA){
            //namespacing
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            //to push changes from this point
            push();
            stroke(76,35,13);
            if(pointA.x>200){
                strokeWeight(7);
            //to draw a line between bodyA and bodyB
            line(pointA.x-25,pointA.y,pointB.x-20,pointB.y);
            line(pointA.x+20,pointA.y,pointB.x+25,pointB.y);
            image(this.image3,pointA.x-35,pointA.y-10,15,30);
            }
            else{
            //to give it stroke weight
            strokeWeight(3);
            //to draw a line between bodyA and bodyB
            line(pointA.x-25,pointA.y,pointB.x-20,pointB.y);
            line(pointA.x+20,pointA.y,pointB.x+25,pointB.y);
            image(this.image3,pointA.x-35,pointA.y-10,15,30);

        }
            //to pop changes from that certain point to this point
            pop();
        }
        
    }
}