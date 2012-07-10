$("div[data-item-id]").live("mouseover", function(){
	var $target = $(this).find("a.twitter-timeline-link");

	$target.each(function() {

		var str = $("span.js-display-url",this).text();
		if(str != "" && str != null && str != undefined && str.match(/^http/) == null && !$(this).attr("data-display-url")) {
			var origin = str;
			$(this).attr("data-display-url",origin);
			//console.log(origin);
		} else if (!$(this).attr("data-display-url") && $(this).text().match(/^http/) == null) {
			var origin = $(this).text();
			$(this).attr("data-display-url",origin);
			//console.log(origin);
		}
		if($(this).attr("data-ultimate-url")){
			$(this).attr("href", $(this).attr("data-ultimate-url"));
			$(this).text($(this).attr("data-ultimate-url"));
		} else if ( $(this).attr("data-expanded-url")) {
			$(this).attr("href", $(this).attr("data-expanded-url"));
			$(this).text($(this).attr("data-expanded-url"));
		}

	});
});

$("div[data-item-id]").live("mouseout", function(){
	var $target = $(this).find("a.twitter-timeline-link");
	$target.each(function() {
		if($(this).attr("data-display-url")){
			//$(this).attr("href", $(this).attr("data-ultimate-url"));
			$(this).text($(this).attr("data-display-url"));
		}

	});
});

