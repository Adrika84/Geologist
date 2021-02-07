class Ball {
    constructor(x, y) {
      var options = {
          'restitution':1,
          'friction':5,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 25, options)
    //  this.width = 100;
    //  this.height = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     // ellipseMode(CENTEr);
      strokeWeight(4);
      stroke("black");
      fill("blue");
      ellipse(0, 0);
      pop();
    }
  };