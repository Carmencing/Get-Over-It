let monster = {
  name: "monster-rat",
  score: 0,
  image: "images/monster-rat.jpg"
}

let chuck = {
  name: "chuck-e-cheese",
  score: 0,
  image: "images/chuck-e-cheese.jpg"
}

let subway = {
  name: "ny-subway-rat",
  score: 0,
  image: "images/newyork-subway-rat.jpg"
}

let splinter = {
  name: "master-splinter",
  score: 0,
  image: "images/master-splinter.jpg"
}

let mickey = {
  name: "mickey-mouse",
  score: 0,
  image: "images/mickey-mouse.jpeg"
}

let minnie = {
  name: "minnie-mouse",
  score: 0,
  image: "images/minnie-mouse.jpeg"
}

let remy = {
  name: "remy-rat",
  score: 0,
  image: "images/remy-rat.jpg"
}

let jerry = {
  name: "jerry-mouse",
  score: 0,
  image: "images/jerry-mouse.jpg"
}

function changeImage(){
  i++;
  document.querySelector(".currImage").src =     mice[i].image;
}

let mice = [
  monster, chuck, subway, splinter, mickey, minnie, remy, jerry 
]
let i = 0;
document.querySelector(".currImage").src = mice[i].image;


let ratsDapped = 0;
document.querySelector(".Dap").onclick = function(){
  checkEnd(i);
  changeImage()
  ratsDapped++;
}

document.querySelector(".Slap").onclick = function(){
  checkEnd(i);
  changeImage()
}

function checkEnd(i){
  if(i === mice.length-1){
    if(ratsDapped <4){
      window.location.href="hateRats.html";
    }
    else if(ratsDapped <7){
      window.location.href="neutralRat.html";
    }
    else{
      window.location.href="likeRats.html";
    }
  }
}



