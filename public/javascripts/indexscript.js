
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

				window.location.href = '/routes/dashboard_route?sessionid='+data;
			}
	});
 
	return false;	
}
