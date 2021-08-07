class GoodPerson{
    constructor(x,y,width,height){
     var options = {
       
      /*'restitution':0.8,
      'density':0.4,
      'friction':0.2*/
     }
     this.width = width;
     this.height = height;
     this.Image = loadImage("good person.png");
     this.body = Bodies.rectangle(x ,y,width,height);
     World.add(this.body ,World);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x ,pos.y);
        rotate(angle);
       
        imageMode(CENTER);
        image( this.Image,0,0,this.width,this.height);
        pop();
    }
}