const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;












var PLAY1 = 1;
var END1 = 2;
var PLAY2 = 3;
var END2 = 4;
var PLAY3 = 5;
var END3 = 6;
var PLAY4 = 7;
var END4 = 8;
var PLAY5 = 9;
var END5 = 10;
var gameState = PLAY1;  
var kill_sound; 
var win_sound = false;
var winning_Sound;                    
var bg;
var bow_Sound ,bpr_Sound , gpr_Sound ,bg_Sound;
var covifighter ,covifighter_Image,covifighter2_Image;
var goodperson1 ,goodperson2,goodperson3,goodperson4,goodperson5,goodperson6;
var plays ,p1_Image;
var htp ,htp_Image;
var pwm ,pwm_1;
var ul1 ,ul1_Image,ll2 ,ul2_Image,ll3 ,ul3_Image,ll4 ,ul4_Image,ll5,ul5_Image;
var ll2_Image,ll3_Image,ll4_Image,ll5_Image;
var back ,back_Image;
var htps ,htps_Image;
var bg1;
var cov ,covidFighters_Image;
var mask ,mask_Image;
var ground1,ground2,ground3;
var bg2 ,bg3;
var engine, world;
var bow;
var slingShot;
var arrow ,arrow_Image;
var badperson1 ,badperson2,badperson3 ,badperson_Image;
var greenLine ,cheakpoint_Image;
var level1_target ,level1target_Image;
var type_level ,typelevel_Image1;
var Victory = 0;
var covid_ball1 ,covid_ball2, covid_ball3 ,covid_ball_Image;
var tickmark_Image;
var arrows = [];
var covn1 ,covn1_Image ,covn2 ,covn2_Image,covn3 ,covn3_Image,covn4 ,covn4_Image,covn5 ,covn5_Image
var cp , cp_image;
var back2 ,b_i;
var t1 , t2 ,t3,t4,t5,t6,tz;

function preload(){
  bg = loadImage("bgjj.PNG");
  bg3 = loadImage("covidbg.jpg");
  covifighter_Image = loadImage("COVIFIGHTER.PNG");
  covifighter2_Image = loadImage("COVIFIGHTER2.PNG");
  goodperson_Image = loadAnimation("gp1.png" ,"gp2.png" ,"gp3.png","gp4.png");
  p1_Image = loadImage("PLAY.PNG");
  htp_Image = loadImage("HOW TO PLAY.PNG");
  pwm_1 = loadImage("PWM.PNG");
  ul1_Image = loadImage("UL1.png");
  ul2_Image = loadImage("UL2.png");
  ul3_Image = loadImage("UL3.png");
  ul4_Image = loadImage("UL4.png");
  ul5_Image = loadImage("UL5.png");

  ll2_Image = loadImage("LOCKED_LEVEL.png");
  ll3_Image = loadImage("LOCKED_LEVEL.png");
  ll4_Image = loadImage("LOCKED_LEVEL.png");
  ll5_Image = loadImage("LOCKED_LEVEL.png");

  back_Image = loadImage("back.png");
  htps_Image = loadImage("HTP.png");

  bg1 = loadImage("form bg.png");
  covidFighters_Image = loadImage("worriors.PNG");

  mask_Image = loadImage("mask.png");
 cheakpoint_Image = loadImage("CHEK POINT1.PNG");
  arrow_Image = loadImage("arrow1.png");

  badperson_Image = loadAnimation("bp2.png","bp1.png" ,"bp4.png","bp3.png","bp2.png",);
  tickmark_Image = loadImage("tickmark_Image.png");
  level1target_Image = loadImage("LEVEL1.PNG");
  typelevel_Image1 = loadImage("ULL1.PNG");
  covid_ball_Image = loadImage("covid.png");
  covn1_Image = loadImage("covn1.png");
  covn2_Image = loadImage("covn2.png");
  covn3_Image = loadImage("covn3.png");
  covn4_Image = loadImage("covn4.png");
  covn5_Image = loadImage("covn5.png");
  tz = loadImage("tz1.PNG");
  bow_Sound = loadSound("Bow sound-1.m4a");
  bpr_Sound = loadSound("Bpr.m4a");
  gpr_Sound = loadSound("Gpr1.m4a");
  bg_Sound = loadSound("bgss2.m4a");
  b_i = loadImage("b.png");
  cp_image = loadImage("CP.PNG");
  winning_Sound = loadSound("Winning sound.m4a");
  kill_sound = loadSound("kill_sound.wav");
}
function setup() {
  createCanvas(displayWidth ,displayHeight-25);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  greenLine = createSprite(displayWidth-1200 ,displayHeight-450,20,1200);
  greenLine.addImage(cheakpoint_Image);
  greenLine.scale = 0.45;

  cp = createSprite(displayWidth-1200 ,displayHeight-450,20,1200);
  cp.addImage(cp_image);
  cp.scale = 0.45;

  goodperson1 = createSprite(displayWidth+100 ,displayHeight-662,30,70);
  goodperson1.addAnimation("gd" ,goodperson_Image);
  goodperson1.scale = 0.3;

 

  goodperson2 = createSprite(displayWidth+100 ,displayHeight-412,30,70);
  goodperson2.addAnimation("gd" ,goodperson_Image);
  goodperson2.scale = 0.3;


  goodperson3 = createSprite(displayWidth+100 ,displayHeight-162,30,70);
  goodperson3.addAnimation("gd" ,goodperson_Image);
  goodperson3.scale = 0.3;

  
  goodperson4 = createSprite(displayWidth+100 ,displayHeight-162,30,70);
  goodperson4.addAnimation("gd" ,goodperson_Image);
  goodperson4.scale = 0.3;

  
  goodperson5 = createSprite(displayWidth+100 ,displayHeight-662,30,70);
  goodperson5.addAnimation("gd" ,goodperson_Image);
  goodperson5.scale = 0.3;

 
  goodperson6 = createSprite(displayWidth+100 ,displayHeight-412,30,70);
  goodperson6.addAnimation("gd" ,goodperson_Image);
  goodperson6.scale = 0.3;

  covid_ball1 = createSprite(displayWidth+100 ,displayHeight-662,30,70);
  covid_ball1.addImage(covid_ball_Image);
  covid_ball1.scale = 0.5;



  covid_ball2 = createSprite(displayWidth+100,displayHeight-412,30,70);
  covid_ball2.addImage(covid_ball_Image);
  covid_ball2.scale = 0.5;

  
  covid_ball3 = createSprite(displayWidth+100 ,displayHeight-162,30,70);
  covid_ball3.addImage(covid_ball_Image);
    covid_ball3.scale =0.5;




  badperson1 = createSprite(displayWidth+100 ,displayHeight-662,30,70);
  badperson1.addAnimation("bad_person" ,badperson_Image);
  badperson1.scale = 0.3;

 
  badperson2 = createSprite(displayWidth+100 ,displayHeight-412,30,70);
  badperson2.addAnimation("bad_person" ,badperson_Image);
  badperson2.scale = 0.3;


  badperson3 = createSprite(displayWidth+100 ,displayHeight-162,30,70);
  badperson3.addAnimation("bad_person" ,badperson_Image);
  badperson3.scale = 0.3;


 

  cov = createSprite(displayWidth-890 ,displayHeight-460);
  cov.addImage(covidFighters_Image);
  cov.scale = 1.2;

  covifighter = createSprite(displayWidth-650,displayHeight-780);
  covifighter.addImage(covifighter_Image);
  covifighter.scale = 0.5;

 

   plays = createSprite(displayWidth-150,displayHeight-550)
   plays.addImage(p1_Image);
   plays.scale = 1;

   htp = createSprite(displayWidth-150,displayHeight-350)
   htp.addImage(htp_Image);
   htp.scale = 0.8;

   pwm = createSprite(displayWidth-600,displayHeight-150);
   pwm.addImage(pwm_1);
   pwm.scale = 1;

   mask = createSprite(displayWidth-1200,displayHeight-150);
   mask.addImage(mask_Image);
   mask.scale = 1.25;

   ul1 = createSprite(displayWidth-1320,displayHeight-550);
   ul1.addImage(ul1_Image);
   ul1.scale = 1.75;
   ul1.visible = false;
   
   ll2 = createSprite(displayWidth-1020,displayHeight-350);
   ll2.addImage(ll2_Image);
   ll2.scale = 0.65;
   ll2.visible = false;

   ll3 = createSprite(displayWidth-720,displayHeight-550);
   ll3.addImage(ll3_Image);
   ll3.scale = 0.65;
   ll3.visible = false;
   
   ll4 = createSprite(displayWidth-420,displayHeight-350);
   ll4.addImage(ll4_Image);
   ll4.scale = 0.65;
   ll4.visible = false;

   ll5 = createSprite(displayWidth-100,displayHeight-550);
   ll5.addImage(ll5_Image);
   ll5.scale = 0.65;
   ll5.visible = false;


   back = createSprite(displayWidth-14600,displayHeight-790);
   back.addImage(back_Image);
   back.scale = 0.3;
   back.visible = false;

   

   back2 = createSprite(displayWidth-1460,displayHeight-690);
   back2.addImage(back_Image);
   back2.scale = 0.3;
   back2.visible = false;


   htps = createSprite(displayWidth-700,displayHeight-350);
   htps.addImage(htps_Image);
   htps.visible = false;


  level1_target = createSprite(displayWidth-350,displayHeight-830);
  level1_target.addImage(level1target_Image);
  level1_target.scale = 0.35;
  level1_target.visible = false;

  
  type_level = createSprite(displayWidth-1050,displayHeight-830);
  type_level.addImage(typelevel_Image1);
  type_level.scale = 0.35;
  type_level.visible = false;



ground1 = new Ground(displayWidth-820,displayHeight-550,3200,20);
ground2 = new Ground(displayWidth-820,displayHeight-300,3200,20);
ground3 = new Ground(displayWidth-820,displayHeight-50,3200,20);



bow = new Bow(displayWidth-1320,displayHeight-415,200,220);




tick_mark1 = createSprite(displayWidth-1320,displayHeight-545);
tick_mark1.addImage(tickmark_Image);
tick_mark1.scale = 0.35;
tick_mark1.visible = false;



covn1 = createSprite(displayWidth+100 ,displayHeight-662,30,70);
covn1.addImage(covn1_Image);
covn1.scale = 0.75;
covn1.visible = false;


covn2 = createSprite(displayWidth+100 ,displayHeight-412,30,70);
covn2.addImage(covn2_Image);
covn2.scale = 0.7;
covn2.visible = false;


covn3 = createSprite(displayWidth+100 ,displayHeight-162,30,70);
covn3.addImage(covn3_Image);
covn3.scale = 0.75;
covn3.visible = false;


covn4 = createSprite(displayWidth+100 ,displayHeight-412,30,70);
covn4.addImage(covn4_Image);
covn4.scale = 0.75;
covn4.visible = false;


covn5 = createSprite(displayWidth+100 ,displayHeight-162,30,70);
covn5.addImage(covn5_Image);
covn5.scale = 0.75;
covn5.visible = false;


t1 = createSprite(displayWidth-1400,displayHeight-780,30,70);
t1.addImage(tz);
t1.scale = 0.75;
t1.visible = false;


t2 = createSprite(displayWidth-1325,displayHeight-780,30,70);
t2.addImage(tz);
t2.scale = 0.75;
t2.visible = false;


t3 = createSprite(displayWidth-1250,displayHeight-780,30,70);
t3.addImage(tz);
t3.scale = 0.75;
t3.visible = false;


t4 = createSprite(displayWidth-1400,displayHeight-640,30,70);
t4.addImage(tz);
t4.scale = 0.75;
t4.visible = false;


t5 = createSprite(displayWidth-1325,displayHeight-640,30,70);
t5.addImage(tz);
t5.scale = 0.75;
t5.visible = false;

t6 = createSprite(displayWidth-1250,displayHeight-640,30,70);
t6.addImage(tz);
t6.scale = 0.75;
t6.visible = false;

}

