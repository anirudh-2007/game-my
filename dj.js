
if(gameState = PLAY3){











    if(goodperson1.isTouching(greenLine)   ){
      goodperson1.x = displayWidth-2000;
      
      
        }
      
        if(goodperson2.isTouching(greenLine)   ){
          //goodperson2.x = displayWidth;
          goodperson2.x = displayWidth-2000;
      
            }
      
            if(goodperson3.isTouching(greenLine)   ){
            //  goodperson3.x = displayWidth;
              goodperson3.x = displayWidth-2000;
              
              }
      
              if(goodperson4.isTouching(greenLine)   ){
                //  goodperson3.x = displayWidth;
                  goodperson4.x = displayWidth-2000;
                  
                  }
      
          
              
      
      
                if(badperson1.isTouching(greenLine)   ){
                  goodperson1.velocityX = 0;
                  goodperson2.velocityX = 0;
                  goodperson3.velocityX = 0;
                  goodperson4.velocityX = 0;
                  badperson1.velocityX = 0;
                  badperson2.velocityX = 0;
                  badperson3.velocityX = 0;
                  badperson1.x = displayWidth+29;
      
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
      
      
        goodperson1.x=  displayWidth+29;
        goodperson2.x = displayWidth;
        goodperson3.x = displayWidth;
        goodperson4.x = displayWidth+100;
        badperson1.x =displayWidth+29;
        badperson2.x =displayWidth;;
        badperson3.x = displayWidth;;
      
        ul1.visible = true;
        ul1.x = displayWidth-1320;
        ll2.visible = true;
        ll3.visible = true;
        ll4.visible = true;
        ll5.visible = true;
        pwm.visible = true;
        covifighter.addImage(covifighter_Image);
        covifighter.scale = 2;
        covifighter.y = displayHeight-750;
      
        back.visible = false;
        cov.visible = true;
                      }
                      
                    }
                  );
                  
      
                    }
                  
                    if(badperson2.isTouching(greenLine)   ){
                      badperson2.x = displayWidth;
                      goodperson1.velocityX = 0;
                      goodperson2.velocityX = 0;
                      goodperson3.velocityX = 0;
                      goodperson4.velocityX = 0;
                      badperson1.velocityX = 0;
                      badperson2.velocityX = 0;
                      badperson3.velocityX = 0;
      
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
      
      
        goodperson1.x=  displayWidth+29;
        goodperson2.x = displayWidth;
        goodperson3.x = displayWidth;
        goodperson4.x = displayWidth+100;
        badperson1.x =displayWidth+29;
        badperson2.x =displayWidth;;
        badperson3.x = displayWidth;;
      
        ul1.visible = true;
        ul1.x = displayWidth-1320;
        ll2.visible = true;
        ll3.visible = true;
        ll4.visible = true;
        ll5.visible = true;
        pwm.visible = true;
        covifighter.addImage(covifighter_Image);
        covifighter.scale = 2;
        covifighter.y = displayHeight-750;
      
        back.visible = false;
        cov.visible = true;
                          }
                          
                        }
                      );
                      
                        }
                  
                        if(badperson3.isTouching(greenLine)   ){
                          badperson3.x = displayWidth;
                          goodperson1.velocityX = 0;
                          goodperson2.velocityX = 0;
                          goodperson3.velocityX = 0;
                          goodperson4.velocityX = 0;
                          badperson1.velocityX = 0;
                          badperson2.velocityX = 0;
                          badperson3.velocityX = 0;
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
      
      
        goodperson1.x=  displayWidth+29;
        goodperson2.x = displayWidth;
        goodperson3.x = displayWidth;
        goodperson4.x = displayWidth+100;
        badperson1.x =displayWidth+29;
        badperson2.x =displayWidth;;
        badperson3.x = displayWidth;;
      
        ul1.visible = true;
        ul1.x = displayWidth-1320;
        ll2.visible = true;
        ll3.visible = true;
        ll4.visible = true;
        ll5.visible = true;
        pwm.visible = true;
        covifighter.addImage(covifighter_Image);
        covifighter.scale = 2;
        covifighter.y = displayHeight-750;
      
        back.visible = false;
        cov.visible = true;
                              }
                              
                            }
                          );
                          
                            }
      
      
      //||goodperson2.isTouching(greenLine) ||goodperson2.isTouching(greenLine)
      
      
      
      
      
      
      
      if(mousePressedOver(plays)){
      
        
        plays.destroy();
        htp.destroy();
       
       // goodperson.destroy();
        pwm.x = displayWidth-750;
        pwm.scale = 0.9;
        mask.visible = false;
        ul1.visible = true;
        ll2.visible = true;
        ll3.visible = true;
        ll4.visible = true;
        ll5.visible = true;
        //ground1.display();
      }
      
      
      //ground1.display();
      
      
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
       
       
       // goodperson1z();
      }
      ground1.display();
      ground2.display();
      ground3.display();
      
      bow.display();
      bow.life();
      if(mousePressedOver(back)){
        
        goodperson1.velocityX = 0;
        goodperson2.velocityX = 0;
        goodperson3.velocityX = 0;
        badperson1.velocityX = 0;
        badperson2.velocityX = 0;
        badperson3.velocityX = 0;
        covifighter.visible = true;
       
        level1_target.visible = false;
        type_level.visible = false;
      
      
        goodperson1.x=  displayWidth+29;
        goodperson2.x = displayWidth;
        goodperson3.x = displayWidth;
        badperson1.x =displayWidth+29;
        badperson2.x =displayWidth;;
        badperson3.x = displayWidth;;
      
        ul1.visible = true;
        ul1.x = displayWidth-1320;
        ll2.visible = true;
        ll3.visible = true;
        ll4.visible = true;
        ll5.visible = true;
        pwm.visible = true;
        covifighter.addImage(covifighter_Image);
        covifighter.scale = 2;
        covifighter.y = displayHeight-750;
      
        back.visible = false;
        cov.visible = true;
      }
      
    /*  if(mousePressedOver(htp)){
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
          badperson1.x = displayWidth+29;
         // badperson1.x =displayWidth-10000000000000000000000000000000000000000000000000000000000000;
        }
        else if(arrows[i].isTouching(badperson2)){
          badperson2.x = displayWidth+29;
         // badperson2.x =displayWidth-10000000000000000000000000000000000000000000000000000000000000;
        }
        else if(arrows[i].isTouching(badperson3)){
          badperson3.x = displayWidth+29;
         // badperson3.x =displayWidth-10000000000000000000000000000000000000000000000000000000000000;
        }
      }
      /*
      if(Life = 0 ){
        swal(
          {
            title: `LEVEL1`,
            text: "YOU WON",
            imageUrl:
              "https://i.pinimg.com/originals/51/0d/6c/510d6c25e8c820ab1391a8f656e19298.jpg",
            imageSize: "150x150",
            confirmButtonText: "Ok"
          },
          function(isConfirm) {
            if (isConfirm) {
              //location.reload();
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
      
      
      goodperson1.x=  displayWidth+29;
      goodperson2.x = displayWidth;
      goodperson3.x = displayWidth;
      badperson1.x =displayWidth+29;
      badperson2.x =displayWidth;;
      badperson3.x = displayWidth;;
      
      ul1.visible = true;
      ul1.x = displayWidth-1320;
      ll2.visible = true;
      ll3.visible = true;
      ll4.visible = true;
      ll5.visible = true;
      pwm.visible = true;
      covifighter.addImage(covifighter_Image);
      covifighter.scale = 2;
      covifighter.y = displayHeight-750;
      
      back.visible = false;
      cov.visible = true;
            }
            
          }
        );
      }*/
      if(goodperson1.x<displayWidth-1500 && goodperson2.x<displayWidth-1500 && goodperson3.x<displayWidth-1500)
      gameState = END1;
      
        
  
  
  
  
  
  
  
  
  
  
  
  
      if(goodperson1.isTouching(greenLine)   ){
        goodperson1.x = displayWidth-2000;
        
        
          }
        
          if(goodperson2.isTouching(greenLine)   ){
            //goodperson2.x = displayWidth;
            goodperson2.x = displayWidth-2000;
        
              }
        
              if(goodperson3.isTouching(greenLine)   ){
              //  goodperson3.x = displayWidth;
                goodperson3.x = displayWidth-2000;
                
                }
        
                if(goodperson4.isTouching(greenLine)   ){
                  //  goodperson3.x = displayWidth;
                    goodperson4.x = displayWidth-2000;
                    
                    }
        
            
                
        
        
                  if(badperson1.isTouching(greenLine)   ){
                    badperson1.x = displayWidth+29;
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
        
        
          goodperson1.x=  displayWidth+29;
          goodperson2.x = displayWidth;
          goodperson3.x = displayWidth;
          goodperson4.x = displayWidth;
          badperson1.x =displayWidth+29;
          badperson2.x =displayWidth;;
          badperson3.x = displayWidth;
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
          covifighter.scale = 2;
          covifighter.y = displayHeight-750;
        
          back.visible = false;
          cov.visible = true;
                        }
                        
                      }
                    );
                    
        
                      }
                    
                      if(badperson2.isTouching(greenLine)   ){
                        badperson2.x = displayWidth;
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
                              //location.reload();
                 
                              goodperson1.velocityX = 0;
                        goodperson2.velocityX = 0;
                        goodperson3.velocityX = 0;
                        goodperson4.velocityX = 0;
                        badperson1.velocityX = 0;
                        badperson2.velocityX = 0;
                        badperson3.velocityX = 0;
                        goodperson1.velocityX = 0;
                        covid_ball1.velocityX = 0;
                        covid_ball2.velocityX = 0;
                        covid_ball3.velocityX = 0; 
  
  
  
  
          covid_ball1.velocityX = 0;
          covid_ball2.velocityX = 0;
          covid_ball3.velocityX = 0; 
          goodperson2.velocityX = 0;
          goodperson3.velocityX = 0;
          goodperson4.velocityX = 0;
          badperson1.velocityX = 0;
          badperson2.velocityX = 0;
          badperson3.velocityX = 0;
          covifighter.visible = true;
        
          level1_target.visible = false;
          type_level.visible = false;
        
        
          goodperson1.x=  displayWidth+29;
          goodperson2.x = displayWidth;
          goodperson3.x = displayWidth;
          goodperson4.x = displayWidth;
          badperson1.x =displayWidth+29;
          badperson2.x =displayWidth;
          badperson3.x = displayWidth;
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
          covifighter.scale = 2;
          covifighter.y = displayHeight-750;
        
          back.visible = false;
          cov.visible = true;
                            }
                            
                          }
                        );
                        
                          }
                    
                          if(badperson3.isTouching(greenLine)   ){
                            badperson3.x = displayWidth;
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
                                  //location.reload();
                              
                                  goodperson1.velocityX = 0;
                            goodperson2.velocityX = 0;
                            goodperson3.velocityX = 0;
                            goodperson4.velocityX = 0;
        
                            badperson1.velocityX = 0;
                            badperson2.velocityX = 0;
                            badperson3.velocityX = 0;
                            goodperson1.velocityX = 0;
                            covid_ball1.velocityX = 0;
                            covid_ball2.velocityX = 0;
                            covid_ball3.velocityX = 0; 
  
          covid_ball1.velocityX = 0;
          covid_ball2.velocityX = 0;
          covid_ball3.velocityX = 0;                   
          goodperson2.velocityX = 0;
          goodperson3.velocityX = 0;
          goodperson4.velocityX = 0;
          badperson1.velocityX = 0;
          badperson2.velocityX = 0;
          badperson3.velocityX = 0;
          covifighter.visible = true;
        
          level1_target.visible = false;
          type_level.visible = false;
        
        
          goodperson1.x=  displayWidth+29;
          goodperson2.x = displayWidth;
          goodperson3.x = displayWidth;
          goodperson4.x = displayWidth+35;
          badperson1.x =displayWidth+29;
          badperson2.x =displayWidth;
          badperson3.x = displayWidth;
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
          covifighter.scale = 2;
          covifighter.y = displayHeight-750;
        
          back.visible = false;
          cov.visible = true;
                                }
                                
                              }
                            );
                            
                              }
        
        
        //||goodperson2.isTouching(greenLine) ||goodperson2.isTouching(greenLine)
        
        
        
        
        
  
  
  
  
  
  
        
        if(covid_ball1.isTouching(greenLine)   ){
         covid_ball1.x = displayWidth+100;
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
  
  
  goodperson1.x=  displayWidth+29;
  goodperson2.x = displayWidth;
  goodperson3.x = displayWidth;
  goodperson4.x = displayWidth;
  badperson1.x =displayWidth+29;
  badperson2.x =displayWidth;;
  badperson3.x = displayWidth;
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
  covifighter.scale = 2;
  covifighter.y = displayHeight-750;
  
  back.visible = false;
  cov.visible = true;
              }
              
            }
          );
          
  
            }
          
            if(covid_ball2.isTouching(greenLine)   ){
              covid_ball2.x = displayWidth+100;
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
                    //location.reload();
       
                    goodperson1.velocityX = 0;
              goodperson2.velocityX = 0;
              goodperson3.velocityX = 0;
              goodperson4.velocityX = 0;
              badperson1.velocityX = 0;
              badperson2.velocityX = 0;
              badperson3.velocityX = 0;
              goodperson1.velocityX = 0;
              covid_ball1.velocityX = 0;
              covid_ball2.velocityX = 0;
              covid_ball3.velocityX = 0; 
  
  
  
  
  covid_ball1.velocityX = 0;
  covid_ball2.velocityX = 0;
  covid_ball3.velocityX = 0; 
  goodperson2.velocityX = 0;
  goodperson3.velocityX = 0;
  goodperson4.velocityX = 0;
  badperson1.velocityX = 0;
  badperson2.velocityX = 0;
  badperson3.velocityX = 0;
  covifighter.visible = true;
  
  level1_target.visible = false;
  type_level.visible = false;
  
  
  goodperson1.x=  displayWidth+29;
  goodperson2.x = displayWidth;
  goodperson3.x = displayWidth;
  goodperson4.x = displayWidth;
  badperson1.x =displayWidth+29;
  badperson2.x =displayWidth;
  badperson3.x = displayWidth;
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
  covifighter.scale = 2;
  covifighter.y = displayHeight-750;
  
  back.visible = false;
  cov.visible = true;
                  }
                  
                }
              );
              
                }
          
                if(covid_ball3.isTouching(greenLine)   ){
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
                      title: `LEVEL2`,
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
                  covid_ball1.velocityX = 0;
                  covid_ball2.velocityX = 0;
                  covid_ball3.velocityX = 0; 
  
  covid_ball1.velocityX = 0;
  covid_ball2.velocityX = 0;
  covid_ball3.velocityX = 0;                   
  goodperson2.velocityX = 0;
  goodperson3.velocityX = 0;
  goodperson4.velocityX = 0;
  badperson1.velocityX = 0;
  badperson2.velocityX = 0;
  badperson3.velocityX = 0;
  covifighter.visible = true;
  
  level1_target.visible = false;
  type_level.visible = false;
  
  
  goodperson1.x=  displayWidth+29;
  goodperson2.x = displayWidth;
  goodperson3.x = displayWidth;
  goodperson4.x = displayWidth+35;
  badperson1.x =displayWidth+29;
  badperson2.x =displayWidth;
  badperson3.x = displayWidth;
  covid_ball1.x = displayWidth+100;
  covid_ball2.x = displayWidth+100;
  covid_ball2.x = displayWidth+100;
  
  ul1.visible = true;
  ul1.x = displayWidth-1320;
  ll2.visible = true;
  ll3.visible = true;
  ll4.visible = true;
  ll5.visible = true;
  pwm.visible = true;
  covifighter.addImage(covifighter_Image);
  covifighter.scale = 2;
  covifighter.y = displayHeight-750;
  
  back.visible = false;
  cov.visible = true;
                      }
                      
                    }
                  );
                  
                    }
  
  
  //||goodperson2.isTouching(greenLine) ||goodperson2.isTouching(greenLine)
  
  
  
  
  
  
        
        
        if(mousePressedOver(plays)){
        
          
          plays.destroy();
          htp.destroy();
         
         // goodperson.destroy();
          pwm.x = displayWidth-750;
          pwm.scale = 0.9;
          mask.visible = false;
          ul1.visible = true;
          ll2.visible = true;
          ll3.visible = true;
          ll4.visible = true;
          ll5.visible = true;
          //ground1.display();
        }
        
        
        //ground1.display();
        
        
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
         // covid_ball2.velocityX = -6;
          //covid_ball3.velocityX = -9; 
        
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
        
        
          goodperson1.x=  displayWidth+29;
          goodperson2.x = displayWidth;
          goodperson3.x = displayWidth;
          goodperson4.x = displayWidth;
          badperson1.x =displayWidth+29;
          badperson2.x =displayWidth;;
          badperson3.x = displayWidth;
          covid_ball1.x = displayWidth-100;  
          covid_ball2.x = displayWidth-90;
          covid_ball3.x = displayWidth-80;
          ul1.visible = true;
          ul1.x = displayWidth-1320;
          ll2.visible = true;
          ll3.visible = true;
          ll4.visible = true;
          ll5.visible = true;
          pwm.visible = true;
          covifighter.addImage(covifighter_Image);
          covifighter.scale = 2;
          covifighter.y = displayHeight-750;
        
          back.visible = false;
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
            badperson1.x = displayWidth+29;
           // badperson1.x =displayWidth-10000000000000000000000000000000000000000000000000000000000000;
          }
          else if(arrows[i].isTouching(badperson2)){
            badperson2.x = displayWidth+29;
           // badperson2.x =displayWidth-10000000000000000000000000000000000000000000000000000000000000;
          }
          else if(arrows[i].isTouching(badperson3)){
            badperson3.x = displayWidth+29;
           // badperson3.x =displayWidth-10000000000000000000000000000000000000000000000000000000000000;
          }  else if(arrows[i].isTouching(covid_ball1)){
            covid_ball1.x = displayWidth+100;
            covid_ball1.velocityX = 0;
            covid_ball2.velocityX = -8;
           // badperson2.x =displayWidth-10000000000000000000000000000000000000000000000000000000000000;
          }
          else if(arrows[i].isTouching(covid_ball2)){
            covid_ball2.x = displayWidth+90;
            covid_ball2.velocityX = 0;
            covid_ball3.velocityX = -8;
           // badperson3.x =displayWidth-10000000000000000000000000000000000000000000000000000000000000;
          }
          else if(arrows[i].isTouching(covid_ball3)){
            covid_ball3.x = displayWidth+80;
            covid_ball3.velocityX = 0;
            covid_ball1.velocityX = -9;
           // badperson3.x =displayWidth-10000000000000000000000000000000000000000000000000000000000000;
          }
        }
   
        if(goodperson1.x<displayWidth-1500 && goodperson2.x<displayWidth-1500 && goodperson3.x<displayWidth-1500 &&  goodperson4.x<displayWidth-1500)
        gameState = END2;
        
        
  
  
  
  
  
  
        if(goodperson1.isTouching(greenLine)   ){
          goodperson1.x = displayWidth-2000;
          
          
            }
          
            if(goodperson2.isTouching(greenLine)   ){
              //goodperson2.x = displayWidth;
              goodperson2.x = displayWidth-2000;
          
                }
          
                if(goodperson3.isTouching(greenLine)   ){
                //  goodperson3.x = displayWidth;
                  goodperson3.x = displayWidth-2000;
                  
                  }
          
                  if(goodperson4.isTouching(greenLine)   ){
                    //  goodperson3.x = displayWidth;
                      goodperson4.x = displayWidth-2000;
                      
                      }
          
              
                  
          
          
                    if(badperson1.isTouching(greenLine)   ){
                      badperson1.x = displayWidth+29;
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
          
          
            goodperson1.x=  displayWidth+29;
            goodperson2.x = displayWidth;
            goodperson3.x = displayWidth;
            goodperson4.x = displayWidth;
            badperson1.x =displayWidth+29;
            badperson2.x =displayWidth;;
            badperson3.x = displayWidth;
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
            covifighter.scale = 2;
            covifighter.y = displayHeight-750;
          
            back.visible = false;
            cov.visible = true;
                          }
                          
                        }
                      );
                      
          
                        }
                      
                        if(badperson2.isTouching(greenLine)   ){
                          badperson2.x = displayWidth;
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
                                //location.reload();
                   
                                goodperson1.velocityX = 0;
                          goodperson2.velocityX = 0;
                          goodperson3.velocityX = 0;
                          goodperson4.velocityX = 0;
                          badperson1.velocityX = 0;
                          badperson2.velocityX = 0;
                          badperson3.velocityX = 0;
                          goodperson1.velocityX = 0;
                          covid_ball1.velocityX = 0;
                          covid_ball2.velocityX = 0;
                          covid_ball3.velocityX = 0; 
    
    
    
    
            covid_ball1.velocityX = 0;
            covid_ball2.velocityX = 0;
            covid_ball3.velocityX = 0; 
            goodperson2.velocityX = 0;
            goodperson3.velocityX = 0;
            goodperson4.velocityX = 0;
            badperson1.velocityX = 0;
            badperson2.velocityX = 0;
            badperson3.velocityX = 0;
            covifighter.visible = true;
          
            level1_target.visible = false;
            type_level.visible = false;
          
          
            goodperson1.x=  displayWidth+29;
            goodperson2.x = displayWidth;
            goodperson3.x = displayWidth;
            goodperson4.x = displayWidth;
            badperson1.x =displayWidth+29;
            badperson2.x =displayWidth;
            badperson3.x = displayWidth;
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
            covifighter.scale = 2;
            covifighter.y = displayHeight-750;
          
            back.visible = false;
            cov.visible = true;
                              }
                              
                            }
                          );
                          
                            }
                      
                            if(badperson3.isTouching(greenLine)   ){
                              badperson3.x = displayWidth;
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
                                    //location.reload();
                                
                                    goodperson1.velocityX = 0;
                              goodperson2.velocityX = 0;
                              goodperson3.velocityX = 0;
                              goodperson4.velocityX = 0;
          
                              badperson1.velocityX = 0;
                              badperson2.velocityX = 0;
                              badperson3.velocityX = 0;
                              goodperson1.velocityX = 0;
                              covid_ball1.velocityX = 0;
                              covid_ball2.velocityX = 0;
                              covid_ball3.velocityX = 0; 
    
            covid_ball1.velocityX = 0;
            covid_ball2.velocityX = 0;
            covid_ball3.velocityX = 0;                   
            goodperson2.velocityX = 0;
            goodperson3.velocityX = 0;
            goodperson4.velocityX = 0;
            badperson1.velocityX = 0;
            badperson2.velocityX = 0;
            badperson3.velocityX = 0;
            covifighter.visible = true;
          
            level1_target.visible = false;
            type_level.visible = false;
          
          
            goodperson1.x=  displayWidth+29;
            goodperson2.x = displayWidth;
            goodperson3.x = displayWidth;
            goodperson4.x = displayWidth+35;
            badperson1.x =displayWidth+29;
            badperson2.x =displayWidth;
            badperson3.x = displayWidth;
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
            covifighter.scale = 2;
            covifighter.y = displayHeight-750;
          
            back.visible = false;
            cov.visible = true;
                                  }
                                  
                                }
                              );
                              
                                }
          
          
          //||goodperson2.isTouching(greenLine) ||goodperson2.isTouching(greenLine)
          
          
          
          
          
    
    
    
    
    
    
          
          if(covid_ball1.isTouching(greenLine)   ){
           covid_ball1.x = displayWidth+100;
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
    
    
    goodperson1.x=  displayWidth+29;
    goodperson2.x = displayWidth;
    goodperson3.x = displayWidth;
    goodperson4.x = displayWidth;
    badperson1.x =displayWidth+29;
    badperson2.x =displayWidth;;
    badperson3.x = displayWidth;
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
    covifighter.scale = 2;
    covifighter.y = displayHeight-750;
    
    back.visible = false;
    cov.visible = true;
                }
                
              }
            );
            
    
              }
            
              if(covid_ball2.isTouching(greenLine)   ){
                covid_ball2.x = displayWidth+100;
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
                      //location.reload();
         
                      goodperson1.velocityX = 0;
                goodperson2.velocityX = 0;
                goodperson3.velocityX = 0;
                goodperson4.velocityX = 0;
                badperson1.velocityX = 0;
                badperson2.velocityX = 0;
                badperson3.velocityX = 0;
                goodperson1.velocityX = 0;
                covid_ball1.velocityX = 0;
                covid_ball2.velocityX = 0;
                covid_ball3.velocityX = 0; 
    
    
    
    
    covid_ball1.velocityX = 0;
    covid_ball2.velocityX = 0;
    covid_ball3.velocityX = 0; 
    goodperson2.velocityX = 0;
    goodperson3.velocityX = 0;
    goodperson4.velocityX = 0;
    badperson1.velocityX = 0;
    badperson2.velocityX = 0;
    badperson3.velocityX = 0;
    covifighter.visible = true;
    
    level1_target.visible = false;
    type_level.visible = false;
    
    
    goodperson1.x=  displayWidth+29;
    goodperson2.x = displayWidth;
    goodperson3.x = displayWidth;
    goodperson4.x = displayWidth;
    badperson1.x =displayWidth+29;
    badperson2.x =displayWidth;
    badperson3.x = displayWidth;
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
    covifighter.scale = 2;
    covifighter.y = displayHeight-750;
    
    back.visible = false;
    cov.visible = true;
                    }
                    
                  }
                );
                
                  }
            
                  if(covid_ball3.isTouching(greenLine)   ){
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
                          //location.reload();
                      
                          goodperson1.velocityX = 0;
                    goodperson2.velocityX = 0;
                    goodperson3.velocityX = 0;
                    goodperson4.velocityX = 0;
    
                    badperson1.velocityX = 0;
                    badperson2.velocityX = 0;
                    badperson3.velocityX = 0;
                    goodperson1.velocityX = 0;
                    covid_ball1.velocityX = 0;
                    covid_ball2.velocityX = 0;
                    covid_ball3.velocityX = 0; 
    
    covid_ball1.velocityX = 0;
    covid_ball2.velocityX = 0;
    covid_ball3.velocityX = 0;                   
    goodperson2.velocityX = 0;
    goodperson3.velocityX = 0;
    goodperson4.velocityX = 0;
    badperson1.velocityX = 0;
    badperson2.velocityX = 0;
    badperson3.velocityX = 0;
    covifighter.visible = true;
    
    level1_target.visible = false;
    type_level.visible = false;
    
    
    goodperson1.x=  displayWidth+29;
    goodperson2.x = displayWidth;
    goodperson3.x = displayWidth;
    goodperson4.x = displayWidth+35;
    badperson1.x =displayWidth+29;
    badperson2.x =displayWidth;
    badperson3.x = displayWidth;
    covid_ball1.x = displayWidth+100;
    covid_ball2.x = displayWidth+100;
    covid_ball2.x = displayWidth+100;
    
    ul1.visible = true;
    ul1.x = displayWidth-1320;
    ll2.visible = true;
    ll3.visible = true;
    ll4.visible = true;
    ll5.visible = true;
    pwm.visible = true;
    covifighter.addImage(covifighter_Image);
    covifighter.scale = 2;
    covifighter.y = displayHeight-750;
    
    back.visible = false;
    cov.visible = true;
                        }
                        
                      }
                    );
                    
                      }
    
    
    //||goodperson2.isTouching(greenLine) ||goodperson2.isTouching(greenLine)
    
    
    
    
    
    
          
          
          if(mousePressedOver(plays)){
          
            
            plays.destroy();
            htp.destroy();
           
           // goodperson.destroy();
            pwm.x = displayWidth-750;
            pwm.scale = 0.9;
            mask.visible = false;
            ul1.visible = true;
            ll2.visible = true;
            ll3.visible = true;
            ll4.visible = true;
            ll5.visible = true;
            //ground1.display();
          }
          
          
          //ground1.display();
          
          
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
           
           
           // goodperson1z();
          }
          ground1.display();
          ground2.display();
          ground3.display();
          
          bow.display();
          bow.life();
          if(mousePressedOver(back)){
            
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
          
          
            goodperson1.x=  displayWidth+29;
            goodperson2.x = displayWidth;
            goodperson3.x = displayWidth;
            goodperson4.x = displayWidth;
            badperson1.x =displayWidth+29;
            badperson2.x =displayWidth;;
            badperson3.x = displayWidth;
            covid_ball1.x = displayWidth-100;  
            covid_ball2.x = displayWidth-90;
            covid_ball3.x = displayWidth-80;
            ul1.visible = true;
            ul1.x = displayWidth-1320;
            ll2.visible = true;
            ll3.visible = true;
            ll4.visible = true;
            ll5.visible = true;
            pwm.visible = true;
            covifighter.addImage(covifighter_Image);
            covifighter.scale = 2;
            covifighter.y = displayHeight-750;
          
            back.visible = false;
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
              badperson1.x = displayWidth+29;
             // badperson1.x =displayWidth-10000000000000000000000000000000000000000000000000000000000000;
            }
            else if(arrows[i].isTouching(badperson2)){
              badperson2.x = displayWidth+29;
             // badperson2.x =displayWidth-10000000000000000000000000000000000000000000000000000000000000;
            }
            else if(arrows[i].isTouching(badperson3)){
              badperson3.x = displayWidth+29;
             // badperson3.x =displayWidth-10000000000000000000000000000000000000000000000000000000000000;
            }  else if(arrows[i].isTouching(covid_ball1)){
              covid_ball1.x = displayWidth+100;
             
             // badperson2.x =displayWidth-10000000000000000000000000000000000000000000000000000000000000;
            }
            else if(arrows[i].isTouching(covid_ball2)){
              covid_ball2.x = displayWidth+90;
            
             // badperson3.x =displayWidth-10000000000000000000000000000000000000000000000000000000000000;
            }
            else if(arrows[i].isTouching(covid_ball3)){
              covid_ball3.x = displayWidth+80;
              
             // badperson3.x =displayWidth-10000000000000000000000000000000000000000000000000000000000000;
            }
          }
     
          if(goodperson1.x<displayWidth-1500 && goodperson2.x<displayWidth-1500 && goodperson3.x<displayWidth-1500 &&  goodperson4.x<displayWidth-1500)
          gameState = END3;
        }        
          
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  