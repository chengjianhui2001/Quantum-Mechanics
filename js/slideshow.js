'use strict';

// function definitions
const nextSlides = function () {
    $currentSlide.fadeOut();
    $('#indicator li').eq($currentSlide.index()).removeClass("light");
    if ( $currentSlide.is( $lastSlide ) ) {
        $currentSlide = $firstSlide;
        } else {
        $currentSlide = $currentSlide.next();
    }
    $currentSlide.fadeIn();
    $('#indicator li').eq($currentSlide.index()).addClass("light");
}

const prevSlides = function () {
    $currentSlide.fadeOut();
    $('#indicator li').eq($currentSlide.index()).removeClass("light");
    if ( $currentSlide.is( $firstSlide) ) {
        $currentSlide = $lastSlide;
        } else {
        $currentSlide = $currentSlide.prev();
    }
    $currentSlide.fadeIn();
    $('#indicator li').eq($currentSlide.index()).addClass("light");
}
    

// variable declarations
let $slideshow = $( '#slideshow' );
let $slides = $( '#slideshow figure' );
let $firstSlide = $slides.first();
let $lastSlide = $slides.last();
let $currentSlide = $firstSlide;

// script initialisation
$slides.not( $currentSlide).hide();
$('#next').on( 'click', nextSlides );0
$('#p').on( 'click', prevSlides );