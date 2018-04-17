$(document).ready(function() {
	$("#search").on("click", function() {
		$("#results").text("");
		var query = $("#query").val();
		var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search&origin=*&gsrsearch=";
		$.getJSON(url + query, function(json) {
			var page = json.query.pages;
			$("#results").append("<h5 align='center'>Top 15 results for '"+ query +"'</h5>")
			$.each(page, function(i) {
				$("#results").append("<p class='results'><a href='https://en.wikipedia.org/?curid="+ page[i] +"' target='_blank'>"+page[i].title+"</a></p>");
			});
		});
	});

	$("#clear").on("click", function() {
		$("#query").val("");
		$("#results").text("");
	});
});