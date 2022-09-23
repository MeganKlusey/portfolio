// shrinking header
window.onscroll = function(){
	scrollFunction();
};

$(document).ready(function(){
    scrollFunction();
    $(window).scroll(function() {
        scrollFunction();
    })
	}
);

function scrollFunction(){
	var elements = document.getElementsByClassName('navBtn');
	var scrollPos = $(window).scrollTop();
	if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){
		$('#header').addClass('headerShrunk');
      document.getElementById('title-base').style.fontSize='55px';
			document.getElementById('title-base').style.marginTop='10px';
			document.getElementById('title-gradient').style.fontSize='55px';
			document.getElementById('title-gradient').style.marginTop='10px';
		for(var i=0; i<elements.length; i++){
			elements[i].style.fontSize='24px';
			elements[i].style.marginLeft='10px';
			elements[i].style.marginRight='10px';
			elements[i].style.marginTop='3px';
		}
	}
	else if(matchMedia("(max-width:767px)").matches){
		if(document.body.scrollTop>300){
			$('#header').addClass('headerShrunk');
			document.getElementById('title-base').style.fontSize='55px';
			document.getElementById('title-base').style.marginTop='10px';
			document.getElementById('title-gradient').style.fontSize='55px';
			document.getElementById('title-gradient').style.marginTop='10px';
			for(var i=0; i<elements.length; i++){
				elements[i].style.fontSize='24px';
				elements[i].style.marginLeft='10px';
				elements[i].style.marginRight='10px';
				elements[i].style.marginTop='3px';
			}
		}
		else{
			$("#header").removeClass("headerShrunk");
			document.getElementById('title-base').style.fontSize='55px';
			document.getElementById('title-base').style.marginTop='120px';
			document.getElementById('title-gradient').style.fontSize='55px';
			document.getElementById('title-gradient').style.marginTop='120px';
			for(var i=0; i<elements.length; i++){
				elements[i].style.fontSize='24px';
				elements[i].style.marginLeft='10px';
				elements[i].style.marginRight='10px';
				elements[i].style.marginTop='3px';
			}
		}
	}
	else{
		$("#header").removeClass("headerShrunk");
		document.getElementById('title-base').style.fontSize='120px';
		document.getElementById('title-base').style.marginTop='120px';
		document.getElementById('title-gradient').style.fontSize='120px';
		document.getElementById('title-gradient').style.marginTop='120px';
		for(var i=0; i<elements.length; i++){
			elements[i].style.fontSize='32px';
			elements[i].style.marginLeft='12px';
			elements[i].style.marginRight='12px';
			elements[i].style.marginTop='5px';
		}
	}
}

// smooth scrolling
$(document).ready(function(){
	var scrollLink=$('.scroll');
	scrollLink.click(function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop:$(this.hash).offset().top
		}, 450);
	}
);
		
	// active link
	$(window).scroll(function(){
		var scrollbarLocation=$(this).scrollTop();
		scrollLink.each(function(){
			var divOffset=$(this.hash).offset().top-200;
			if(divOffset<=scrollbarLocation ){
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
			else{
				$(this).parent().removeClass('active');
			}
		})
	})
	
	$(window).scroll(function(){
		var divOffset=$('#header').offset().top-300;
		var windowYmax = 1;
		if (divOffset>windowYmax) {
			$('.content').addClass("hide");
		}
		else {
			$('.content').removeClass("hide");
		}
	})
});


/* if(!$(this).parent().hasClass('active')){
var marker = document.querySelector('.marker');
var item = document.querySelectorAll('#nav a');

function indicator(e){
	marker.style.left = e.offsetLeft+'px';
	marker.style.width = e.offsetWidth+'px';
}


	item.forEach(link => {
		link.addEventListener('click', (e)=>{
				indicator(e.target);
		})
	})
} */

// contact form
function submitForm(){
	document.getElementById('submit').disabled = true;
	document.getElementById('status').innerHTML = 'Please wait...';
	document.getElementById('name').value = document.getElementById('name').value.replace(/\s*$/,"");
	var formData = new FormData();
	formData.append('name', document.getElementById('name').value);
	formData.append('email', document.getElementById('email').value);
	formData.append('message', document.getElementById('message').value);
	var ajax = new XMLHttpRequest();
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

// slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName('mySlides');
	var dots = document.getElementsByClassName('dot');
	if (n > slides.length){
		slideIndex = 1;
	}
	if (n < 1){
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace(' active2', '');
	}
	slides[slideIndex-1].style.display = 'block';  
	dots[slideIndex-1].className += ' active2';
}

function on(){
	document.getElementById('overlay').style.display='block';
	document.documentElement.style.overflowY='hidden';
	document.body.scroll='no';
}

function off(){
	document.getElementById('overlay').style.display='none';
	document.documentElement.style.overflowY='scroll';
	document.body.scroll='yes';
}

function on2(){
	document.getElementById('overlay2').style.display='block';
	document.documentElement.style.overflowY='hidden';
	document.body.scroll='no';
}

function off2(){
	document.getElementById('overlay2').style.display='none';
	document.documentElement.style.overflowY='scroll';
	document.body.scroll='yes';
}

function on3(){
	document.getElementById('overlay3').style.display='block';
	document.documentElement.style.overflowY='hidden';
	document.body.scroll='no';
}

function off3(){
	document.getElementById('overlay3').style.display='none';
	document.documentElement.style.overflowY='scroll';
	document.body.scroll='yes';
}

function on4(){
	document.getElementById('overlay4').style.display='block';
	document.documentElement.style.overflowY='hidden';
	document.body.scroll='no';
}

function off4(){
	document.getElementById('overlay4').style.display='none';
	document.documentElement.style.overflowY='scroll';
	document.body.scroll='yes';
}

function on5(){
	document.getElementById('overlay5').style.display='block';
	document.documentElement.style.overflowY='hidden';
	document.body.scroll='no';
}

function off5(){
	document.getElementById('overlay5').style.display='none';
	document.documentElement.style.overflowY='scroll';
	document.body.scroll='yes';
}

VANTA.BIRDS(
	{
		el:'#home',
		color1:0xb7e2e0,
		color2:0x5b79c0,
		mouseControls:true,
		touchControls:true,
		minHeight:200.00,
		minWidth:200.00,
		scale:1.00,
		scaleMobile:1.00,
		backgroundColor:0xffffff,
		colorMode:'lerpGradient',
		birdSize:3.10,
		separation: 50.00,
		wingSpan:40.00,
		quantity:2.00
	}
);