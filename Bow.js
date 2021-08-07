class Bow {
    constructor(x, y, width, height) {
      const options = {
        isStatic: true
      };
  
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //this.collapse = false;
      this.image = loadImage("bowwitharrow.png");
      this.life1 = "red";
      this.life2 = "red";
      this.life3 = "red";
  
      World.add(world, this.body);
  
     // Matter.Body.setAngle(this.body, -PI / 2); // -90 degree
    }
  life(){
    push();
    textSize(20);
    fill("white");
    text("LIFE", 9450, 40);

    fill(this.life1);
    rect(9380, 50, 70, 30);
    fill(this.life2);
    rect(9450, 50, 70, 30);
    fill(this.life3);
    rect(9520, 50, 70, 30);
    pop();
  }
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      
      if (keyIsDown(DOWN_ARROW)&& angle<44) {
        angle += 2.0;
      
        //Matter.Body.rotate(this.body,angle);
        Matter.Body.setAngle(this.body, angle);
        console.log(angle);
 
      }
  
      if (keyIsDown(UP_ARROW)&& angle>-44) {
        angle -= 2.0;
       
     // Matter.Body.rotate(this.body,angle);
     Matter.Body.setAngle(this.body, angle);
     console.log(angle);
      }
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }