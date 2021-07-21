class Plinko {
    constructor(x, y, r) {
      var options = {
          'restitution':0.4
      }
  
      this.body = Bodies.circle(x, y, 10, options);
      this.x = x;
      this.y = y;
      this.r = r;   
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      fill('white');
      ellipseMode(RADIUS);
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  