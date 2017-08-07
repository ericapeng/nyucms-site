$(document).foundation();

var diffDelay = 8;    //seconds each image is displayed
var totalLength = 40; //total seconds of the img fading animation

//update animation-delay to give illusion of going to previous slide
function prevSlide() {
  var slides = document.getElementsByClassName('cf4img');
  for(var i = 0; i < slides.length; i++) {
    var currentDelayString = window.getComputedStyle(slides[i],null).getPropertyValue("animation-delay");
    var currentDelay = parseInt(currentDelayString.substring(0,currentDelayString.length-1));
    var newDelay = (currentDelay + diffDelay) % totalLength;
    slides[i].style.setProperty('animation-delay', newDelay.toString()+'s');
  }
  //update the bottom link as well
  slideIndex -= 2;
  if(slideIndex < 0){ slideIndex += 5}
  slidesPaused = 0;
  showSlides(diffDelay*1000 - remaining);
  slidesPaused = 1;
}

//update animation-delay to give illusion of going to next slide
function nextSlide() {
  var slides = document.getElementsByClassName('cf4img');
  for(var i = 0; i < slides.length; i++) {
    var currentDelayString = window.getComputedStyle(slides[i],null).getPropertyValue("animation-delay");
    var currentDelay = parseInt(currentDelayString.substring(0,currentDelayString.length-1));
    var newDelay = currentDelay - diffDelay;
    if(newDelay < 0) newDelay + totalLength;
    newDelay = newDelay % totalLength;
    slides[i].style.setProperty('animation-delay', newDelay.toString()+'s');
  }
  //update the bottom imglabel as well
  slidesPaused = 0;
  showSlides(diffDelay*1000 - remaining);
  slidesPaused = 1;
}

var slideIndex = 0;         //slide being displayed
var slidesPaused = 0;       //whether the screen is being hovered or not
var timeLastSwitched = 0;   //the last time the slides switched
var timePaused = 0;         //time when mouse entered and slides stopped
var remaining = 0;          //remaining time to play when mouse leaves
var calls = [];             //calls to execute set by setTimeout

var minHomeImgRatio = 1.5;  //min width:height ratio of homepage background img
var maxHomeImgRatio = 1.77; //max width:height ratio of homepage background img

//start imglabel switching once images, stylesheets, etc. has loaded
//and resize background images depending on window ratio
window.addEventListener("load", function(event) {
  var cf4div = document.getElementById("cf4");
  if(cf4div !== null && window.innerWidth/window.innerHeight < minHomeImgRatio) {
    cf4div.style.width = (window.innerHeight*maxHomeImgRatio).toString()+"px";
    cf4div.style.height = (window.innerHeight).toString()+"px";
  }
  showSlides(diffDelay*1000 - 500);
  //setTimeout(displayHome, 2000);
  displayHome();
});

window.onresize = function(event) {
  var cf4div = document.getElementById("cf4");
  //if they're on a mobile phone, resize when they rotate their phone
  if(cf4div !== null) {
    if(window.innerWidth/window.innerHeight < minHomeImgRatio) {
      cf4div.style.width = (window.innerHeight*maxHomeImgRatio).toString()+"px";
      cf4div.style.height = (window.innerHeight).toString()+"px";
    }
    else {
      cf4div.style.width = (window.innerWidth).toString()+"px";
      cf4div.style.height = (window.innerHeight).toString()+"px";
    }
  }
}

//let the page completely load and then hide the loader
function displayHome() {
  var loading = document.getElementById("loading");
  if(loading !== null) {
    loading.style.display = "none";
  }
}

//if mouse is not hovered, switch imglabels every diffDelay seconds
function showSlides(waitTime) {
  if(!slidesPaused) {
    timeLastSwitched = new Date();
    var i;
    var slides = document.getElementsByClassName("imglabel");
    if(slides.length !== 0){
      var slidesArray = Array.prototype.slice.call(slides, 0).reverse();
      for (i = 0; i < slidesArray.length; i++) {
          slidesArray[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slidesArray.length) {slideIndex = 1}
      slidesArray[slideIndex-1].style.display = "block";
      calls.push(setTimeout(showSlides.bind(null, diffDelay*1000), waitTime)); // Change image every 8 seconds
    }
  }
}

//if screen is hovered, remember the time and pause the imglabel switching
function screenHovered() {
  slidesPaused = 1;
  timePaused = new Date();
  remaining = timePaused - timeLastSwitched;
}

//if the screen is unhovered, continue imglabel switching
function screenUnhovered() {
  slidesPaused = 0;
  for(var i = 0; i < calls.length; i++) {
    clearTimeout(calls[i]);
  }
  calls.splice(0, calls.length);
  calls.push(setTimeout(showSlides.bind(null, diffDelay*1000), diffDelay*1000 - remaining));
}
