
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
				$('#div2').html(data);
			}
	});
  console.log(username);
	return false;	
}
