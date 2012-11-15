$(function() {
	$("#stockstalker").submit(doPut);
	$("#f2").submit(doGet);
	} );

function doPut() {
	$.ajax({
			url: "/request",
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