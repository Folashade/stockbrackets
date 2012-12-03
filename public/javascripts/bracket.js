$(function() {
 $('#VS3').hide();
 $('#r2').hide();
 $('#r3').hide();
});

var bracket1= false;
var bracket2= false;
var picks = 0;

function stockpick1(){
  $('#block2').hide("slow");
  $('#VS1').hide("slow");
  $('#block1').css("background-color","#CCFF33");
  if(bracket1== false)
  {
  picks++;
  console.log(picks);
  bracket1 = true;
 }
 
  if(picks==2 & bracket2== true)
  {
    $('#VS3').show("slow");
    $('#r2').hide("slow");
    $('#r1').hide();
    bracket1 = false;
    bracket2= false;
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
  if(bracket1== false)
  {
  picks++;
  console.log(picks);
  bracket1= true;
}
  
  if(picks==2 & bracket2== true)
  {
    $('#VS3').show("slow");
   $('#r2').show("slow");
    $('#r1').hide();
     bracket1 = false;
     bracket2= false;
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
   if(bracket2==false)
    {
    picks++;
    console.log(picks);
    bracket2=true;
  }
  if(picks==2 & bracket1 == true)
  {
    $('#VS3').show("slow");
    $('#r2').show("slow");
    $('#r1').hide();
    bracket1 = false;
    bracket2= false;
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
  if(bracket2==false)
  {
  picks++;
  console.log(picks);
  bracket2=true;
}
  if(picks==2 & bracket1 == true )
  {
    $('#VS3').show("slow");
    $('#r2').show("slow");
    $('#r1').hide();
    bracket1 = false;
    bracket2= false;
    
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

