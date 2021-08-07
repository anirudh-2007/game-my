class BadPerson{
    constructor(x,y,width,height){
     var options = {
         isStatic:false
      /*'restitution':0.8,
      'density':0.4,
      'friction':0.2*/
     }
     this.width = width;
     this.height = height;
     this.Image = loadImage("BadPerson.png");
     this.body = Bodies.rectangle(x ,y,width,height,options);
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