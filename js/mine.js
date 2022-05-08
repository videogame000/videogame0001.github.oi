function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
function changeBackground(){
        var element = document.getElementById("change");
        element.style.backgroundColor = "black";
element.style.color = "green";
        //element.style.backgroundColor = "#00FF00";
var element = document.getElementById("ch");
        element.style.backgroundColor = "black";
element.style.color = "green";

var element = document.getElementById("cha");
        element.style.backgroundColor = "black";
        element.style.color = "green";
var video = document.getElementById('video');
var source = document.getElementById('source');

source.setAttribute('src', '../media/darkmode.mp4');
video.load();
video.play();

    }
function light(){
        var element = document.getElementById("change");
        element.style.backgroundColor = "#70db70";
element.style.color = "#004d00";
        //element.style.backgroundColor = "#70db70";
var element = document.getElementById("ch");
        element.style.backgroundColor = "#70db70";
element.style.color = "#004d00";

var element = document.getElementById("cha");
        element.style.backgroundColor = "#bbff99";
        element.style.color = "#004d00";
var video = document.getElementById('video');
var source = document.getElementById('source');

source.setAttribute('src', '../media/lightmode.mp4');
video.load();
video.play();
}