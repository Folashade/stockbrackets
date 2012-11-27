
$(function() {
	$("#loginform").submit(doPut);
	} );

function doPut() {
  var username = $("#usernametag").val();
  var password = $("#passwordtag").val();
  
  console.log(username);
	return false;	
}
