$(function() {
 $('#VS3').hide();
 $('#r2').hide();
 $('#r3').hide();
 $('#subb').hide();
});
var round1 = [];
var round2= [];
var bracket1= false;
var bracket2= false;
var picks = 0;

function stockpick1(){
  $('#block2').hide("slow");
  $('#VS1').hide("slow");
  // $('#block1').css("background-color","#CCFF33");
  if(bracket1== false)
  {
  picks++;
  console.log(picks);
  bracket1 = true;
  if(picks<=2)
  round1.push("Apple")
 
 }
 
  if(picks==2 & bracket2== true)
  {
    $('#VS3').show("slow");
    $('#r2').hide("slow");
    $('#r1').hide();
    bracket1 = false;
    bracket2= false;
    //round1.push("Apple");
  }
  
  if(picks >2){
    $('#block3').hide("slow");
    $('#block4').hide("slow");
    $('#VS3').hide("slow");
    $('#r2').hide();
    $('#r3').show();
    $('#subb').css({'visibility':'visible'});
    $('#subb').show();
    // $('#block1').css("background-color","#FFFC17");
    // $('.stockblock').animate({"width": "+=50px","height": "+=25px" }, "slow");
    round2.push("Apple");
     console.log(round1);
     console.log(round2);
    
  }
  return true;
}

function stockpick2(){
  $('#block1').hide("slow");
  $('#VS1').hide("slow");
  // $('#block2').css("background-color","#CCFF33");
  if(bracket1== false)
  {
  picks++;
  console.log(picks);
  bracket1= true;
  if(picks<=2)
  round1.push("Google");
}
  
  if(picks==2 & bracket2== true)
  {
    $('#VS3').show("slow");
   $('#r2').show("slow");
    $('#r1').hide();
     bracket1 = false;
     bracket2= false;
    // round1.push("Google");
  }
  if(picks >2){
    $('#block3').hide("slow");
    $('#block4').hide("slow");
    $('#VS3').hide("slow");
    $('#r2').hide();
    $('#r3').show();
    $('#subb').css({'visibility':'visible'});
    $('#subb').show();
    // $('#block2').css("background-color","#FFFC17");
    // $('.stockblock').animate({"width": "+=50px","height": "+=25px" }, "slow");
    round2.push("Google");
     console.log(round1);
     console.log(round2);
  }
  
  
  return true;
}


function stockpick3(){
  $('#block4').hide("slow");
  $('#VS2').hide("slow");
  // $('#block3').css("background-color","#CCFF33");
   if(bracket2==false)
    {
    picks++;
    console.log(picks);
    bracket2=true;
    if(picks<=2)
    round1.push("Microsoft");
  }
  if(picks==2 & bracket1 == true)
  {
    $('#VS3').show("slow");
    $('#r2').show("slow");
    $('#r1').hide();
    bracket1 = false;
    bracket2= false;
   // round1.push("Microsoft");
  }
  
  if(picks >2){
    $('#block2').hide("slow");
    $('#block1').hide("slow");
    $('#VS3').hide("slow");
    $('#r2').hide();
    $('#r3').show();
    $('#subb').css({'visibility':'visible'});
    $('#subb').show();
    // $('#block3').css("background-color","#FFFC17");
    // $('.stockblock').animate({"width": "+=50px","height": "+=25px" }, "slow");
    round2.push("Microsoft");
     console.log(round1);
     console.log(round2);
  }
  return true;
}

function stockpick4(){
  $('#block3').hide("slow");
  $('#VS2').hide("slow");
  // $('#block4').css("background-color","#CCFF33");
  if(bracket2==false)
  {
  picks++;
  console.log(picks);
  bracket2=true;
  if(picks<=2)
  round1.push("IBM");
}
  if(picks==2 & bracket1 == true )
  {
    $('#VS3').show("slow");
    $('#r2').show("slow");
    $('#r1').hide();
    bracket1 = false;
    bracket2= false;
   // round1.push("IBM");
  }
  if(picks >2){
   
     $('#block2').hide("slow");
     $('#block1').hide("slow");
     $('#VS3').hide("slow");
     $('#r2').hide();
     $('#r3').show();
     $('#subb').css({'visibility':'visible'});
     $('#subb').show();
     // $('#block4').css("background-color","#FFFC17");
      // $('.stockblock').animate({"width": "+=50px","height": "+=25px" }, "slow");
       round2.push("IBM");
       console.log(round1);
       console.log(round2);

   }
  return true;
}
function bracketsubmit()
{
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  var session = vars["sessionid"];
  session = session +"";
  
  console.log(round1);
  console.log(round2);
  $.ajax({
			url: "/postbracket",
			type: "put",
			data: {
				round1: round1,
				round2: round2,
				session_id: session
			},
			success: function(data) {
			   window.location.href = '/routes/dashboard_route?sessionid='+session;
			}
		  
		
			
	});
  
}

	function BracketPage()
	{
	  var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    var session = vars["sessionid"];
    
    window.location.href = '/routes/bracket_route?sessionid='+session;
	}
function HomePage()
{
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  var session = vars["sessionid"];
  
  window.location.href = '/routes/dashboard_route?sessionid='+session;
  
  
  
  
}
function IdeaPage()
{
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  var session = vars["sessionid"];
  
  window.location.href = '/routes/idea?sessionid='+session;
  
}

function NewsPage()
{
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  var session = vars["sessionid"];
  
  window.location.href = '/routes/news_route?sessionid='+session;
  
}



