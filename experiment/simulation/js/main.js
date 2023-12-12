//Your JavaScript goes in here
function openNav(){
  document.getElementById("mySidepanel").style.width = "70%";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

let a = document.getElementById("ON_Colour_00000047051415409897287890000006281759149872837786_");
let b = document.getElementById("ON_Status");
let c = document.getElementById("OFF_Colour");
let d = document.getElementById("OFF_Status_00000183957286666147833460000011789904425426556042_");
let e = document.getElementById("Laser_Before_Diffraction")
let f = document.getElementById("second")// after passing diffraction grating
let g = document.getElementById("Screen_Front_View")
let h = document.getElementById("word")
let i = document.getElementById("class_laser")
/**********function for power supply**************/

function powerButton(){
  a.style.opacity = 1
  b.style.opacity = 1
  c.style.opacity = 0
  d.style.opacity = 0
  i.style.opacity = 0
  setTimeout(() => {
    e.style.opacity = 1
  },1000);
  setTimeout(()=>{
    f.style.opacity = 1
  },1100);
  setTimeout(()=>{
    i.style.opacity = 1
  },1100);
  setTimeout(() => {
    g.style.opacity = 0.5
  },1300);
  setTimeout(() => {
    g.style.opacity = 1
  }, 1350);
  setTimeout(() => {
    h.style.opacity = 0.5
  },1300);
  setTimeout(() => {
    h.style.opacity = 1
  }, 1350);
}


