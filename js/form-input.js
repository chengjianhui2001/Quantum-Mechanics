'use strict'

// function definitions
const clearName = function (event) {
  console.log(username.id, username.value);
  // username.value='';
  username.value=username.defaultValue;
}

const clearEmail = function (event) {
    console.log(useremail.id, useremail.value);
    useremail.value=useremail.defaultValue;
  }


const remainingChars = function (event) {
  let element = event.currentTarget;
  console.log(element.id, element.value);
  let remain = element.maxLength-element.value.length;
  if(remain>1){
    remainingOutput.value=remain+'characters left';
  }else{
    remainingOutput.value=remain+'character left';
  }
  
}

const checkForm = function (event) {
  event.preventDefault();
  if(username.value&&useremail.value&&age.value&&message.value){
    contactForm.submit();
  }else{
    error.classList.add('show');
    username.focus();
  }
};


// variable declarations
let contactForm = document.querySelector( '#contactForm' );
let username = document.querySelector( '#username' );
let clearButton = document.querySelector( '#clearButton' );
let clearButton2 = document.querySelector( '#clearButton2' );
let age = document.querySelector( '#age' );
let message = document.querySelector( '#message' );
let remainingOutput = document.querySelector( '#remainingOutput' );
let error = document.querySelector( '#error' );


// script initialisation
clearButton.addEventListener('click', clearName);
clearButton2.addEventListener('click', clearEmail);
message.addEventListener( 'input', remainingChars );
contactForm.addEventListener('submit',checkForm);