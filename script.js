$(document).ready(function() {
	$(".lightbox-image").click(function(){
		var url = $(this).data("img-link");
		$(".lightbox-inner").html("<img src='" + url + "'>");
		$(".lightbox-outer").show()
	});
	$(".lightbox-outer").click(function(){
		$(".lightbox-outer").hide()
	});

});