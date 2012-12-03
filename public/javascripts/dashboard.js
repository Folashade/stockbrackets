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
			  
			  console.log(json_parsed.username);
			$('#myname').append(json_parsed.username);
			for(var x = 0; x < json_parsed.stocks.length; x++){
			$('#rightpane').append("<p><a href='/routes/stock?stockname="+json_parsed.stocks[x]+"'>"+json_parsed.stocks[x]+"</a></p>");
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
  			$('#rightpane').append($("#ts1").val());
  			}
  	});
  	return false;	
  }
	
	
	
	
	} );



