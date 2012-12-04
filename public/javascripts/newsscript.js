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

