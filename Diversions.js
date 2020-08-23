class Diversions{
    constructor(x, y){
    var options={
        isStatic:true,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2
    }
    this.body = Bodies.rectangle(x, y,10,200, options);
     this.x = x;
     this.y = y;
     this.height = 200;
     this.width = 10;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      fill("white");
      rectMode("CENTRE");
      rect(this.x,this.y,this.width,this.height);
      pop();
    }
}
