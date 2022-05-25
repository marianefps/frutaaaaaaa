class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          //criar o corpo do chao

          
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
}