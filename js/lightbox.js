'use strict';


// function definitions
const loadImage = function ( event ) {
    event.preventDefault();
    $overlay.fadeIn();
    $image.on( 'load', showImage );
    $image.attr( 'src', event.currentTarget.href );
    $('#navigation').hide();
}

const loadText = function (event) {
    event.preventDefault();
    $p.text(event.currentTarget.getAttribute("data-caption"));
}

const showImage = function ( event ) {
    $lightbox.fadeIn();
 }

 const closeLightbox = function ( event ) {
    $image.off( 'load', showImage );
    $overlay.fadeOut();
    $lightbox.fadeOut();
    $('#navigation').show();
}

const cannotClick=function(event){
    event.stopPropagation();
}

// variable declarations
let $overlay, $lightbox, $image, $close, $p;


// script initialisation
$overlay = $( '<div id="lightboxOverlay">' );
$lightbox = $( '<div id="lightboxContainer">' )
$image = $( '<img id="lightboxImage">' );
$close = $( '<img id="lightboxClose" src="images/close-button.png">' );
$p = $( '<p id=caption>')
$( 'body' ).append( $overlay );
$overlay.append( $lightbox );
$lightbox.append( $image, $p, $close );
$overlay.hide();
$lightbox.hide();
$( 'a[data-lightbox]' ).on( 'click', loadImage );
$( 'a[data-lightbox]' ).on( 'click', loadText );
$close.on( 'click', closeLightbox );
$overlay.on( 'click', closeLightbox );
$image.on('click',cannotClick)