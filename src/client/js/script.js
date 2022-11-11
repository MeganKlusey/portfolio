// shrinking header
window.onscroll = function() {
	scrollFunction();
};

VANTA.BIRDS({
	el: '#home',
	color1: 0xb7e2e0,
	color2: 0x5b79c0,
	mouseControls: true,
	touchControls: true,
	minHeight: 200.00,
	minWidth: 200.00,
	scale: 1.00,
	scaleMobile: 1.00,
	backgroundColor: 0xfffffff,
	colorMode: 'lerpGradient',
	birdSize: 3.10,
	separation: 50.00,
	wingSpan: 40.00,
	quantity: 2.00
});

$(document).ready(function() {
    scrollFunction();
    $(window).scroll(function() {
      scrollFunction();
    })
	}
);

// smooth scrolling
$(document).ready(function() {
	let scrollLink = $('.scroll');
	scrollLink.click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 450);
	});
		
	// active link
	$(window).scroll(function() {
		let scrollbarLocation = $(this).scrollTop();
		scrollLink.each(function() {
			let divOffset = $(this.hash).offset().top - 200;
			if(divOffset <= scrollbarLocation) {
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			} else {
				$(this).parent().removeClass('active');
			}
		})
	})
	
	$(window).scroll(function() {
		let divOffset = $('.header').offset().top - 300;
		let windowYmax = 1;
		if (divOffset > windowYmax) {
			$('.more-arrows-wrapper').addClass("hide");
		} else {
			$('.more-arrows-wrapper').removeClass("hide");
		}
	})
});

function submitForm() {
	document.getElementById('submit').disabled = true;
	document.getElementById('status').innerHTML = 'Please wait...';
	document.getElementById('name').value = document.getElementById('name').value.replace(/\s*$/,"");
	let formData = new FormData();
	formData.append('name', document.getElementById('name').value);
	formData.append('email', document.getElementById('email').value);
	formData.append('message', document.getElementById('message').value);
	let ajax = new XMLHttpRequest();
	ajax.open('POST', 'contactForm.php');
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			if(ajax.responseText == 'success'){
				document.getElementById('contactForm').innerHTML = '<h2>Thank you, '
				+document.getElementById('name').value +', your message has been sent.</h2>';
			}
			else{
				document.getElementById('status').innerHTML = ajax.responseText;
				document.getElementById('submit').disabled = false;
			}
		}
	};
	ajax.send(formData);
}