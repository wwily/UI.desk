// Burger menu
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

// Vendor
// jq2 = jQuery.noConflict();
// jq2(function( $ ) {
//     let owl = $('.owl-carousel');
//     owl.owlCarousel({
//         items:2,
//         loop:true,
//         margin:25,
//         nav:false,
//         responsive:{
//             0:{
//                 items:1
//             },
//             600:{
//                 items:1
//             },
//             1000:{
//                 items:2
//             }
//         }
//     });
//     $('.prev-arrow').on('click', function() {
//         owl.trigger('prev.owl.carousel', [300]);
//     })
    
//     $('.next-arrow').on('click', function() {
//         owl.trigger('next.owl.carousel', [300]);
//     })
// });




// Order Now window
let btn = document.querySelector('.show');
let close = document.querySelector('.close');


// Show modal

function show() {
	document.querySelector('.modal')
			.classList.add('active');

	document.querySelector('.modal__body')
			.classList.add('active');
}
btn.addEventListener('click', show);


// Close modal

function hide() {
	document.querySelector('.modal')
			.classList.remove('active');

	document.querySelector('.modal__body')
			.classList.remove('active');
}
close.addEventListener('click', hide);