function draw() {
  background(bg3); 
  
  



































if(gameState === PLAY1){


  if(goodperson1.isTouching(greenLine)   ){
goodperson1.x = displayWidth-2000;
gpr_Sound.play();
t1.visible = true;

  }

  if(goodperson2.isTouching(greenLine)   ){
    //goodperson2.x = displayWidth;
    goodperson2.x = displayWidth-2000;
    gpr_Sound.play();
    t2.visible = true;
      }

      if(goodperson3.isTouching(greenLine)   ){
      //  goodperson3.x = displayWidth;
        goodperson3.x = displayWidth-2000;
        gpr_Sound.play();
        t3.visible = true;
        }

        if(goodperson4.isTouching(greenLine)   ){
          //  goodperson3.x = displayWidth;
            goodperson4.x = displayWidth-2000;
            gpr_Sound.play();
            }

    
        


          if(badperson1.isTouching(greenLine) ||badperson2.isTouching(greenLine)  ||badperson3.isTouching(greenLine)  ){
            badperson1.x = displayWidth+100;
            badperson2.x = displayWidth+100;
            badperson3.x = displayWidth+100;
            goodperson1.velocityX = 0;
            goodperson2.velocityX = 0;
            goodperson3.velocityX = 0;
            goodperson4.velocityX = 0;
            badperson1.velocityX = 0;
            badperson2.velocityX = 0;
            badperson3.velocityX = 0;
            t1.visible = false;
            t2.visible = false;
            t3.visible = false;


            swal(
              {
                title: `LEVEL1`,
                text: "You lost Try again",
                imageUrl:
                  "https://static.vecteezy.com/system/resources/previews/000/369/161/non_2x/vector-little-boy-crying-with-tears.jpg",
                imageSize: "150x150",
                confirmButtonText: "Ok"
              },
              function(isConfirm) {
                if (isConfirm) {
                  
                  //location.reload();
                  goodperson1.velocityX = 0;
            goodperson2.velocityX = 0;
            goodperson3.velocityX = 0;
            goodperson4.velocityX = 0;
            badperson1.velocityX = 0;
            badperson2.velocityX = 0;
            badperson3.velocityX = 0;

  goodperson1.velocityX = 0;
  goodperson2.velocityX = 0;
  goodperson3.velocityX = 0;
  goodperson4.velocityX = 0;
  badperson1.velocityX = 0;
  badperson2.velocityX = 0;
  badperson3.velocityX = 0;
  covifighter.visible = true;

  level1_target.visible = false;
  type_level.visible = false;


  goodperson1.x=  displayWidth+100;
  goodperson2.x = displayWidth+100;
  goodperson3.x = displayWidth+100;
  goodperson4.x = displayWidth+100;
  badperson1.x =displayWidth+100;
  badperson2.x =displayWidth+100;
  badperson3.x = displayWidth+100;

  ul1.visible = true;
  ul1.x = displayWidth-1320;
  ll2.visible = true;
  ll3.visible = true;
  ll4.visible = true;
  ll5.visible = true;
  pwm.visible = true;
  covifighter.addImage(covifighter_Image);
  covifighter.scale = 0.5;
  covifighter.y = displayHeight-750;

  back.visible = false;
  back.y = displayHeight-8180;
  back.x = displayWidth-14800;
  back2.y = displayHeight-690;
  back2.visible = true;
  cov.visible = true;
                }
                
              }
            );
            
            bpr_Sound.play();
            }



if(mousePressedOver(plays)){

  
  plays.x = displayWidth+14000;
  htp.x = displayWidth+14000;
 
 
  pwm.x = displayWidth-750;
  pwm.scale = 0.9;
  mask.visible = false;
  ul1.visible = true;
  ll2.visible = true;
  ll3.visible = true;
  ll4.visible = true;
  ll5.visible = true;
  back2.visible = true;
 
}

if(mousePressedOver(back2)){

  plays.x = displayWidth-150;
  htp.x = displayWidth-150;
 
 
  pwm.x = displayWidth-600;
  pwm.scale = 1;

  mask.visible = true;
  ul1.visible = false;
  ll2.visible = false;
  ll3.visible = false;
  ll4.visible = false;
  ll5.visible = false;
  back2.visible = false;
}




if(mousePressedOver(ul1)){

  swal(
    {
     
      title: `LEVEL1`,
      text: "Kill Persons without Mask and save three persons with mask!!",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7-Yp6ziZZLecWUcZSN2swKFCrBYo27Bz2hfns9_G3IKKLBrIMIMot67QgtQssQ_BxxY&usqp=CAU",
      imageSize: "150x150",
      confirmButtonText: "Ok"
    },
    function(isConfirm) {
      if (isConfirm) {
        //location.reload();
        goodperson1.velocityX = -1.5;
  goodperson2.velocityX = -2;
  goodperson3.velocityX = -2.5;
  badperson1.velocityX = -4;
  badperson2.velocityX = -5;
  badperson3.velocityX = -3;

      }
      
    }
  );
  

// level1_target.visible = true;
 //type_level.visible = true;
  ul1.visible = false;
  ul1.x = displayWidth-1111000000;
  ll2.visible = false;
  ll3.visible = false;
  ll4.visible = false;
  ll5.visible = false;
  pwm.visible = false;
 covifighter.visible = false;
  back.visible = true;
  back.scale = 0.175;
  back.y = displayHeight-818;
  back.x = displayWidth-1480;
  mask.visible = false
  cov.visible = false;
  back2.y = displayWidth+10000;
 
 // goodperson1z();
}
ground1.display();
ground2.display();
ground3.display();

bow.display();
bow.life();
if(mousePressedOver(back)){
  t1.visible = false;
  t2.visible = false;
  t3.visible = false;
  goodperson1.velocityX = 0;
  goodperson2.velocityX = 0;
  goodperson3.velocityX = 0;
  badperson1.velocityX = 0;
  badperson2.velocityX = 0;
  badperson3.velocityX = 0;
  covifighter.visible = true;
 
  level1_target.visible = false;
  type_level.visible = false;

  back2.y = displayHeight-690;
  back2.visible = true;
  goodperson1.x=  displayWidth+100;
  goodperson2.x = displayWidth+100;
  goodperson3.x = displayWidth+100;
  badperson1.x =displayWidth+100;
  badperson2.x =displayWidth+100;
  badperson3.x = displayWidth+100;

  ul1.visible = true;
  ul1.x = displayWidth-1320;
  ll2.visible = true;
  ll3.visible = true;
  ll4.visible = true;
  ll5.visible = true;
  pwm.visible = true;
  covifighter.addImage(covifighter_Image);
  covifighter.scale = 0.5;
  covifighter.y = displayHeight-750;

  back.visible = false;
  cov.visible = true;
}


/*
if(mousePressedOver(htp)){
  htps.visible = true;
  mask.visible = false;
  htps.scale = 1.5;
  htps.y = htps.y-40;
  plays.destroy();
  htp.destroy();
  //goodperson.destroy();
  pwm.x = displayWidth-750;
  pwm.scale = 0.9;

  background(bg1);
}*/
for (var i = 0; i < arrows.length; i++) {
  showArrows(i, arrows);
  if(arrows[i].isTouching(badperson1)){
    badperson1.x = displayWidth+100;
    arrows[i].visible = false;
   arrows.splice(i ,1);
   kill_sound.play();
  }
  else if(arrows[i].isTouching(badperson2)){
    badperson2.x = displayWidth+100;
    arrows[i].visible = false;
    arrows.splice(i ,1);
    kill_sound.play();
  }
  else if(arrows[i].isTouching(badperson3)){
    badperson3.x = displayWidth+100;
    arrows[i].visible = false;
    arrows.splice(i ,1);
    kill_sound.play();
  }
}

if(goodperson1.x<displayWidth-1500 && goodperson2.x<displayWidth-1500 && goodperson3.x<displayWidth-1500)
gameState = END1;



}

























































if(gameState === END1){
  goodperson1.x=  displayWidth+100;
goodperson2.x = displayWidth+100;
goodperson3.x = displayWidth+100;
badperson1.x =displayWidth+100;
badperson2.x = displayWidth+100;
badperson3.x = displayWidth+100;
badperson2.velocityX = 0;
if(win_sound === false){
  winning_Sound.play();
  win_sound = true;
}


  swal(
    {
      title: `LEVEL1`,
      text: "YOU WON",
      imageUrl:"https://i.pinimg.com/736x/20/7c/9a/207c9a0c107ec57c0d97d5ae0bbbc851.jpg",
      imageSize: "150x150",
      confirmButtonText: "Ok"
    },
    function(isConfirm) {
      if (isConfirm) {
        gameState = PLAY2;
        //location.reload();
        t1.visible = false;
  t2.visible = false;
  t3.visible = false;

        goodperson1.velocityX = 0;
  goodperson2.velocityX = 0;
  goodperson3.velocityX = 0;
  badperson1.velocityX = 0;
  badperson2.velocityX = 0;
  badperson3.velocityX = 0;
  goodperson1.velocityX = 0;
goodperson2.velocityX = 0;
goodperson3.velocityX = 0;
badperson1.velocityX = 0;
badperson2.velocityX = 0;
badperson3.velocityX = 0;
covifighter.visible = true;

level1_target.visible = false;
type_level.visible = false;


goodperson1.x =  displayWidth+100;
goodperson2.x =  displayWidth+100;
goodperson3.x =  displayWidth+100;
badperson1.x = displayWidth+100;
badperson2.x =  displayWidth+100;
badperson3.x =  displayWidth+100;

ul1.visible = true;
ul1.addImage(tickmark_Image);
ul1.x = displayWidth-1320;
ul1.scale = 0.4;
ll2.visible = true;
ll2.addImage(ul2_Image);
ll2.scale = 1.75;
ll3.visible = true;
ll4.visible = true;
ll5.visible = true;
pwm.visible = true;
covifighter.addImage(covifighter_Image);
covifighter.scale = 0.5;
covifighter.y = displayHeight-750;
//tick_mark1.visible = true;
back.visible = false;
cov.visible = true;

      }
      
    }
  );
}


 
















































if(gameState === PLAY2){




    if(goodperson1.isTouching(greenLine)   ){
      goodperson1.x = displayWidth-2000;
      gpr_Sound.play();
      t1.visible = true;
      
    
      
        }

        if(goodperson2.isTouching(greenLine)   ){
          //goodperson2.x = displayWidth;
          goodperson2.x = displayWidth-2000;
          gpr_Sound.play();
          t2.visible = true;

            }
      
            if(goodperson3.isTouching(greenLine)   ){
            //  goodperson3.x = displayWidth;
              goodperson3.x = displayWidth-2000;
              gpr_Sound.play();
              t3.visible = true;

              }
      
              if(goodperson4.isTouching(greenLine)   ){
                //  goodperson3.x = displayWidth;
                  goodperson4.x = displayWidth-2000;
                  gpr_Sound.play();
                  t4.visible = true;

                  }
      
          
              
      
      
                if(badperson1.isTouching(greenLine)||badperson2.isTouching(greenLine) || badperson3.isTouching(greenLine) ||covid_ball1.isTouching(greenLine) ||covid_ball2.isTouching(greenLine)  ||covid_ball3.isTouching(greenLine)    ){
                  badperson1.x =  displayWidth+100;
                  badperson2.x =  displayWidth+100;
                  badperson3.x =  displayWidth+100;
                  covid_ball1.x =  displayWidth+100;
                  covid_ball2.x =  displayWidth+100;
                  covid_ball3.x =  displayWidth+100;
                  goodperson1.velocityX = 0;
                  goodperson2.velocityX = 0;
                  goodperson3.velocityX = 0;
                  goodperson4.velocityX = 0;
                  badperson1.velocityX = 0;
                  badperson2.velocityX = 0;
                  badperson3.velocityX = 0;
                  covid_ball1.velocityX = 0;
                  covid_ball2.velocityX = 0;
                  covid_ball3.velocityX = 0; 
                 

                  swal(
                    {
                      title: `LEVEL2`,
                      text: "You lost Try again",
                      imageUrl:
                        "https://static.vecteezy.com/system/resources/previews/000/369/161/non_2x/vector-little-boy-crying-with-tears.jpg",
                      imageSize: "150x150",
                      confirmButtonText: "Ok"
                    },
                    function(isConfirm) {
                      if (isConfirm) {
                        t1.visible = false;
                        t2.visible = false;
                        t3.visible = false;
                        t4.visible = false;

                        //location.reload();
                        goodperson1.velocityX = 0;
                  goodperson2.velocityX = 0;
                  goodperson3.velocityX = 0;
                  goodperson4.velocityX = 0;
                  badperson1.velocityX = 0;
                  badperson2.velocityX = 0;
                  badperson3.velocityX = 0;
                  covid_ball1.velocityX = 0;
                  covid_ball2.velocityX = 0;
                  covid_ball3.velocityX = 0; 
        
        
        covid_ball1.velocityX = 0;
        covid_ball2.velocityX = 0;
        covid_ball3.velocityX = 0; 
        goodperson1.velocityX = 0;
        goodperson2.velocityX = 0;
        goodperson3.velocityX = 0;
        goodperson4.velocityX = 0;
        badperson1.velocityX = 0;
        badperson2.velocityX = 0;
        badperson3.velocityX = 0;
        covifighter.visible = true;
      
        level1_target.visible = false;
        type_level.visible = false;
      
      
        goodperson1.x=   displayWidth+100;
        goodperson2.x = displayWidth+100;
        goodperson3.x =  displayWidth+100;
        goodperson4.x =  displayWidth+100;
        badperson1.x = displayWidth+100;
        badperson2.x = displayWidth+100;
        badperson3.x = displayWidth+100;
        covid_ball1.x = displayWidth+100;
        covid_ball2.x = displayWidth+100;
        covid_ball3.x = displayWidth+100;
      
        ul1.visible = true;
        ul1.x = displayWidth-1320;
        ll2.visible = true;
        ll3.visible = true;
        ll4.visible = true;
        ll5.visible = true;
        pwm.visible = true;
        covifighter.addImage(covifighter_Image);
        covifighter.scale = 0.5;
        covifighter.y = displayHeight-750;
        back2.y = displayHeight-690;
        back2.visible = true;
        back.visible = false;
        back.y = displayHeight-8180;
        back.x = displayWidth-14800;
        cov.visible = true;
                      }
                      
                    }
                  );
                  
                  bpr_Sound.play();
                    }
                  
    

      
      
      if(mousePressedOver(plays)){
      
        
        
  plays.x = displayWidth+14000;
  htp.x = displayWidth+14000;

       // goodperson.destroy();
        pwm.x = displayWidth-750;
        pwm.scale = 0.9;
        mask.visible = false;
        ul1.visible = true;
        ll2.visible = true;
        ll3.visible = true;
        ll4.visible = true;
        ll5.visible = true;
        back2.visible = true;
        //ground1.display();
      }
      
      
      //ground1.display();
      
if(mousePressedOver(back2)){

  plays.x = displayWidth-150;
  htp.x = displayWidth-150;
 
  plays.x.visible = true;
  htp.x.visible = true;

  pwm.x = displayWidth-600;
  pwm.scale = 1;

  mask.visible = true;
  ul1.visible = false;
  ll2.visible = false;
  ll3.visible = false;
  ll4.visible = false;
  ll5.visible = false;
  back2.visible = false;
}

      
      if(mousePressedOver(ll2)){
      
        swal(
          {
           
            title: `LEVEL2`,
            text: "Kill Persons without Mask and covid balls.Save four persons with mask!!",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7-Yp6ziZZLecWUcZSN2swKFCrBYo27Bz2hfns9_G3IKKLBrIMIMot67QgtQssQ_BxxY&usqp=CAU",
            imageSize: "150x150",
            confirmButtonText: "Ok"
          },
          function(isConfirm) {
            if (isConfirm) {
              //location.reload();
              goodperson1.velocityX = -1.5;
        goodperson2.velocityX = -2;
        goodperson3.velocityX = -2.5;
        goodperson4.velocityX = -3;
        badperson1.velocityX = -5.5;
        badperson2.velocityX = -6.5;
        badperson3.velocityX = -4.5;
        covid_ball1.velocityX = -9;
     
      
            }
            
          }
        );
        
   
   
        ul1.visible = false;
        ul1.x = displayWidth-1111000000;
        ll2.visible = false;
        ll3.visible = false;
        ll4.visible = false;
        ll5.visible = false;
        pwm.visible = false;
       covifighter.visible = false;
        back.visible = true;
        back.scale = 0.175;
        back.y = displayHeight-818;
        back.x = displayWidth-1480;
        mask.visible = false
        cov.visible = false;
        back2.visible = false;
        back2.y = displayWidth+10000;
       
       // goodperson1z();
      }
      ground1.display();
      ground2.display();
      ground3.display();
      
      bow.display();
      bow.life();
      if(mousePressedOver(back)){
        
        t1.visible = false;
        t2.visible = false;
        t3.visible = false;
        t4.visible = false;

        goodperson1.velocityX = 0;
        goodperson2.velocityX = 0;
        goodperson3.velocityX = 0;
        goodperson4.velocityX = 0;
        badperson1.velocityX = 0;
        badperson2.velocityX = 0;
        badperson3.velocityX = 0;
        covid_ball1.velocityX = 0;
        covid_ball2.velocityX = 0;
        covid_ball3.velocityX = 0; 
      
        covifighter.visible = true;
       
        level1_target.visible = false;
        type_level.visible = false;
      
      
        goodperson1.x=   displayWidth+100;
        goodperson2.x =  displayWidth+100;
        goodperson3.x =  displayWidth+100;
        goodperson4.x =  displayWidth+100;
        badperson1.x = displayWidth+100;
        badperson2.x = displayWidth+100;
        badperson3.x =  displayWidth+100;
        covid_ball1.x =  displayWidth+100;
        covid_ball2.x =  displayWidth+100;
        covid_ball3.x =  displayWidth+100;
        ul1.visible = true;
        ul1.x = displayWidth-1320;
        ll2.visible = true;
        ll3.visible = true;
        ll4.visible = true;
        ll5.visible = true;
        pwm.visible = true;
        covifighter.addImage(covifighter_Image);
       
         covifighter.scale = 0.5;

        covifighter.y = displayHeight-750;
      
        back.visible = false;
        back2.y = displayHeight-690;
        back2.visible = true;
        cov.visible = true;
      }
      
     /* if(mousePressedOver(htp)){
        htps.visible = true;
        mask.visible = false;
        htps.scale = 1.5;
        htps.y = htps.y-40;
        plays.destroy();
        htp.destroy();
        //goodperson.destroy();
        pwm.x = displayWidth-750;
        pwm.scale = 0.9;
      
        background(bg1);
      }*/
      for (var i = 0; i < arrows.length; i++) {
        showArrows(i, arrows);
        if(arrows[i].isTouching(badperson1)){
          badperson1.x = displayWidth+100;
          arrows[i].visible = false;
          arrows.splice(i ,1);
          kill_sound.play();
        }
        else if(arrows[i].isTouching(badperson2)){
          badperson2.x = displayWidth+100;
          arrows[i].visible = false;
          arrows.splice(i ,1);
          kill_sound.play();
        }
        else if(arrows[i].isTouching(badperson3)){
          badperson3.x = displayWidth+100;
          arrows[i].visible = false;
          arrows.splice(i ,1);
          kill_sound.play();
        }  else if(arrows[i].isTouching(covid_ball1)){
          covid_ball1.x = displayWidth+100;
          covid_ball1.velocityX = 0;
          covid_ball2.velocityX = -8;
          arrows[i].visible = false;
          arrows.splice(i ,1);
          kill_sound.play();
        }
        else if(arrows[i].isTouching(covid_ball2)){
          covid_ball2.x = displayWidth+100;
          covid_ball2.velocityX = 0;
          covid_ball3.velocityX = -8;
          arrows[i].visible = false;
          arrows.splice(i ,1);
          kill_sound.play();
        }
        else if(arrows[i].isTouching(covid_ball3)){
          covid_ball3.x = displayWidth+100;
          covid_ball3.velocityX = 0;
          covid_ball1.velocityX = -9;
          arrows[i].visible = false;
          arrows.splice(i ,1);
          kill_sound.play();
        }
      }
 
      if(goodperson1.x<displayWidth-1500 && goodperson2.x<displayWidth-1500 && goodperson3.x<displayWidth-1500 &&  goodperson4.x<displayWidth-1500)
      gameState = END2;









    
}











if(gameState === END2){
  goodperson1.x=  displayWidth+100;
goodperson2.x = displayWidth+100;
goodperson3.x =  displayWidth+100;
goodperson4.x =  displayWidth+100;
badperson1.x = displayWidth+100;
badperson2.x = displayWidth+100;
badperson3.x = displayWidth+100;
covid_ball1.x = displayWidth+100;
covid_ball2.x = displayWidth+100;
covid_ball3.x =  displayWidth+100;

if(win_sound === false){
  winning_Sound.play();
  win_sound = true;
}
  swal(
    {
      title: `LEVEL2`,
      text: "YOU WON",
      imageUrl:"https://i.pinimg.com/736x/20/7c/9a/207c9a0c107ec57c0d97d5ae0bbbc851.jpg",
      imageSize: "150x150",
      confirmButtonText: "Ok"
    },
    function(isConfirm) {
      if (isConfirm) {
        t1.visible = false;
        t2.visible = false;
        t3.visible = false;
        t4.visible = false;
        gameState = PLAY3;
        //location.reload();
        goodperson1.velocityX = 0;
  goodperson2.velocityX = 0;
  goodperson3.velocityX = 0;
  goodperson4.velocityX = 0;
  badperson1.velocityX = 0;
  badperson2.velocityX = 0;
  badperson3.velocityX = 0;
  covid_ball1.velocityX = 0;
  covid_ball2.velocityX = 0;
  covid_ball3.velocityX = 0;


  covid_ball1.velocityX = 0;
  covid_ball2.velocityX = 0;
  covid_ball3.velocityX = 0;
  goodperson1.velocityX = 0;
goodperson2.velocityX = 0;
goodperson3.velocityX = 0;
goodperson4.velocityX = 0;
badperson1.velocityX = 0;
badperson2.velocityX = 0;
badperson3.velocityX = 0;
covifighter.visible = true;

level1_target.visible = false;
type_level.visible = false;


goodperson1.x=   displayWidth+100;
goodperson2.x =  displayWidth+100;
goodperson3.x =  displayWidth+100;
goodperson4.x =  displayWidth+100;
badperson1.x = displayWidth+100;
badperson2.x = displayWidth+100;
badperson3.x =  displayWidth+100;

ul1.visible = true;
ul1.x = displayWidth-1320;
ul1.addImage(tickmark_Image);
ul1.scale = 0.4;
ll2.visible = true;
ll2.addImage(tickmark_Image);
ll2.scale = 0.4;
ll3.visible = true;
ll3.addImage(ul3_Image);
ll3.scale = 1.75;
ll4.visible = true;
ll5.visible = true;
pwm.visible = true;
covifighter.addImage(covifighter_Image);
covifighter.scale = 0.5;

covifighter.y = displayHeight-750;

back.visible = false;
cov.visible = true;
      }
      
    }
  );
}















if(gameState === PLAY3){

  if(goodperson1.isTouching(greenLine)   ){
    goodperson1.x = displayWidth-2000;
    gpr_Sound.play();
    t1.visible = true;
    
  
    
      }

      if(goodperson2.isTouching(greenLine)   ){
        //goodperson2.x = displayWidth;
        goodperson2.x = displayWidth-2000;
        gpr_Sound.play();
        t2.visible = true;

          }
    
          if(goodperson3.isTouching(greenLine)   ){
          //  goodperson3.x = displayWidth;
            goodperson3.x = displayWidth-2000;
            gpr_Sound.play();
            t3.visible = true;

            }
    
            if(goodperson4.isTouching(greenLine)   ){
              //  goodperson3.x = displayWidth;
                goodperson4.x = displayWidth-2000;
                gpr_Sound.play();
                t4.visible = true;

                }
    
      
          
  
              if(badperson1.isTouching(greenLine)||badperson2.isTouching(greenLine) || badperson2.isTouching(greenLine) ||covid_ball1.isTouching(greenLine) ||covid_ball2.isTouching(greenLine)  ||covid_ball3.isTouching(greenLine)    ){
                badperson1.x = displayWidth+100;
                badperson2.x = displayWidth+100;
                badperson3.x = displayWidth+100;
                covid_ball1.x = displayWidth+100;
                covid_ball2.x = displayWidth+100;
                covid_ball3.x = displayWidth+100;
              goodperson1.velocityX = 0;
              goodperson2.velocityX = 0;
              goodperson3.velocityX = 0;
              goodperson4.velocityX = 0;
              badperson1.velocityX = 0;
              badperson2.velocityX = 0;
              badperson3.velocityX = 0;
              covid_ball1.velocityX = 0;
              covid_ball2.velocityX = 0;
              covid_ball3.velocityX = 0; 
  
              swal(
                {
                  title: `LEVEL3`,
                  text: "You lost Try again",
                  imageUrl:
                    "https://static.vecteezy.com/system/resources/previews/000/369/161/non_2x/vector-little-boy-crying-with-tears.jpg",
                  imageSize: "150x150",
                  confirmButtonText: "Ok"
                },
                function(isConfirm) {
                  if (isConfirm) {
                    t1.visible = false;
                    t2.visible = false;
                    t3.visible = false;
                    t4.visible = false;
                    //location.reload();
                    goodperson1.velocityX = 0;
              goodperson2.velocityX = 0;
              goodperson3.velocityX = 0;
              goodperson4.velocityX = 0;
              badperson1.velocityX = 0;
              badperson2.velocityX = 0;
              badperson3.velocityX = 0;
              covid_ball1.velocityX = 0;
              covid_ball2.velocityX = 0;
              covid_ball3.velocityX = 0; 
    
    
    covid_ball1.velocityX = 0;
    covid_ball2.velocityX = 0;
    covid_ball3.velocityX = 0; 
    goodperson1.velocityX = 0;
    goodperson2.velocityX = 0;
    goodperson3.velocityX = 0;
    goodperson4.velocityX = 0;
    badperson1.velocityX = 0;
    badperson2.velocityX = 0;
    badperson3.velocityX = 0;
    covifighter.visible = true;
  
    level1_target.visible = false;
    type_level.visible = false;
  
  
    goodperson1.x= displayWidth+100;
    goodperson2.x = displayWidth+100;
    goodperson3.x = displayWidth+100;
    goodperson4.x = displayWidth+100;
    badperson1.x = displayWidth+100;
    badperson2.x = displayWidth+100;
    badperson3.x = displayWidth+100;
    covid_ball1.x = displayWidth+100;
    covid_ball2.x = displayWidth+100;
    covid_ball3.x = displayWidth+100;
  
    ul1.visible = true;
    ul1.x = displayWidth-1320;
    ll2.visible = true;
    ll3.visible = true;
    ll4.visible = true;
    ll5.visible = true;
    pwm.visible = true;
    covifighter.addImage(covifighter_Image);
    covifighter.scale = 0.5;

    covifighter.y = displayHeight-750;
  
    back2.y = displayHeight-690;
    back2.visible = true;
    back.visible = false;
    back.y = displayHeight-8180;
    back.x = displayWidth-14800;
    cov.visible = true;
                  }
                  
                }
              );
              bpr_Sound.play();
  
                }
              
            


  
  
  if(mousePressedOver(plays)){
  
    
  
    plays.x = displayWidth-14000;
    htp.x = displayWidth-14000;
   
   
   // goodperson.destroy();
    pwm.x = displayWidth-750;
    pwm.scale = 0.9;
    mask.visible = false;
    ul1.visible = true;
    ll2.visible = true;
    ll3.visible = true;
    ll4.visible = true;
    ll5.visible = true;
    back2.visible = true;
  }
  

  if(mousePressedOver(back2)){

    plays.x = displayWidth-150;
    htp.x = displayWidth-150;
   
   
    pwm.x = displayWidth-600;
    pwm.scale = 1;
  
    mask.visible = true;
    ul1.visible = false;
    ll2.visible = false;
    ll3.visible = false;
    ll4.visible = false;
    ll5.visible = false;
    back2.visible = false;
  }
  
  
  
  
  if(mousePressedOver(ll3)){
  
    swal(
      {
       
        title: `LEVEL3`,
        text: "Kill Persons without Mask and covid balls.Save four persons with mask!!",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7-Yp6ziZZLecWUcZSN2swKFCrBYo27Bz2hfns9_G3IKKLBrIMIMot67QgtQssQ_BxxY&usqp=CAU",
        imageSize: "150x150",
        confirmButtonText: "Ok"
      },
      function(isConfirm) {
        if (isConfirm) {
          //location.reload();
          goodperson1.velocityX = -1.5;
    goodperson2.velocityX = -2;
    goodperson3.velocityX = -2.5;
    goodperson4.velocityX = -3;
    badperson1.velocityX = -5.5;
    badperson2.velocityX = -6.5;
    badperson3.velocityX = -4.5;
    covid_ball1.velocityX = -9;
    covid_ball2.velocityX = -6;
    covid_ball3.velocityX = -9; 
  
        }
        
      }
    );
    
  
  // level1_target.visible = true;
   //type_level.visible = true;
    ul1.visible = false;
    ul1.x = displayWidth-1111000000;
    ll2.visible = false;
    ll3.visible = false;
    ll4.visible = false;
    ll5.visible = false;
    pwm.visible = false;
   covifighter.visible = false;
    back.visible = true;
    back.scale = 0.175;
    back.y = displayHeight-818;
    back.x = displayWidth-1480;
    mask.visible = false
    cov.visible = false;
   
    back2.y = displayHeight-20690;
    back2.visible = false;
   // goodperson1z();
  }
  ground1.display();
  ground2.display();
  ground3.display();
  
  bow.display();
  bow.life();
  if(mousePressedOver(back)){

    t1.visible = false;
    t2.visible = false;
    t3.visible = false;
    t4.visible = false;
    
    goodperson1.velocityX = 0;
    goodperson2.velocityX = 0;
    goodperson3.velocityX = 0;
    goodperson4.velocityX = 0;
    badperson1.velocityX = 0;
    badperson2.velocityX = 0;
    badperson3.velocityX = 0;
    covid_ball1.velocityX = 0;
    covid_ball2.velocityX = 0;
    covid_ball3.velocityX = 0; 
  
    covifighter.visible = true;
   
    level1_target.visible = false;
    type_level.visible = false;
  
  
    goodperson1.x=  displayWidth+100;
    goodperson2.x = displayWidth+100;
    goodperson3.x = displayWidth+100;
    goodperson4.x = displayWidth+100;
    badperson1.x = displayWidth+100;
    badperson2.x = displayWidth+100;
    badperson3.x = displayWidth+100;
    covid_ball1.x = displayWidth+100;
    covid_ball2.x =displayWidth+100;
    covid_ball3.x = displayWidth+100;
    ul1.visible = true;
    ul1.x = displayWidth-1320;
    ll2.visible = true;
    ll3.visible = true;
    ll4.visible = true;
    ll5.visible = true;
    pwm.visible = true;
    covifighter.addImage(covifighter_Image);
    covifighter.scale = 0.5;

    covifighter.y = displayHeight-750;
    back2.y = displayHeight-690;
    back2.visible = true;
    back.visible = false;
    back.y = displayHeight-8180;
    back.x = displayWidth-14800;
    cov.visible = true;
  }
  
 /* if(mousePressedOver(htp)){
    htps.visible = true;
    mask.visible = false;
    htps.scale = 1.5;
    htps.y = htps.y-40;
    plays.destroy();
    htp.destroy();
    //goodperson.destroy();
    pwm.x = displayWidth-750;
    pwm.scale = 0.9;
  
    background(bg1);
  }*/
  for (var i = 0; i < arrows.length; i++) {
    showArrows(i, arrows);
    if(arrows[i].isTouching(badperson1)){
      badperson1.x = displayWidth+100;
      arrows[i].visible = false;
      arrows.splice(i ,1);
      kill_sound.play();
    }
    else if(arrows[i].isTouching(badperson2)){
      badperson2.x = displayWidth+100;
      arrows[i].visible = false;
      arrows.splice(i ,1);
      kill_sound.play();
    }
    else if(arrows[i].isTouching(badperson3)){
      badperson3.x = displayWidth+100;
      arrows[i].visible = false;
      arrows.splice(i ,1);
      kill_sound.play();
    }  else if(arrows[i].isTouching(covid_ball1)){
      covid_ball1.x = displayWidth+100;
      arrows[i].visible = false;
   arrows.splice(i ,1);
   kill_sound.play();
    }
    else if(arrows[i].isTouching(covid_ball2)){
      covid_ball2.x = displayWidth+100;
      arrows[i].visible = false;
      arrows.splice(i ,1);
      kill_sound.play();
    }
    else if(arrows[i].isTouching(covid_ball3)){
      covid_ball3.x = displayWidth+100;
      arrows[i].visible = false;
      arrows.splice(i ,1);
      kill_sound.play();
    }
  }

  if(goodperson1.x<displayWidth-1500 && goodperson2.x<displayWidth-1500 && goodperson3.x<displayWidth-1500 &&  goodperson4.x<displayWidth-1500)
  gameState = END3;
}        
 













if(gameState === END3){
  goodperson1.x=  displayWidth+100;
goodperson2.x = displayWidth+100;
goodperson3.x = displayWidth+100;
goodperson4.x = displayWidth+100;
badperson1.x = displayWidth+100;
badperson2.x = displayWidth+100;
badperson3.x = displayWidth+100;
covid_ball1.x = displayWidth+100;
covid_ball2.x = displayWidth+100;
covid_ball3.x = displayWidth+100;

if(win_sound === false){
  winning_Sound.play();
  win_sound = true;
}

  swal(
    {
      title: `LEVEL3`,
      text: "YOU WON",
      imageUrl:"https://i.pinimg.com/736x/20/7c/9a/207c9a0c107ec57c0d97d5ae0bbbc851.jpg",
      imageSize: "150x150",
      confirmButtonText: "Ok"
    },
    function(isConfirm) {
      if (isConfirm) {
        t1.visible = false;
        t2.visible = false;
        t3.visible = false;
        t4.visible = false;
        gameState = PLAY4;
        //location.reload();
        goodperson1.velocityX = 0;
  goodperson2.velocityX = 0;
  goodperson3.velocityX = 0;
  goodperson4.velocityX = 0;
  badperson1.velocityX = 0;
  badperson2.velocityX = 0;
  badperson3.velocityX = 0;
  covid_ball1.velocityX = 0;
  covid_ball2.velocityX = 0;
  covid_ball3.velocityX = 0;


  covid_ball1.velocityX = 0;
  covid_ball2.velocityX = 0;
  covid_ball3.velocityX = 0;
  goodperson1.velocityX = 0;
goodperson2.velocityX = 0;
goodperson3.velocityX = 0;
goodperson4.velocityX = 0;
badperson1.velocityX = 0;
badperson2.velocityX = 0;
badperson3.velocityX = 0;
covifighter.visible = true;

level1_target.visible = false;
type_level.visible = false;


goodperson1.x = displayWidth+100;
goodperson2.x = displayWidth+100;
goodperson3.x = displayWidth+100;
goodperson4.x = displayWidth+100;
badperson1.x = displayWidth+100;
badperson2.x = displayWidth+100;
badperson3.x = displayWidth+100;
covid_ball1.x = displayWidth+100;
covid_ball2.x = displayWidth+100;
covid_ball3.x = displayWidth+100;

ul1.visible = true;
ul1.x = displayWidth-1320;
ul1.addImage(tickmark_Image);
ul1.scale = 0.4;
ll2.visible = true;
ll2.addImage(tickmark_Image);
ll2.scale = 0.4;
ll3.visible = true;
ll3.addImage(tickmark_Image);
ll3.scale = 0.4;
ll4.visible = true;
ll4.addImage(ul4_Image);
ll4.scale = 0.6;
ll5.visible = true;
pwm.visible = true;
covifighter.addImage(covifighter_Image);
covifighter.scale = 0.5;

covifighter.y = displayHeight-750;

back.visible = false;
cov.visible = true;
      }
      
    }
  );
}






















if(gameState === PLAY4){

  
















  if(goodperson1.isTouching(greenLine)   ){
    goodperson1.x = displayWidth-2000;
    gpr_Sound.play();
    t1.visible = true;
      }

      if(goodperson2.isTouching(greenLine)   ){
        //goodperson2.x = displayWidth;
        goodperson2.x = displayWidth-2000;
        gpr_Sound.play();
        t2.visible = true;
          }
    
          if(goodperson3.isTouching(greenLine)   ){
          //  goodperson3.x = displayWidth;
            goodperson3.x = displayWidth-2000;
            gpr_Sound.play();
            t3.visible = true;
            }
    
            if(goodperson4.isTouching(greenLine)   ){
              //  goodperson3.x = displayWidth;
                goodperson4.x = displayWidth-2000;
                gpr_Sound.play();
                t4.visible = true;
                }
    
                if(goodperson5.isTouching(greenLine)   ){
                  //  goodperson3.x = displayWidth;
                    goodperson5.x = displayWidth-2000;
                    gpr_Sound.play();
                    t5.visible = true;
                    }
        
            
    
    
              if(badperson1.isTouching(greenLine) || badperson2.isTouching(greenLine)  || badperson3.isTouching(greenLine) || covn1.isTouching(greenLine) ||covn2.isTouching(greenLine)||covn3.isTouching(greenLine)||covn4.isTouching(greenLine) ||covn5.isTouching(greenLine)   ){
               
                t1.visible = false;
                t2.visible = false;
                t3.visible = false;
                t4.visible = false; 
                t5.visible = false; 

                badperson1.x = displayWidth+100;
                goodperson1.velocityX = 0;
                goodperson2.velocityX = 0;
                goodperson3.velocityX = 0;
                goodperson4.velocityX = 0;
                goodperson5.velocityX = 0;
                badperson1.velocityX = 0;
                badperson2.velocityX = 0;
                badperson3.velocityX = 0;
                covn1.velocityX = 0;
                covn2.velocityX = 0;
                covn3.velocityX = 0;
                covn4.velocityX = 0;
                covn5.velocityX = 0;
                
      goodperson1.x=  displayWidth+100;
      goodperson2.x = displayWidth+100;
      goodperson3.x = displayWidth+100;
      goodperson4.x = displayWidth+100;
      goodperson5.x = displayWidth+100;
      badperson1.x = displayWidth+100;
      badperson2.x = displayWidth+100;
      badperson3.x = displayWidth+100;
      covn1.x = displayWidth+100;
      covn2.x = displayWidth+100;
      covn3.x = displayWidth+100;
      covn4.x = displayWidth+100;
      covn5.x = displayWidth+100;
    
                bpr_Sound.play();
                swal(
                  {
                    title: `LEVEL4`,
                    text: "You lost Try again",
                    imageUrl:
                      "https://static.vecteezy.com/system/resources/previews/000/369/161/non_2x/vector-little-boy-crying-with-tears.jpg",
                    imageSize: "150x150",
                    confirmButtonText: "Ok"
                  },
                  function(isConfirm) {
                    if (isConfirm) {
                      
                      //location.reload();
                      goodperson1.velocityX = 0;
                goodperson2.velocityX = 0;
                goodperson3.velocityX = 0;
                goodperson4.velocityX = 0;
                goodperson5.velocityX = 0;
                badperson1.velocityX = 0;
                badperson2.velocityX = 0;
                badperson3.velocityX = 0;
                covn1.velocityX = 0;
                covn2.velocityX = 0;
                covn3.velocityX = 0;
                covn4.velocityX = 0;
                covn5.velocityX = 0;
      
      
                covn1.velocityX = 0;
                covn2.velocityX = 0;
                covn3.velocityX = 0;
                covn4.velocityX = 0;
                covn5.velocityX = 0;
      goodperson1.velocityX = 0;
      goodperson2.velocityX = 0;
      goodperson3.velocityX = 0;
      goodperson4.velocityX = 0;
      goodperson5.velocityX = 0;
      badperson1.velocityX = 0;
      badperson2.velocityX = 0;
      badperson3.velocityX = 0;
      covifighter.visible = true;
    
      level1_target.visible = false;
      type_level.visible = false;
    
    
      goodperson1.x=  displayWidth+100;
      goodperson2.x = displayWidth+100;
      goodperson3.x = displayWidth+100;
      goodperson4.x = displayWidth+100;
      goodperson5.x = displayWidth+100;
      badperson1.x = displayWidth+100;
      badperson2.x = displayWidth+100;
      badperson3.x = displayWidth+100;
      covn1.x = displayWidth+100;
      covn2.x = displayWidth+100;
      covn3.x = displayWidth+100;
      covn4.x = displayWidth+100;
      covn5.x = displayWidth+100;
    
      ul1.visible = true;
      ul1.x = displayWidth-1320;
      ll2.visible = true;
      ll3.visible = true;
      ll4.visible = true;
      ll5.visible = true;
      pwm.visible = true;
      covifighter.addImage(covifighter_Image);
      covifighter.scale = 0.5;

      covifighter.y = displayHeight-750;
    
      
    back2.y = displayHeight-690;
    back2.visible = true;
    back.visible = false;
    back.y = displayHeight-8180;
    back.x = displayWidth-14800;
      cov.visible = true;
                    }
                    
                  }
                );
               
    
                  }
   
















  
  
  
                  if(mousePressedOver(plays)){
  
    
  
                    plays.x = displayWidth-14000;
                    htp.x = displayWidth-14000;
                   
                   
                   // goodperson.destroy();
                    pwm.x = displayWidth-750;
                    pwm.scale = 0.9;
                    mask.visible = false;
                    ul1.visible = true;
                    ll2.visible = true;
                    ll3.visible = true;
                    ll4.visible = true;
                    ll5.visible = true;
                    back2.visible = true;
                  }
                  
                
                  if(mousePressedOver(back2)){
                
                    plays.x = displayWidth-150;
                    htp.x = displayWidth-150;
                   
                   
                    pwm.x = displayWidth-600;
                    pwm.scale = 1;
                  
                    mask.visible = true;
                    ul1.visible = false;
                    ll2.visible = false;
                    ll3.visible = false;
                    ll4.visible = false;
                    ll5.visible = false;
                    back2.visible = false;
                  }
                  
  
  if(mousePressedOver(ll4)){
  
    swal(
      {
       
        title: `LEVEL4`,
        text: "Kill Persons without mask and other types of covid balls.Save five persons with mask!!",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7-Yp6ziZZLecWUcZSN2swKFCrBYo27Bz2hfns9_G3IKKLBrIMIMot67QgtQssQ_BxxY&usqp=CAU",
        imageSize: "150x150",
        confirmButtonText: "Ok"
      },
      function(isConfirm) {
        if (isConfirm) {
          //location.reload();
          goodperson1.velocityX = -3.5;
    goodperson2.velocityX = -2;
    goodperson3.velocityX = -2.5;
    goodperson4.velocityX = -3;
    goodperson5.velocityX = -2.75;
    badperson1.velocityX = -5.5;
    badperson2.velocityX = -6.5;
    badperson3.velocityX = -4.5;
  

    covn1.visible = true;
    covn2.visible = true;
    covn3.visible = true;
    covn4.visible = true;
    covn5.visible = true;
    covn1.velocityX = -8;
    covn2.velocityX = -7;
    covn3.velocityX = -9;
    covn4.velocityX = -10;
    covn5.velocityX = -6;
        }
        
      }
    );
    
  
  // level1_target.visible = true;
   //type_level.visible = true;
    ul1.visible = false;
    ul1.x = displayWidth-1111000000;
    ll2.visible = false;
    ll3.visible = false;
    ll4.visible = false;
    ll5.visible = false;
    pwm.visible = false;
   covifighter.visible = false;
    back.visible = true;
    back.scale = 0.175;
    back.y = displayHeight-818;
    back.x = displayWidth-1480;
    mask.visible = false
    cov.visible = false;
   
    back2.y = displayHeight-20690;
    back2.visible = false;
   // goodperson1z();
  }
  ground1.display();
  ground2.display();
  ground3.display();
  
  bow.display();
  bow.life();
  if(mousePressedOver(back)){
    t1.visible = false;
    t2.visible = false;
    t3.visible = false;
    t4.visible = false; 
    t5.visible = false; 
    goodperson1.velocityX = 0;
    goodperson2.velocityX = 0;
    goodperson3.velocityX = 0;
    goodperson4.velocityX = 0;
    goodperson5.velocityX = 0;
    badperson1.velocityX = 0;
    badperson2.velocityX = 0;
    badperson3.velocityX = 0;
    covn1.velocityX = 0;
    covn2.velocityX = 0;
    covn3.velocityX = 0;
    covn4.velocityX = 0;
    covn5.velocityX = 0;

    covid_ball1.x = displayWidth+100;
    covid_ball2.x = displayWidth+100;
    covid_ball3.x =  displayWidth+100;
  
    covifighter.visible = true;
   
    level1_target.visible = false;
    type_level.visible = false;
  
  
    goodperson1.x = displayWidth+100;
    goodperson2.x = displayWidth+100;
    goodperson3.x = displayWidth+100;
    goodperson4.x = displayWidth+100;
    badperson1.x =displayWidth+100;
    badperson2.x =displayWidth+100;
    badperson3.x = displayWidth+100;
   covn1.x = displayWidth+100;
   covn2.x = displayWidth+100;
   covn3.x = displayWidth+100;
   covn4.x = displayWidth+100;
   covn5.x = displayWidth+100;

    ul1.visible = true;
    ul1.x = displayWidth-1320;
    ll2.visible = true;
    ll3.visible = true;
    ll4.visible = true;
    ll5.visible = true;
    pwm.visible = true;
    covifighter.addImage(covifighter_Image);
    covifighter.scale = 0.5;

    covifighter.y = displayHeight-750;
  
    covifighter.y = displayHeight-750;
    back2.y = displayHeight-690;
    back2.visible = true;
    back.visible = false;
    back.y = displayHeight-8180;
    back.x = displayWidth-14800;
    cov.visible = true;
  }
  
 /* if(mousePressedOver(htp)){
    htps.visible = true;
    mask.visible = false;
    htps.scale = 1.5;
    htps.y = htps.y-40;
    plays.destroy();
    htp.destroy();
    //goodperson.destroy();
    pwm.x = displayWidth-750;
    pwm.scale = 0.9;
  
    background(bg1);
  }*/
  for (var i = 0; i < arrows.length; i++) {
    showArrows(i, arrows);
    if(arrows[i].isTouching(badperson1)){
      badperson1.x = displayWidth+100;
      arrows[i].visible = false;
      arrows.splice(i ,1);
      kill_sound.play();
    }
    else if(arrows[i].isTouching(badperson2)){
      badperson2.x = displayWidth+100;
      arrows[i].visible = false;
      arrows.splice(i ,1);
      kill_sound.play();
    }
    else if(arrows[i].isTouching(badperson3)){
      badperson3.x = displayWidth+100;
      arrows[i].visible = false;
      arrows.splice(i ,1);
      kill_sound.play();
    }  else if(arrows[i].isTouching(covn1)){
      covn1.x = displayWidth+100;
      arrows[i].visible = false;
   arrows.splice(i ,1);
   kill_sound.play();
    }
    else if(arrows[i].isTouching(covn2)){
      covn2.x = displayWidth+100;
      arrows[i].visible = false;
      arrows.splice(i ,1);
      kill_sound.play();
    }
    else if(arrows[i].isTouching(covn3)){
      covn3.x = displayWidth+100;
      arrows[i].visible = false;
      arrows.splice(i ,1);
      kill_sound.play();
    }
    else if(arrows[i].isTouching(covn4)){
      covn4.x = displayWidth+100;
      arrows[i].visible = false;
      arrows.splice(i ,1);
      kill_sound.play();
    }
    else if(arrows[i].isTouching(covn5)){
      covn5.x = displayWidth+100;
      arrows[i].visible = false;
      arrows.splice(i ,1);
      kill_sound.play();
    }
  }
  if(goodperson1.x<displayWidth-1500 && goodperson2.x<displayWidth-1500 && goodperson3.x<displayWidth-1500 &&  goodperson4.x<displayWidth-1500 && goodperson5.x<displayWidth-1500 )
  gameState = END4;
}










if(gameState === END4){
  goodperson1.x = displayWidth+100;
goodperson2.x = displayWidth+100;
goodperson3.x = displayWidth+100;
goodperson4.x = displayWidth+100;
goodperson4.x = displayWidth+100;
badperson1.x = displayWidth+100;
badperson2.x = displayWidth+100;
badperson3.x = displayWidth+100;
covn1.x = displayWidth+100;
covn2.x = displayWidth+100;
covn3.x = displayWidth+100;
covn4.x = displayWidth+100;
covn5.x = displayWidth+100;

if(win_sound === false){
  winning_Sound.play();
  win_sound = true;
}

  swal(
    {
      title: `LEVEL4`,
      text: "YOU WON",
      imageUrl:"https://i.pinimg.com/736x/20/7c/9a/207c9a0c107ec57c0d97d5ae0bbbc851.jpg",
      imageSize: "150x150",
      confirmButtonText: "Ok"
    },
    function(isConfirm) {
      if (isConfirm) {

        t1.visible = false;
        t2.visible = false;
        t3.visible = false;
        t4.visible = false; 
        t5.visible = false; 

        gameState = PLAY5 ;
        //location.reload();
        goodperson1.velocityX = 0;
  goodperson2.velocityX = 0;
  goodperson3.velocityX = 0;
  goodperson4.velocityX = 0;
  goodperson5.velocityX = 0;
  badperson1.velocityX = 0;
  badperson2.velocityX = 0;
  badperson3.velocityX = 0;
  


 
  goodperson1.velocityX = 0;
goodperson2.velocityX = 0;
goodperson3.velocityX = 0;
goodperson4.velocityX = 0;
badperson1.velocityX = 0;
badperson2.velocityX = 0;
badperson3.velocityX = 0;
covn1.velocityX = 0;
covn2.velocityX = 0;
covn3.velocityX = 0;
covn4.velocityX = 0;
covn5.velocityX = 0;

covifighter.visible = true;

level1_target.visible = false;
type_level.visible = false;


goodperson1.x= displayWidth+100;
goodperson2.x = displayWidth+100;
goodperson3.x = displayWidth+100;
goodperson4.x = displayWidth+100;
badperson1.x = displayWidth+100;
badperson2.x = displayWidth+100;
badperson3.x = displayWidth+100;
covn1.x = displayWidth+100;
   covn2.x = displayWidth+100;
   covn3.x = displayWidth+100;
   covn4.x = displayWidth+100;
   covn5.x = displayWidth+100;


ul1.visible = true;
ul1.x = displayWidth-1320;
ul1.addImage(tickmark_Image);
ul1.scale = 0.4;
ll2.visible = true;
ll2.addImage(tickmark_Image);
ll2.scale = 0.4;
ll3.visible = true;
ll3.addImage(tickmark_Image);
ll3.scale = 0.4;
ll4.visible = true;
ll4.addImage(tickmark_Image);
ll4.scale = 0.4;
ll5.visible = true;
ll5.addImage(ul5_Image);
ll5.scale = 0.6;
pwm.visible = true;
covifighter.addImage(covifighter_Image);
covifighter.scale = 0.5;

covifighter.y = displayHeight-750;

back.visible = false;
cov.visible = true;
      }
      
    }
  );
}












if(gameState ===PLAY5){




















  if(goodperson1.isTouching(greenLine)   ){
    goodperson1.x = displayWidth-2000;
    gpr_Sound.play();
    t1.visible = true;
      }

      if(goodperson2.isTouching(greenLine)   ){
        //goodperson2.x = displayWidth;
        goodperson2.x = displayWidth-2000;
        gpr_Sound.play();
        t2.visible = true;
          }
    
          if(goodperson3.isTouching(greenLine)   ){
          //  goodperson3.x = displayWidth;
            goodperson3.x = displayWidth-2000;
            gpr_Sound.play();
            t3.visible = true;
            }
    
            if(goodperson4.isTouching(greenLine)   ){
              //  goodperson3.x = displayWidth;
                goodperson4.x = displayWidth-2000;
                gpr_Sound.play();
                t4.visible = true;
                }
    
                if(goodperson5.isTouching(greenLine)   ){
                  //  goodperson3.x = displayWidth;
                    goodperson5.x = displayWidth-2000;
                    gpr_Sound.play();
                    t5.visible = true;
                    }

                    if(goodperson6.isTouching(greenLine)   ){
                      //  goodperson3.x = displayWidth;
                        goodperson6.x = displayWidth-2000;
                        gpr_Sound.play();
                        t6.visible = true;
                        }
        
            
    
    
           



    
                    
     
                    













    
  
  if(covid_ball1.isTouching(greenLine) || covid_ball2.isTouching(greenLine) || covid_ball3.isTouching(greenLine) || covn1.isTouching(greenLine) || covn2.isTouching(greenLine)||covn3.isTouching(greenLine)||covn4.isTouching(greenLine)||covn5.isTouching(greenLine)   ){
    
    t1.visible = false;
    t2.visible = false;
    t3.visible = false;
    t4.visible = false;
    t5.visible = false;
    t6.visible = false;


    covid_ball1.x = displayWidth+100;
    goodperson1.velocityX = 0;
    goodperson2.velocityX = 0;
    goodperson3.velocityX = 0;
    goodperson4.velocityX = 0;
    goodperson5.velocityX = 0;
    goodperson6.velocityX = 0;
    badperson1.velocityX = 0;
    badperson2.velocityX = 0;
    badperson3.velocityX = 0;
    covid_ball1.velocityX = 0;
    covid_ball2.velocityX = 0;
    covid_ball3.velocityX = 0;
    covn1.velocityX = 0;
      covn2.velocityX = 0;
      covn3.velocityX = 0;
      covn4.velocityX = 0;
      covn5.velocityX = 0; 
      
      covn1.x = displayWidth+100;
      covn2.x = displayWidth+100;
      covn3.x = displayWidth+100;
      covn4.x = displayWidth+100;
      covn5.x = displayWidth+100;
      covid_ball1.x = displayWidth+100;
      covid_ball2.x = displayWidth+100;
      covid_ball3.x = displayWidth+100;

     swal(
       {
         title: `LEVEL5`,
         text: "You lost Try again",
         imageUrl:
           "https://static.vecteezy.com/system/resources/previews/000/369/161/non_2x/vector-little-boy-crying-with-tears.jpg",
         imageSize: "150x150",
         confirmButtonText: "Ok"
       },
       function(isConfirm) {
         if (isConfirm) {
           
           //location.reload();
           goodperson1.velocityX = 0;
     goodperson2.velocityX = 0;
     goodperson3.velocityX = 0;
     goodperson4.velocityX = 0;
     goodperson5.velocityX = 0;
     goodperson6.velocityX = 0;

     badperson1.velocityX = 0;
     badperson2.velocityX = 0;
     badperson3.velocityX = 0;
     covid_ball1.velocityX = 0;
     covid_ball2.velocityX = 0;
     covid_ball3.velocityX = 0; 
     covn1.velocityX = 0;
      covn2.velocityX = 0;
      covn3.velocityX = 0;
      covn4.velocityX = 0;
      covn5.velocityX = 0;  
 
      covn1.velocityX = 0;
      covn2.velocityX = 0;
      covn3.velocityX = 0;
      covn4.velocityX = 0;
      covn5.velocityX = 0;  
 covid_ball1.velocityX = 0;
 covid_ball2.velocityX = 0;
 covid_ball3.velocityX = 0; 
 goodperson1.velocityX = 0;
 goodperson2.velocityX = 0;
 goodperson3.velocityX = 0;
 goodperson4.velocityX = 0;
 goodperson5.velocityX = 0;
 goodperson6.velocityX = 0;

 badperson1.velocityX = 0;
 badperson2.velocityX = 0;
 badperson3.velocityX = 0;
 covifighter.visible = true;
 
 level1_target.visible = false;
 type_level.visible = false;
 
 
 goodperson1.x= displayWidth+100;
 goodperson2.x = displayWidth+100;
 goodperson3.x = displayWidth+100;
 goodperson4.x = displayWidth+100;
 goodperson5.x = displayWidth+100;
 goodperson6.x =displayWidth+100;
 badperson1.x =displayWidth+100;
 badperson2.x =displayWidth+100;
 badperson3.x = displayWidth+100;
 covid_ball1.x = displayWidth+100;
 covid_ball2.x = displayWidth+100;
 covid_ball3.x = displayWidth+100;
 covn1.x = displayWidth+100;
      covn2.x = displayWidth+100;
      covn3.x = displayWidth+100;
      covn4.x = displayWidth+100;
      covn5.x = displayWidth+100;
 
 ul1.visible = true;
 ul1.x = displayWidth-1320;
 ll2.visible = true;
 ll3.visible = true;
 ll4.visible = true;
 ll5.visible = true;
 pwm.visible = true;
 covifighter.addImage(covifighter_Image);
 covifighter.scale = 0.5;

 covifighter.y = displayHeight-750;
 
 
 back2.y = displayHeight-690;
 back2.visible = true;
 back.visible = false;
 back.y = displayHeight-8180;
 back.x = displayWidth-14800;
 cov.visible = true;
         }
         
       }
     );
     bpr_Sound.play(); 
 
       }
     
    














    
    
    






  















       if(mousePressedOver(plays)){

  
        plays.x = displayWidth+14000;
        htp.x = displayWidth+14000;
       
       
        pwm.x = displayWidth-750;
        pwm.scale = 0.9;
        mask.visible = false;
        ul1.visible = true;
        ll2.visible = true;
        ll3.visible = true;
        ll4.visible = true;
        ll5.visible = true;
        back2.visible = true;
       
      }
      
      if(mousePressedOver(back2)){
      
        plays.x = displayWidth-150;
        htp.x = displayWidth-150;
       
       
        pwm.x = displayWidth-600;
        pwm.scale = 1;
      
        mask.visible = true;
        ul1.visible = false;
        ll2.visible = false;
        ll3.visible = false;
        ll4.visible = false;
        ll5.visible = false;
        back2.visible = false;
      }
      
  
  
  if(mousePressedOver(ll5)){
    back2.y = displayHeight-20690;
    back2.visible = false;
    swal(
      {
       
        title: `LEVEL5`,
        text: "Kill Persons without mask and other types of covid balls.Save six persons with mask!!",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7-Yp6ziZZLecWUcZSN2swKFCrBYo27Bz2hfns9_G3IKKLBrIMIMot67QgtQssQ_BxxY&usqp=CAU",
        imageSize: "150x150",
        confirmButtonText: "Ok"
      },
      function(isConfirm) {
        if (isConfirm) {
          //location.reload();
          goodperson1.velocityX = -2;
    goodperson2.velocityX = -3;
    goodperson3.velocityX = -3.5;
    goodperson4.velocityX = -3.75;
    goodperson5.velocityX = -3.25;
    goodperson6.velocityX = -6;
   /* badperson1.velocityX = -5.5;
    badperson2.velocityX = -6.5;
    badperson3.velocityX = -4.5;
  */
    covid_ball1.velocityX = -9;
    covid_ball2.velocityX = -8;
    covid_ball3.velocityX = -7;   
    covn1.visible = true;
    covn2.visible = true;
    covn3.visible = true;
    covn4.visible = true;
    covn5.visible = true;
    covn1.velocityX = -8;
    covn2.velocityX = -7;
    covn3.velocityX = -9;
    covn4.velocityX = -10;
    covn5.velocityX = -6;
    back2.y = displayHeight-20690;
    back2.visible = false;
        }
        
      }
    );
    
  
  // level1_target.visible = true;
   //type_level.visible = true;
    ul1.visible = false;
    ul1.x = displayWidth-1111000000;
    ll2.visible = false;
    ll3.visible = false;
    ll4.visible = false;
    ll5.visible = false;
    pwm.visible = false;
   covifighter.visible = false;
    back.visible = true;
    back.scale = 0.175;
    back.y = displayHeight-818;
    back.x = displayWidth-1480;
    mask.visible = false
    cov.visible = false;
   
   
   // goodperson1z();
  }
  ground1.display();
  ground2.display();
  ground3.display();
  
  bow.display();
  bow.life();
  if(mousePressedOver(back)){

    t1.visible = false;
    t2.visible = false;
    t3.visible = false;
    t4.visible = false;
    t5.visible = false;
    t6.visible = false;


    
    goodperson1.velocityX = 0;
    goodperson2.velocityX = 0;
    goodperson3.velocityX = 0;
    goodperson4.velocityX = 0;
    goodperson5.velocityX = 0;
    goodperson6.velocityX = 0;
    badperson1.velocityX = 0;
    badperson2.velocityX = 0;
    badperson3.velocityX = 0;
    covn1.velocityX = 0;
    covn2.velocityX = 0;
    covn3.velocityX = 0;
    covn4.velocityX = 0;
    covn5.velocityX = 0;
    covid_ball1.velocityX = 0;
    covid_ball2.velocityX = 0;
    covid_ball3.velocityX = 0;   
    covid_ball1.x = displayWidth+200;
    covid_ball2.x =  displayWidth+200;
    covid_ball3.x =  displayWidth+200; 
  
    covifighter.visible = true;
   
    level1_target.visible = false;
    type_level.visible = false;
  
  
    goodperson1.x=  displayWidth+100;
    goodperson2.x =displayWidth+100;
    goodperson3.x = displayWidth+100;
    goodperson4.x = displayWidth+100;
    goodperson5.x =displayWidth+100;
    goodperson6.x = displayWidth+100;
    badperson1.x =displayWidth+100;
    badperson2.x =displayWidth+100;
    badperson3.x = displayWidth+100;
   covn1.x = displayWidth+100;
   covn2.x = displayWidth+100;
   covn3.x = displayWidth+100;
   covn4.x = displayWidth+100;
   covn5.x = displayWidth+100;

    ul1.visible = true;
    ul1.x = displayWidth-1320;
    ll2.visible = true;
    ll3.visible = true;
    ll4.visible = true;
    ll5.visible = true;
    pwm.visible = true;
    covifighter.addImage(covifighter_Image);
    covifighter.scale = 0.5;

    covifighter.y = displayHeight-750;
  
    back2.y = displayHeight-690;
    back2.visible = true;
    back.visible = false;
    back.y = displayHeight-8180;
    back.x = displayWidth-14800;
    cov.visible = true;
  }
  
 /* if(mousePressedOver(htp)){
    htps.visible = true;
    mask.visible = false;
    htps.scale = 1.5;
    htps.y = htps.y-40;
    plays.destroy();
    htp.destroy();
    //goodperson.destroy();
    pwm.x = displayWidth-750;
    pwm.scale = 0.9;
  
    background(bg1);
  }*/
  for (var i = 0; i < arrows.length; i++) {
    showArrows(i, arrows);
    if(arrows[i].isTouching(covid_ball1)){
      covid_ball1.x = displayWidth+100;
      arrows[i].visible = false;
      arrows.splice(i ,1);
      kill_sound.play();
    }
    else if(arrows[i].isTouching(covid_ball2)){
      covid_ball2.x = displayWidth+100;
      arrows[i].visible = false;
      arrows.splice(i ,1);
      kill_sound.play();
    }
    else if(arrows[i].isTouching(covid_ball3)){
      covid_ball3.x = displayWidth+100;
      arrows[i].visible = false;
      arrows.splice(i ,1);
      kill_sound.play();
    }  else if(arrows[i].isTouching(covn1)){
      covn1.x = displayWidth+100;
      arrows[i].visible = false;
   arrows.splice(i ,1);
   kill_sound.play();
    }
    else if(arrows[i].isTouching(covn2)){
      covn2.x = displayWidth+100;
      arrows[i].visible = false;
      arrows.splice(i ,1);
      kill_sound.play();
    }
    else if(arrows[i].isTouching(covn3)){
      covn3.x = displayWidth+100;
      arrows[i].visible = false;
      arrows.splice(i ,1);
      kill_sound.play();
    }
    else if(arrows[i].isTouching(covn4)){
      covn4.x = displayWidth+100;
      arrows[i].visible = false;
      arrows.splice(i ,1);
      kill_sound.play();
    }
    else if(arrows[i].isTouching(covn5)){
      covn5.x = displayWidth+80;
      arrows[i].visible = false;
      arrows.splice(i ,1);
      kill_sound.play();
    }
  }



  if(goodperson1.x<displayWidth-1500 && goodperson2.x<displayWidth-1500 && goodperson3.x<displayWidth-1500 &&  goodperson4.x<displayWidth-1500 && goodperson5.x<displayWidth-1500 && goodperson6.x<displayWidth-1500 )
  gameState = END5;
  

/*
if(goodperson1.isTouching(greenLine)){
  winning_Sound.play();
}
*/

}


if(gameState === END5){
  goodperson1.x= displayWidth+100;
  goodperson2.x = displayWidth+100;
  goodperson3.x = displayWidth+100;
  goodperson4.x =displayWidth+100;
  goodperson4.x = displayWidth+100;
  badperson1.x =displayWidth+100;
  badperson2.x =displayWidth+100;
  badperson3.x = displayWidth+100;
  covn1.x = displayWidth+100;
  covn2.x = displayWidth+100;
  covn3.x = displayWidth+100;
  covn4.x = displayWidth+100;
  covn5.x = displayWidth+100;
  covid_ball1.x = displayWidth+100;
  covid_ball2.x = displayWidth+100;
  covid_ball3.x = displayWidth+100;
  covid_ball1.velocityX = 0;
    covid_ball2.velocityX = 0;
    covid_ball3.velocityX = 0;
    if(win_sound === false){
      winning_Sound.play();
      win_sound = true;
    }
    swal(
      {
        title: `LEVEL5`,
        text: "YOU WON",
        imageUrl:"https://i.pinimg.com/736x/20/7c/9a/207c9a0c107ec57c0d97d5ae0bbbc851.jpg",
        imageSize: "150x150",
        confirmButtonText: "Ok"
      },
      function(isConfirm) {
        if (isConfirm) {
          t1.visible = false;
          t2.visible = false;
          t3.visible = false;
          t4.visible = false;
          t5.visible = false;
          t6.visible = false;
      
      
          gameState = PLAY5;
          //location.reload();
          goodperson1.velocityX = 0;
    goodperson2.velocityX = 0;
    goodperson3.velocityX = 0;
    goodperson4.velocityX = 0;
    goodperson5.velocityX = 0;
    badperson1.velocityX = 0;
    badperson2.velocityX = 0;
    badperson3.velocityX = 0;
    
  
  
    covid_ball1.velocityX = 0;
    covid_ball2.velocityX = 0;
    covid_ball3.velocityX = 0;
    goodperson1.velocityX = 0;
  goodperson2.velocityX = 0;
  goodperson3.velocityX = 0;
  goodperson4.velocityX = 0;
  badperson1.velocityX = 0;
  badperson2.velocityX = 0;
  badperson3.velocityX = 0;
  covn1.velocityX = 0;
  covn2.velocityX = 0;
  covn3.velocityX = 0;
  covn4.velocityX = 0;
  covn5.velocityX = 0;
  
  covifighter.visible = true;
  
  level1_target.visible = false;
  type_level.visible = false;
  
  
  goodperson1.x= displayWidth+100;
  goodperson2.x = displayWidth+100;
  goodperson3.x = displayWidth+100;
  goodperson4.x = displayWidth+100;
  badperson1.x = displayWidth+100;
  badperson2.x = displayWidth+100;
  badperson3.x = displayWidth+100;
  covn1.x = displayWidth+100;
     covn2.x = displayWidth+100;
     covn3.x = displayWidth+100;
     covn4.x = displayWidth+100;
     covn5.x = displayWidth+100;
     covid_ball1.x = displayWidth+100;
covid_ball2.x = displayWidth+100;
covid_ball3.x = displayWidth+100;

  
  
  ul1.visible = true;
  ul1.x = displayWidth-1320;
  ul1.addImage(tickmark_Image);
  ul1.scale = 0.4;
  ll2.visible = true;
  ll2.addImage(tickmark_Image);
  ll2.scale = 0.4;
  ll3.visible = true;
  ll3.addImage(tickmark_Image);
  ll3.scale = 0.4;
  ll4.visible = true;
  ll4.addImage(tickmark_Image);
  ll4.scale = 0.4;
  ll5.visible = true;
  ll5.addImage(tickmark_Image);
  ll5.scale = 0.4;
  pwm.visible = true;
  covifighter.addImage(covifighter_Image);
  covifighter.scale = 0.5;

  covifighter.y = displayHeight-750;
  
  back.visible = false;
  cov.visible = true;
        }
        
      }
    );
}











  drawSprites();


}

