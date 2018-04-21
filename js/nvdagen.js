function hoursBetween(dateBefore, dateAfter) {
    return Math.round((dateAfter - dateBefore) / (1000*60*60*24));
}
		
$(document).ready(function() {
	var eventDate = new Date("January, 31, 2019");
	$('.timeLeft').text(hoursBetween(new Date(), eventDate));

	$('.modal').modal('hide');
	$('.toggleModal').click(function(ev){
		ev.preventDefault();
		if (!!document.querySelector('body.modal-open')) {
			$('.modal').modal('hide');
		} else {
			var pid = $(this).data('modal');
			$.get('/modals/' + pid + '.html', function(data){
				var headerRegex = /(?:<header>)(.|[\r\n])*(?:<\/header>)/g;
				var contentRegex = /(?:<content>)(.|[\r\n])*(?:<\/content>)/g;
				var headerContent = headerRegex.exec(data)[0];
				var bodyContent = contentRegex.exec(data)[0];
				document.querySelector(".modal").style.marginTop = document.querySelector(".navbar-header").offsetHeight+"px";
				$('.modal .modal-title').html(headerContent);
				$('.modal .modal-body').html(bodyContent);
				$('.modal').modal('show');
				document.querySelector('.modal').focus();
				$(".modal-content").click();
			});
		}
	});
	var offset = 200;
    $('.navigate').click(function(event) {
        event.preventDefault();
        var ref = $(event.currentTarget).attr('href');
        var target = $(ref);
        if (!target) return;
        $('html, body').animate({
            scrollTop: (target.offset().top-offset) + 'px',
        }, 'fast');
    });

	$("#navbar.in a").not(".dropdown-toggle").click(function(event) { 
		$('.navbar-toggle').click();
	});
	
	$(document).click(function(event) { 
		if(!$(event.target).closest('#navbar').length) {
			if($('#navbar').is(".in")) {
				$('.navbar-toggle').click();
			}
		}        
	});
});
