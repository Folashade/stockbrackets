	$(function() {
  	$("#postform").submit(doGet);
  	
  	$.ajax({
  			url: "/loadideas",
  			type: "put",
  			data: {
  			
  			},
  			success: function(data) {
  			  var json = data;
  			  var json_parsed = $.parseJSON(json);
  			  for(var x =0 ; x < json_parsed.length; x++)
  			  {
  			    console.log(json_parsed[x].title);
  			    console.log(json_parsed[x].user_name);
  			    	$('#idealist').append("<p><b>title:  </b>"+json_parsed[x].title+"</b></p>");
  			    	$('#idealist').append("<b>username:  </b>"+json_parsed[x].user_name+"");
  			    	$('#idealist').append("<p><b>body:   </b>"+json_parsed[x].body+"</p></br></br>");
        		}
  			  }
  			  
     	});
	});
	  function doGet() {
      var vars = {};
      var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          vars[key] = value;
      });
      var session = vars["sessionid"];
      


      $.ajax({
    			url: "/postidea",
    			type: "put",
    			data: {
    				title: $("#posttitle").val(),
    			  body: $("#postbody").val(),
    			  sessionid: session+""
    			},

    			success: function(data) {
    				console.log(data);
           
    			}
    	});
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
function NewsPage()
{
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  var session = vars["sessionid"];
  
  window.location.href = '/routes/news_route?sessionid='+session;
  
}
