$(document).foundation();

var diffDelay = 8;    //seconds each image is displayed
var totalLength = 40; //total seconds of the img fading animation

//update animation-delay to give illusion of going to previous slide
function prevSlide() {
  var slides = document.getElementsByClassName('cf4img');
  var labels = document.getElementsByClassName('cf4label');
  for(var i = 0; i < slides.length; i++) {
    //update slides by manipulating animation-delay
    var currentDelayString = window.getComputedStyle(slides[i],null).getPropertyValue("animation-delay");
    var currentDelay = parseInt(currentDelayString.substring(0,currentDelayString.length-1));
    var newDelay = currentDelay + diffDelay;
    if(newDelay > 0) newDelay -= totalLength;
    slides[i].style.setProperty('animation-delay', newDelay.toString()+'s');

    //update image labels by manipulating animation-delay
    currentDelayString = window.getComputedStyle(labels[i],null).getPropertyValue("animation-delay");
    currentDelay = parseInt(currentDelayString.substring(0,currentDelayString.length-1));
    newDelay = currentDelay + diffDelay;
    if(newDelay > 0) newDelay -= totalLength;
    labels[i].style.setProperty('animation-delay', newDelay.toString()+'s');
  }
}

//update animation-delay to give illusion of going to next slide
function nextSlide() {
  var slides = document.getElementsByClassName('cf4img');
  var labels = document.getElementsByClassName('cf4label');
  for(var i = 0; i < slides.length; i++) {
    //update slides by manipulating animation-delay
    var currentDelayString = window.getComputedStyle(slides[i],null).getPropertyValue("animation-delay");
    var currentDelay = parseInt(currentDelayString.substring(0,currentDelayString.length-1));
    var newDelay = currentDelay - diffDelay;
    if(newDelay <= totalLength*(-1)) newDelay += totalLength;
    slides[i].style.setProperty('animation-delay', newDelay.toString()+'s');

    //update image labels by manipulating animation-delay
    currentDelayString = window.getComputedStyle(labels[i],null).getPropertyValue("animation-delay");
    currentDelay = parseInt(currentDelayString.substring(0,currentDelayString.length-1));
    newDelay = currentDelay - diffDelay;
    if(newDelay <= totalLength*(-1)) newDelay += totalLength;
    labels[i].style.setProperty('animation-delay', newDelay.toString()+'s');
  }
}

/* Handling image resizing and starting animation below */

var minHomeImgRatio = 1.5;  //min width:height ratio of homepage background img
var maxHomeImgRatio = 1.77; //max width:height ratio of homepage background img

//resize background images depending on window ratio and hide loading gif once images, stylesheets, etc. has loaded
//and resize background images depending on window ratio
window.addEventListener("load", function(event) {
  var cf4div = document.getElementById("cf4");
  if(cf4div !== null && window.innerWidth/window.innerHeight < minHomeImgRatio) {
    cf4div.style.width = (window.innerHeight*maxHomeImgRatio).toString()+"px";
    cf4div.style.height = (window.innerHeight).toString()+"px";
  }
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
