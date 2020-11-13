class Slingshot {
    constructor(x, y) {
        var options = {
            bodyA:x, 
            bodyB:y,
            length:10,
            stiffness:0.04,
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain)
    }display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        push();
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
}