$("div[data-item-id]").live("mouseover", function(){
        var $target = $(this).find("a.twitter-timeline-link").not(".media");
        $target.each(function() {
                var str = $("span.js-display-url",this).text();
                var par  =  $(this).closest("div").hasClass("media");

                if(str != "" && str != null && str != undefined && str.match(/^http/) == null && $(this).attr("data-display-url") == undefined && par == false && $(this).children().is("img")  == false) {
                        var origin = str + $("span.tco-ellipsis",this).text();
                        $(this).attr("data-display-url",origin);
                        //console.log(origin);
                } else if ($(this).attr("data-display-url") == undefined && $(this).text().match(/^http/) == null) {
                        var origin = $(this).text();
                        $(this).attr("data-display-url",origin);
                        //console.log(origin);
                }
                if($(this).attr("data-ultimate-url") != undefined){
                        $(this).attr("href", $(this).attr("data-ultimate-url"));
                        $(this).text($(this).attr("data-ultimate-url"));
                } else if ( $(this).attr("data-expanded-url") != undefined ) {
                        $(this).attr("href", $(this).attr("data-expanded-url"));
                        $(this).text($(this).attr("data-expanded-url"));
                }

        });
});

$("div[data-item-id]").live("mouseout", function(){
        var $target = $(this).find("a.twitter-timeline-link").not(".media");
        $target.each(function() {
                var par  =  $(this).closest("div").hasClass("media");
                if($(this).attr("data-display-url") && par  == false && $(this).children().is("img") == false){
                        $(this).text($(this).attr("data-display-url"));
                }
        });
});

