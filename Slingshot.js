class SlingShot {
    constructor(bodyA,pointB) {
      var options = {
         bodyA: bodyA,
         pointB: pointB,
         stiffness: 0.4,
         length: 5
      }
      this.pointB = pointB;
      this.sling = Constraint.create(options);
      World.add(world, this.sling);
    }
    attach(body) {
      this.sling.bodyA = body;
    }
    fly() {
        this.sling.bodyA = null;
    }
    display(){
      if(this.sling.bodyA) {
        push();
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(4);
      stroke("white");
      line(pointA.x,pointA.y,pointB.x,pointB.y);
      pop();
      }
      
    }
  }