function keyPressed(){
 
    if(keyCode === 32){
 
    var arrow=createSprite(bow.body.position.x,bow.body.position.y,150,40);
    arrow.addImage(arrow_Image);

    arrow.scale=0.5;
      arrow.rotation=bow.body.angle;
   
    arrows.push(arrow);
    bow_Sound.play();
}
}
function keyReleased () {
var angle=bow.body.angle;
  if(keyCode === 32){
   
    if (arrows.length) {
      if(angle===0){
        arrows[arrows.length - 1].velocityX=15;
       
      }
      else if(angle>0 && angle<=44){
        arrows[arrows.length - 1].velocityX=17;
        arrows[arrows.length - 1].velocityY=12;
      }
      else if(angle<0 && angle>=-44){
        arrows[arrows.length - 1].velocityX=17;
        arrows[arrows.length - 1].velocityY=-9;
      }
     
      
    }
   
  }

}
//Display arrow and Tranjectory
function showArrows(index, Arrows) {
  Arrows[index].display();
}






function goodpersonx(){
  if(frameCount % 160 ===0){
    goodperson1 = createSprite(displayWidth ,displayHeight-662,30,70);
  goodperson1.addImage(goodperson_Image);
  goodperson1.scale = 0.3;
  goodperson1.velocityX = -8;
  //goodperson1.visible = false;
//goodperson1.lifeTime = displayWidth-200;
  goodperson1Group.add(goodperson1);
  }
 
}


function goodpersony(){
  if(frameCount % 70 ===0){
  
  }

}


function goodpersonz(){
  if(frameCount % 80 ===0){
  
  }

}