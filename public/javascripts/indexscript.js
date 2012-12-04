
$(function() {
	$("#loginform").submit(doGet);

	} );

function doGet() {

  $.ajax({
			url: "/getuser",
			type: "put",
			data: {
				username: $("#usernametag").val(),
			  password: $("#passwordtag").val(),
			},
			
			success: function(data) {
				console.log(data);
        if(data != "error"){
				window.location.href = '/routes/dashboard_route?sessionid='+data;
			}else
			alert("Invalid Login");
			
			
			}
	});
 
  //$.ajax({
	//		url: "/routes/dashboard_route",
	//		type: "put",
	//		data: {
	//			username: $("#usernametag").val(),
		//	  password: $("#passwordtag").val(),
		//	},
			
	//		success: function(data) {
	//			console.log(data);
	//		}
//	});
 
	return false;	
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

