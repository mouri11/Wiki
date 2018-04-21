$(document).ready(function() {
	$("#search").on("click", function() {
		$("#results").text("");
		var query = $("#query").val();
		if (!query) {
			alert("Please enter a keyword");
		}
		else {
			var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exlimit=max&explaintext=&exintro=&gsrlimit=15&generator=search&origin=*&gsrsearch=";
			$.getJSON(url + query, function(json) {
				var page = json.query.pages;
				$("#results").append("<h5 align='center'>Top 15 results for '"+ query +"'</h5>");
				$.each(page, function(i) {
					$("#results").append("<p class='results' id='"+ page[i].pageid +"'><a href='https://en.wikipedia.org/?curid="+ page[i].pageid +"' target='_blank'>"+page[i].title+"</a></p>" + 
						"<p align='justify'>"+ page[i].extract.slice(0,page[i].extract.indexOf(".") + 1) +"</p>");
					$("#"+page[i].pageid).fadeIn(1000);
				});
			});
		}
	});

	$("#clear").on("click", function() {
		$("#query").val("");
		$("#results").text("");
	});
});