class Rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
       var options={
           bodyA : body1,
           bodyB : body2,
           pointB : {x:this.offsetX,y:this.offsetY},
           length : 500,
           stiffness :0.5
       }
       this.object = Constraint.create(options)
       World.add(world,this.object)
    }
    display(){
        var pointA =this.object.bodyA.position;
        var pointB = this.object.bodyB.position;
    line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY)
    }
}
