class Sand {
    constructor(x, y, r) {
      var options = {
          'restitution':0.8,
          'friction': 5,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, r, options);
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
       scale(0.15);
      strokeWeight(4);
      stroke("black");
      fill("red");
      ellipse(0, 0);
      pop();
    }
  };