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
	backgroundColor: 0xFFFFFF,
	colorMode: 'lerpGradient',
	birdSize: 3.10,
	separation: 50.00,
	wingSpan: 40.00,
	quantity: 2.00
});

// Smooth scrolling
$(document).ready(function() {
	let scrollLink = $('.scroll');

	scrollLink.click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 450);
	});
		
	// Active link
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

	resizeHeader();

	$(window).scroll(function() {
		resizeHeader();
	});
});

function resizeHeader() {
	const navItems = ['about', 'work', 'contact']

	if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
		document.querySelector(`.header`).classList.add("shrunk");
		document.querySelector(`.header`).style.transition = "0.4s";
		document.querySelector(`.header .title-wrapper .base`).style.fontSize='55px';
		document.querySelector(`.header .title-wrapper .gradient`).style.fontSize='55px';
		document.querySelector(`.header .title-wrapper .base a`).style.color='#b8b8b8';
		$.each(navItems, function(i, item) {
			document.querySelector(`.header .${item}-wrapper:not(.title-wrapper) .base`).style.fontSize='28px';
			document.querySelector(`.header .${item}-wrapper:not(.title-wrapper) .gradient`).style.fontSize='28px';
			document.querySelector(`.header .${item}-wrapper:not(.title-wrapper) .base a`).style.color='#b8b8b8';
		})
	} else {
		document.querySelector(`.header`).classList.remove("shrunk");
		document.querySelector(`.header .title-wrapper .base`).style.fontSize='120px';
		document.querySelector(`.header .title-wrapper .gradient`).style.fontSize='120px';
		document.querySelector(`.header .title-wrapper .base a`).style.color='transparent';
		$.each(navItems, function(i, item) {
			document.querySelector(`.header .${item}-wrapper:not(.title-wrapper) .base`).style.fontSize='36px';
			document.querySelector(`.header .${item}-wrapper:not(.title-wrapper) .gradient`).style.fontSize='36px';
			document.querySelector(`.header .${item}-wrapper:not(.title-wrapper) .base a`).style.color='transparent';
		})
	}
}

function submitForm() {
	document.getElementById('submit').disabled = true;
	document.getElementById('status').innerHTML = 'Please wait...';
	document.getElementById('name').value = document.getElementById('name').value.replace(/\s*$/,"");
	let formData = new FormData();
	formData.append('name', document.getElementById('name').value);
	formData.append('email', document.getElementById('email').value);
	formData.append('message', document.getElementById('message').value);
	let ajax = new XMLHttpRequest();
	ajax.open('POST', 'contact-form.php');
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == 'success') {
				document.getElementById('contact-form').innerHTML = '<h2>Thank you, '
				+document.getElementById('name').value +', your message has been sent.</h2>';
			}
			else {
				document.getElementById('status').innerHTML = ajax.responseText;
				document.getElementById('submit').disabled = false;
			}
		}
	};
	ajax.send(formData);
}