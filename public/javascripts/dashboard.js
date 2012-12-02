$(function() {
	$("#stockstalker").submit(doPut);
	$("#f2").submit(doGet);
	
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
			$('#myname').append(data);
			}
	});
	
	
	
	
	} );

function doPut() {
	$.ajax({
			url: "/requeststock",
			type: "put",
			data: {
				testString: $("#ts1").val()
			},
			success: function(data) {
			console.log('ok');
			$('#rightpane').append($("#ts1").val());
			}
	});
	return false;	
}

function doGet() {
	$.ajax({
			url: "/request",
			type: "get",
			
			success: function(data) {
				$('#div2').html(data);
			}
	});
	return false;	
}