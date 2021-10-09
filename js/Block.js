class Block{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':1.2,
            'friction':1.0,
            'density':0.9,
        }
        this.color = rgb(random(0,255),random(0,255),random(0,255));
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
        //super(x,y,50,50);
        this.Visibility = 255;
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color);
        rect( 0, 0, this.width, this.height);
        pop();
      
        /*if(this.body.speed < 3) {
          super.display ();
        }
        else {
        World .remove(world, this.body);
        push ()
        this.Visibility = this.Visibility - 5;
       rect (this.body,this.body.position.x,this.body.position.y,50,50);
       pop ()
        }*/
      }
      score(){
        if(this.Visibility<0 &&this.Visibility>-105 ){
          score++;
          console.log("score");
        }
      }
    }