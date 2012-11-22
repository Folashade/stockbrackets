
$(function() {
	$("#signupform").submit(doPut);
	} );

function doPut() {
	$.ajax({
			url: "./routes/signup",
			type: "put",
			data: {
				email: $("#ts1").val()
			},
			success: function(data) {
			console.log('ok');
			}
	});
	return false;	
}

