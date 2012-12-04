$(function() {
	$("#stockstalker").submit(doPut);

	
	function getUrlVars() {
      var vars = {};
      var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          vars[key] = value;
      });
      return vars;
  }
  
  var sessionid = getUrlVars()["sessionid"];
  console.log(sessionid);
	
	$.ajax({
			url: "/getuserdashboard",
			type: "put",
			data: {
				session_id: sessionid 
			},
			success: function(data) {
			  
			  var json = data;
			  var json_parsed = $.parseJSON(json);
			  if(json_parsed.brackets.length > 0){
			  var r1 = json_parsed.brackets[0].round1;
			  var r2 = json_parsed.brackets[0].round1;
			  console.log(json_parsed.username);
			   console.log(json_parsed.brackets[0].round1);
			   console.log(json_parsed.brackets[0].round2);
		   }
			$('#myname').append(json_parsed.username);
			for(var x = 0; x < json_parsed.stocks.length; x++){
			$('#rightpane').append("<p><a href='/routes/stock?stockname="+json_parsed.stocks[x]+"&sessionid="+sessionid+"'>"+json_parsed.stocks[x]+"</a></p>");
		}
		if(json_parsed.brackets.length > 0)
		{
		$('#middlepane').append("<p>Round One: Apple vs Google || Microsoft vs IBM </p>");
	
		  	$('#middlepane').append("<p>Round Two:"+r1[0]+ " vs " + r1[1] +   " </p>");
		  	
		  		$('#middlepane').append("<p>Winner:"+r2[0]+" </p>");
		  
	}
		
		
		
			}
	});
	//
	function doPut() {
  	$.ajax({
  			url: "/requeststock",
  			type: "put",
  			data: {
  				testString: $("#ts1").val(),
  				sessionid: sessionid
  			},
  			success: function(data) {
  			console.log('ok');
  			$('#rightpane').append("<p><a href='/routes/stock?stockname="+$("#ts1").val()+"&sessionid="+sessionid+"'>"+$("#ts1").val()+"</a></p>");
  			}
  	});
  	return false;	
  }
	

	
	
	} );

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

