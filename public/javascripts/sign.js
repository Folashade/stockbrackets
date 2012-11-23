
$(function() {
	$("#signupform").submit(doPut);
	} );

function doPut() {
  console.log("here")
	$.ajax({
			url: "/request",
			type: "put",
			data: {
				email: $("#emailbox").val(),
			  username: $("#usernamebox").val(),
			  password: $("#passwordbox").val()
			},
			success: function(data) {
			console.log('ok');
			window.location.href = '/';
			}
	});
	return false;	
}

