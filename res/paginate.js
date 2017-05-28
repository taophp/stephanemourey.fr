$(document).ready(function(){
	elems = $('.card-block > p').add('.card-block > hr').add('.card-block > blockquote');
	nbElem = elems.length;
	if (nbElem > 10) {
		$('.jumbotron').prepend($('<span id="1"></span>'));
		for (i=2;i<=Math.ceil(nbElem/10);i++){
			$('.card-block').prepend($('<span id="'+i+'"></span>'));
		}
		pager = $('#pagination').paging(nbElem,{
			format: '[<]>', // define how the navigation should look like and in which order onFormat() get's called
			perpage: 10,
			lapping:  0,
			page: location.hash.substr(1) || Cookies.get("current-{{ page.url }}") || 1,
			onSelect: function (page) {
				Cookies.set("current-{{ page.url }}", page);
				if (page!=1) {
					location.hash = page;
				}else{
					history.pushState("", document.title, window.location.pathname+window.location.search);
				}
				elems.fadeOut();
				elems.slice(this.slice[0],this.slice[1]).fadeIn("slow");
				if (page==1){
					$('.firstPage').hide();
					$('.previousPage').hide();
					window.scrollTo(0,$('.card').offset().top);
				}
				if (page==Math.ceil(nbElem/10)) {
					$('.lastPage').hide();
					$('.nextPage').hide();
				}
			},
			onFormat: function (type) {
				switch (type) {
				case 'block': // n and c
					return '<a href="#'+this.value+'" >'+this.value+'</a>&nbsp;';
				case 'next': // >
					return '<a href="#'+this.value+'" class="push-right" title="Page suivante"><span class="nextPage"><img src="http://stephanemourey.fr/res/img/next.png" alt="&gt;" class="rounded-circle"></span></a>';
				case 'prev': // <
					return '<a href="#'+this.value+'" title="Page précédente"><span class="previousPage"><img src="http://stephanemourey.fr/res/img/prev.png" alt="&lt;" class="rounded-circle"></span></a>';
				case 'first': // [
					return '<a href="#'+this.value+'" title="Première page"><span class="firstPage"><img src="http://stephanemourey.fr/res/img/first.png" alt="|&laquo;" class="rounded-circle"></span></a>';
				case 'last': // ]
					return '<a href="#'+this.value+'" class="push-right title="Dernière page""><span class="lastPage"><img src="http://stephanemourey.fr/res/img/last.png" alt="&raquo;|" class="rounded-circle"></span></a>';
				}
			}
		});
		$(window).bind( 'hashchange', function(){pager.setPage(location.hash.substr(1));});
		if (location.hash.substr(1)) {
			pager.setPage(location.hash.substr(1));
		}
	};
});


