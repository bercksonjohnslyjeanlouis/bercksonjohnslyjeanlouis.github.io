"use strict";

//Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


const viewer = new Viewer(document.getElementById('photos_viewer'), {
	inline: true,
	viewed() {
		viewer.zoomTo(1);
	},
});


/* Vanilla RSS - https://github.com/sdepold/vanilla-rss */

	const rss = new RSS(
	    document.querySelector("#rss-feeds"),
	    //Change this to your own rss feeds
        "https://jeunepenseurofficiel.blogspot.com/feeds/posts/default",
	    {
		     // how many entries do you want?
		    // default: 4
		    // valid values: any integer
		    limit: 100,


		// filter: function(entry, tokens) {
		// 	return (
		// 		(tokens.title.indexOf("a la page psychologique") === -1)
		// 	&&
		// 		(tokens.bodyPlain.indexOf("berckson johnsly jean-louis") > -1)
		// 	);
		// },

		    // will request the API via https
			// default: false
			// valid values: false, true
			ssl: true,

			host: 'feedrapp.info',
		  
			 // outer template for the html transformation
			// default: "<ul>{entries}</ul>"
			// valid values: any string
			layoutTemplate: "<div class='items'>{entries}</div>",
		
			// inner template for each entry
			// default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
			// valid values: any string
			entryTemplate: '<div class="item" style="text-align: justify;">' +
				'<img src="{teaserImageUrl} " alt="" style="width: 100%; text-align: center" >' +
				'<h3 class="title"><a href="{url}" target="_blank"><br>{title}</a></h3><div>' +
				'<p>{shortBodyPlain} ...</p><a class="more-link" href="{url}" target="_blank">' +
				'<i class="fas fa-external-link-alt"></i>Lire cet article</a></div>' +
				'<hr class="m-2 mb-3 mt-3"></div>'

	    }
	);
	rss.render();



const iov = document.querySelectorAll('.iov');

iov.forEach(image => {
	image.addEventListener('load', () => {
		image.previousElementSibling.style.display = 'none';
	});
});

    
    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    new GitHubCalendar("#github-graph",
		"bercksonjohnslyjeanlouis",
		{ responsive: true });
    
    
    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({
		username: "bercksonjohnslyjeanlouis",
		responsive: true,
		selector: "#ghfeed"
	});
		function to_top(){
			const top = document.getElementById("the_top");

			top.scrollIntoView();
			top.scrollIntoView(false);
			top.scrollIntoView({ block: "end" });
			top.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
		}

	/* To display current year in footer */
	const y= new Date();
	const cy= y.getFullYear();
	const hy= document.getElementById('cy');
	hy.textContent= '2022 - '+cy;


	// FOR LOADING PAGE ...
// document.onreadystatechange = function () {
// 	if (document.readyState !== "complete") {
// 		document.querySelector(
// 			"body").style.visibility = "hidden";
// 		document.querySelector(
// 			"#loader0").style.visibility = "visible";
// 	} else {
// 		document.querySelector(
// 			"#loader0").style.display = "none";
// 		document.querySelector(
// 			".loader0").style.display = "none";
// 		document.querySelector(
// 			"body").style.visibility = "visible";
// 	}
// };