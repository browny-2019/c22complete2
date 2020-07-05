var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 50, 20, 20);
  car2=createSprite(50,130,20,20);
  car3=createSprite(50,210,20,20);
  car4=createSprite(50,290,20,20);
  wall=createSprite(780,50,10,60);
  wall2=createSprite(780,130,10,60);
  wall3=createSprite(780,210,10,60);
  wall4=createSprite(780,290,10,60);


  speed=random(55,90);
  weight=random(400,1500);
  
}

function draw() {
  background(0,0,0); 
  

  car.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;
  car4.velocityX=speed;

  
if(wall.x-car.x<(car.width+wall.width/2)){

  car.velocityX=0;

  var deformation=0.5 * weight * speed * speed / 22509;

  if(deformation>180){

  car.shapeColor=color(255,0,0);
  }
  if(deformation<180&&deformation>100){

    car.shapeColor=color(230,230,0);
  }
if(deformation<100){

  car.shapeColor=color(0,255,0);
}
  } 

  if(wall2.x-car2.x<(car2.width+wall2.width/2)){

    car2.velocityX=0;
  
    var deformation=0.5 * weight * speed * speed / 22509;
  
    if(deformation>180){
  
    car2.shapeColor=color(255,0,0);
    }
    if(deformation<180&&deformation>100){
  
      car2.shapeColor=color(230,230,0);
    }
  if(deformation<100){
  
    car2.shapeColor=color(0,255,0);
  }
    } 
    if(wall3.x-car3.x<(car3.width+wall3.width/2)){

      car3.velocityX=0;
    
      var deformation=0.5 * weight * speed * speed / 22509;
    
      if(deformation>180){
    
      car3.shapeColor=color(255,0,0);
      }
      if(deformation<180&&deformation>100){
    
        car3.shapeColor=color(230,230,0);
      }
    if(deformation<100){
    
      car3.shapeColor=color(0,255,0);
    }
      } 
      if(wall4.x-car4.x<(car4.width+wall4.width/2)){

        car4.velocityX=0;
      
        var deformation=0.5 * weight * speed * speed / 22509;
      
        if(deformation>180){
      
        car4.shapeColor=color(255,0,0);
        }
        if(deformation<180&&deformation>100){
      
          car4.shapeColor=color(230,230,0);
        }
      if(deformation<100){
      
        car4.shapeColor=color(0,255,0);
      }
        } 


  drawSprites();
}