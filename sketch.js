var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var gameState = "PLAY";
var count = 0;
var particle;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

   

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill("white");
 text("Score : "+score,20,30);
 text("500",20,550);
 text("500",100,550);
 text("500",185,550);
 text("500",260,550);
 text("100",340,550);
 text("100",415,550);
 text("100",500,550);
 text("200",585,550);
 text("200",665,550);
 text("200",750,550);
 

 if(gameState=== "END"){
  textSize(80);
  fill("red");
  text("GAME OVER",150,470)
}  


console.log(count);
  if(count>=5)
    gameState = "END";


  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      count = count+1
      if(particle.body.position.x<295&&particle.body.position.x>0){
        score=score+500;
        particle=null;
      }
    }
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>296&&particle.body.position.x<600){
        score=score+100;
        particle=null;
      }
    }
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      
      if(particle.body.position.x>601&&particle.body.position.x<800){
        score=score+200;
        particle=null;
      }
    }
  }
 
  
  
  
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mouseClicked(){
  if(gameState!=="END"){
    particle= new Particle(mouseX,10,10,10);
  }
  
  
  

  
  

}