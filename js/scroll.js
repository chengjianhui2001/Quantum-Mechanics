'use strict';

// function definitions
const selectLink = function (event) {
    console.log('clicked on', event.currentTarget);
    highlightLink( event.currentTarget );
}

const highlightLink = function ( element ) {
    for ( let link of links ) {
        link.classList.remove( 'selected' );
    }
    element.classList.add( 'selected' );
}

const checkSections = function (entries) {
    // console.log( entries );
    for ( let entry of entries ) {
        if ( entry.intersectionRatio >= 0.5 ) {
            console.log( 'scrolled to', entry.target );
            let hash = '#' + entry.target.id;
            for ( let link of links ) {
                if ( link.hash === hash ) highlightLink( link );
            }
        }
    }
}
    
const scrollAmount = function (element) {
    let scrollTop = innerHeight - element.getBoundingClientRect().top;
    let scrollHeight = element.offsetHeight + innerHeight;
    let scrollValue = scrollTop / scrollHeight;
    return scrollValue;

}


// variable declarations
let links = document.querySelectorAll('nav a');
let observer = new IntersectionObserver(checkSections, {threshold:[0.5]});
let sections = document.querySelectorAll( 'section' );


// script initialisation
imagesLoaded( 'body', { background: 'section' }, function () {
    document.querySelector( '#preloader' ).classList.add( 'loaded' );
    setTimeout( function () {
        AOS.init( { 
            'anchor-placement':'center-center',
            'delay': 1500,
            'easing': 'ease',
            'duration': 1000,
            'mirror': true,
            'offset': 100,
            'once': false 
        } );
    }, 1000 );
} );  

for ( let link of links ) {
    link.addEventListener('click', selectLink);   
}

document.body.scrollIntoView();

for ( let section of sections ) {
    observer.observe( section );
}