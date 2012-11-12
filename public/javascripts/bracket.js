$(function() {
 $('#VS3').hide();
 $('#r2').hide();
 $('#r3').hide();
});

var round1= true;
var round2= false;
var picks = 0;

function stockpick1(){
  $('#block2').hide("slow");
  $('#VS1').hide("slow");
  $('#block1').css("background-color","#CCFF33");
  picks++;
  console.log(picks);
  if(picks==2)
  {
    $('#VS3').show("slow");
    $('#r2').hide("slow");
    $('#r1').hide();
    
  }
  
  if(picks >2){
    $('#block3').hide("slow");
    $('#block4').hide("slow");
    $('#VS3').hide("slow");
    $('#r2').hide();
    $('#r3').show();
    $('#block1').css("background-color","#FFFC17");
    $('.stockblock').animate({"width": "+=50px","height": "+=25px" }, "slow");
    
  }
  return true;
}

function stockpick2(){
  $('#block1').hide("slow");
  $('#VS1').hide("slow");
  $('#block2').css("background-color","#CCFF33");
  pick++;
  console.log(picks);
  if(picks==2)
  {
    $('#VS3').show("slow");
   $('#r2').show("slow");
    $('#r1').hide();
    
  }
  if(picks >2){
    $('#block3').hide("slow");
    $('#block4').hide("slow");
    $('#VS3').hide("slow");
    $('#r2').hide();
    $('#r3').show();
    $('#block2').css("background-color","#FFFC17");
    $('.stockblock').animate({"width": "+=50px","height": "+=25px" }, "slow");
    
  }
  
  
  return true;
}


function stockpick3(){
  $('#block4').hide("slow");
  $('#VS2').hide("slow");
  $('#block3').css("background-color","#CCFF33");
  picks++;
  console.log(picks);
  if(picks==2)
  {
    $('#VS3').show("slow");
    $('#r2').show("slow");
    $('#r1').hide();
    
  }
  
  if(picks >2){
    $('#block2').hide("slow");
    $('#block1').hide("slow");
    $('#VS3').hide("slow");
    $('#r2').hide();
    $('#r3').show();
    $('#block3').css("background-color","#FFFC17");
    $('.stockblock').animate({"width": "+=50px","height": "+=25px" }, "slow");
  }
  return true;
}

function stockpick4(){
  $('#block3').hide("slow");
  $('#VS2').hide("slow");
  $('#block4').css("background-color","#CCFF33");
  picks++;
  console.log(picks);
  if(picks==2)
  {
    $('#VS3').show("slow");
    $('#r2').show("slow");
    $('#r1').hide();
    
  }
  if(picks >2){
   
     $('#block2').hide("slow");
     $('#block1').hide("slow");
     $('#VS3').hide("slow");
     $('#r2').hide();
     $('#r3').show();
     $('#block4').css("background-color","#FFFC17");
      $('.stockblock').animate({"width": "+=50px","height": "+=25px" }, "slow");

   }
  return true;
}

