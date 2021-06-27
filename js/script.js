let yellow = document.getElementById("yellow")
let darkgray = document.getElementById("darkgray")
let lightgray = document.getElementById("lightgray")
let workfield = document.getElementById("workid")
let projstatus = false;
let leerstatus = false;

function HomeToWork(){
    if(projstatus == true && leerstatus == true)
    {
        document.getElementById("home").style.borderBottom ="none";
        document.getElementById("projlink").style.borderBottom ="none";
        document.getElementById("work").style.borderBottom ="2px solid black";
        document.getElementById("work").style.pointerEvents ="none";
    }
    else
    {
        document.getElementById("home").style.borderBottom ="none";
        document.getElementById("projlink").style.borderBottom ="none";
        document.getElementById("work").style.borderBottom ="2px solid black";
        document.getElementById("work").style.pointerEvents ="none";
        yellow.classList.add("work1");
        darkgray.classList.add("work1");
        lightgray.classList.add("work1");
        lightgray.style.zIndex="7";
        setTimeout(function(){ yellow.classList.add("working"); }, 1000);
        setTimeout(function(){ darkgray.classList.add("working"); }, 1000);
        setTimeout(function(){ lightgray.classList.add("working"); }, 1000);
        setTimeout(function(){ workfield.style.display="block"; }, 700);
        setTimeout(function(){ workfield.style.opacity="1"; }, 1500);
        setTimeout(function(){ document.getElementById("fixy").style.display = "none"; }, 1500);
        setTimeout(function(){ yellow.style.zIndex="4"; }, 2200);
        setTimeout(function(){ darkgray.style.zIndex="3"; }, 2200);
        setTimeout(function(){ lightgray.style.zIndex="1"; }, 2200);
        setTimeout(function(){ workfield.style.zIndex="2"; }, 3500);
        leerstatus = true;
    }
} 

function WorkToHome(){
    document.getElementById("home").style.borderBottom ="2px solid black";
    document.getElementById("work").style.borderBottom ="none";
    document.getElementById("projlink").style.borderBottom ="none";
    document.getElementById("work").style.pointerEvents ="all";
    setTimeout(function(){ workfield.style.display="none"; }, 1000);
    workfield.style.opacity="0";
    workfield.style.display="none";
    setTimeout(function(){ workfield.style.zIndex="9"; }, 200);
    yellow.style.zIndex="1";
    setTimeout(function(){ lightgray.style.zIndex="5"; }, 400);
    yellow.classList.remove("working");
    darkgray.classList.remove("working");
    lightgray.classList.remove("working");
    document.getElementById("fixy").style.display = "block";
    setTimeout(function(){ yellow.classList.remove("work1"); }, 1000);
    setTimeout(function(){ darkgray.classList.remove("work1"); }, 1000);
    setTimeout(function(){ lightgray.classList.remove("work1"); }, 1000);
    leerstatus = false;
}


function WorkFullYellow(){
    yellow.classList.add("full");
    darkgray.classList.add("full");
    document.getElementById("nav").style.pointerEvents = "none";
}


function BackToWork(){
    yellow.classList.remove("full");
    darkgray.classList.remove("full");
    document.getElementById("nav").style.pointerEvents = "";
}

function ToProject(){
    document.getElementById("projlink").style.borderBottom ="2px solid black";
    document.getElementById("work").style.borderBottom ="none";
    document.getElementById("home").style.borderBottom ="none";
    document.getElementById("work").style.pointerEvents ="all";
    projstatus = true;
}

function LogoPage(){
    WorkFullYellow();
    document.getElementById("logo").style.display = "block";
    setTimeout(function(){ document.getElementById("logo").style.opacity = "1"; }, 300);
}

function LogoPageReturn(){
    BackToWork();
    document.getElementById("logo").style.zIndex = "6";
    document.getElementById("logo").style.opacity = "0";
    setTimeout(function(){ document.getElementById("logo").style.display = "none"; }, 300);
}

function Poc1Page(){
    WorkFullYellow();
    document.getElementById("poc1").style.display = "block";
    setTimeout(function(){ document.getElementById("poc1").style.opacity = "1"; }, 300);
}

function Poc1PageReturn(){
    BackToWork();
    document.getElementById("poc1").style.zIndex = "6";
    document.getElementById("poc1").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc1").style.display = "none"; }, 300);
}

function Poc2Page(){
    WorkFullYellow();
    document.getElementById("poc2").style.display = "block";
    setTimeout(function(){ document.getElementById("poc2").style.opacity = "1"; }, 300);
}

function Poc2PageReturn(){
    BackToWork();
    document.getElementById("poc2").style.zIndex = "6";
    document.getElementById("poc2").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc2").style.display = "none"; }, 300);
}

function Poc3Page(){
    WorkFullYellow();
    document.getElementById("poc3").style.display = "block";
    setTimeout(function(){ document.getElementById("poc3").style.opacity = "1"; }, 300);
}

function Poc3PageReturn(){
    BackToWork();
    document.getElementById("poc3").style.zIndex = "6";
    document.getElementById("poc3").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc3").style.display = "none"; }, 300);
}

function Poc4Page(){
    WorkFullYellow();
    document.getElementById("poc4").style.display = "block";
    setTimeout(function(){ document.getElementById("poc4").style.opacity = "1"; }, 300);
}

function Poc4PageReturn(){
    BackToWork();
    document.getElementById("poc4").style.zIndex = "6";
    document.getElementById("poc4").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc4").style.display = "none"; }, 300);
}

function Poc5Page(){
    WorkFullYellow();
    document.getElementById("poc5").style.display = "block";
    setTimeout(function(){ document.getElementById("poc5").style.opacity = "1"; }, 300);
}

function Poc5PageReturn(){
    BackToWork();
    document.getElementById("poc5").style.zIndex = "6";
    document.getElementById("poc5").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc5").style.display = "none"; }, 300);
}

function Poc6Page(){
    WorkFullYellow();
    document.getElementById("poc6").style.display = "block";
    setTimeout(function(){ document.getElementById("poc6").style.opacity = "1"; }, 300);
}

function Poc6PageReturn(){
    BackToWork();
    document.getElementById("poc6").style.zIndex = "6";
    document.getElementById("poc6").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc6").style.display = "none"; }, 300);
}

function Poc7Page(){
    WorkFullYellow();
    document.getElementById("poc7").style.display = "block";
    setTimeout(function(){ document.getElementById("poc7").style.opacity = "1"; }, 300);
}

function Poc7PageReturn(){
    BackToWork();
    document.getElementById("poc7").style.zIndex = "6";
    document.getElementById("poc7").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc7").style.display = "none"; }, 300);
}

function Poc8Page(){
    WorkFullYellow();
    document.getElementById("poc8").style.display = "block";
    setTimeout(function(){ document.getElementById("poc8").style.opacity = "1"; }, 300);
}

function Poc8PageReturn(){
    BackToWork();
    document.getElementById("poc8").style.zIndex = "6";
    document.getElementById("poc8").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc8").style.display = "none"; }, 300);
}

function Poc9Page(){
    WorkFullYellow();
    document.getElementById("poc9").style.display = "block";
    setTimeout(function(){ document.getElementById("poc9").style.opacity = "1"; }, 300);
}

function Poc9PageReturn(){
    BackToWork();
    document.getElementById("poc9").style.zIndex = "6";
    document.getElementById("poc9").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc9").style.display = "none"; }, 300);
}

function Poc10Page(){
    WorkFullYellow();
    document.getElementById("poc10").style.display = "block";
    setTimeout(function(){ document.getElementById("poc10").style.opacity = "1"; }, 300);
}

function Poc10PageReturn(){
    BackToWork();
    document.getElementById("poc10").style.zIndex = "6";
    document.getElementById("poc10").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc10").style.display = "none"; }, 300);
}

function Poc11Page(){
    WorkFullYellow();
    document.getElementById("poc11").style.display = "block";
    setTimeout(function(){ document.getElementById("poc11").style.opacity = "1"; }, 300);
}

function Poc11PageReturn(){
    BackToWork();
    document.getElementById("poc11").style.zIndex = "6";
    document.getElementById("poc11").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc11").style.display = "none"; }, 300);
}

function Poc12Page(){
    WorkFullYellow();
    document.getElementById("poc12").style.display = "block";
    setTimeout(function(){ document.getElementById("poc12").style.opacity = "1"; }, 300);
}

function Poc12PageReturn(){
    BackToWork();
    document.getElementById("poc12").style.zIndex = "6";
    document.getElementById("poc12").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc12").style.display = "none"; }, 300);
}

function Poc13Page(){
    WorkFullYellow();
    document.getElementById("poc13").style.display = "block";
    setTimeout(function(){ document.getElementById("poc13").style.opacity = "1"; }, 300);
}

function Poc13PageReturn(){
    BackToWork();
    document.getElementById("poc13").style.zIndex = "6";
    document.getElementById("poc13").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc13").style.display = "none"; }, 300);
}

function Poc14Page(){
    WorkFullYellow();
    document.getElementById("poc14").style.display = "block";
    setTimeout(function(){ document.getElementById("poc14").style.opacity = "1"; }, 300);
}

function Poc14PageReturn(){
    BackToWork();
    document.getElementById("poc14").style.zIndex = "6";
    document.getElementById("poc14").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc14").style.display = "none"; }, 300);
}

function Poc15Page(){
    WorkFullYellow();
    document.getElementById("poc15").style.display = "block";
    setTimeout(function(){ document.getElementById("poc15").style.opacity = "1"; }, 300);
}

function Poc15PageReturn(){
    BackToWork();
    document.getElementById("poc15").style.zIndex = "6";
    document.getElementById("poc15").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc15").style.display = "none"; }, 300);
}

function Poc16Page(){
    WorkFullYellow();
    document.getElementById("poc16").style.display = "block";
    setTimeout(function(){ document.getElementById("poc16").style.opacity = "1"; }, 300);
}

function Poc16PageReturn(){
    BackToWork();
    document.getElementById("poc16").style.zIndex = "6";
    document.getElementById("poc16").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc16").style.display = "none"; }, 300);
}

function Poc17Page(){
    WorkFullYellow();
    document.getElementById("poc17").style.display = "block";
    setTimeout(function(){ document.getElementById("poc17").style.opacity = "1"; }, 300);
}

function Poc17PageReturn(){
    BackToWork();
    document.getElementById("poc17").style.zIndex = "6";
    document.getElementById("poc17").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc17").style.display = "none"; }, 300);
}

function Poc18Page(){
    WorkFullYellow();
    document.getElementById("poc18").style.display = "block";
    setTimeout(function(){ document.getElementById("poc18").style.opacity = "1"; }, 300);
}

function Poc18PageReturn(){
    BackToWork();
    document.getElementById("poc18").style.zIndex = "6";
    document.getElementById("poc18").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc18").style.display = "none"; }, 300);
}

function Poc19Page(){
    WorkFullYellow();
    document.getElementById("poc19").style.display = "block";
    setTimeout(function(){ document.getElementById("poc19").style.opacity = "1"; }, 300);
}

function Poc19PageReturn(){
    BackToWork();
    document.getElementById("poc19").style.zIndex = "6";
    document.getElementById("poc19").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc19").style.display = "none"; }, 300);
}

function Poc20Page(){
    WorkFullYellow();
    document.getElementById("poc20").style.display = "block";
    setTimeout(function(){ document.getElementById("poc20").style.opacity = "1"; }, 300);
}

function Poc20PageReturn(){
    BackToWork();
    document.getElementById("poc20").style.zIndex = "6";
    document.getElementById("poc20").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc20").style.display = "none"; }, 300);
}

function Poc21Page(){
    WorkFullYellow();
    document.getElementById("poc21").style.display = "block";
    setTimeout(function(){ document.getElementById("poc21").style.opacity = "1"; }, 300);
}

function Poc21PageReturn(){
    BackToWork();
    document.getElementById("poc21").style.zIndex = "6";
    document.getElementById("poc21").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc21").style.display = "none"; }, 300);
}

function Poc22Page(){
    WorkFullYellow();
    document.getElementById("poc22").style.display = "block";
    setTimeout(function(){ document.getElementById("poc22").style.opacity = "1"; }, 300);
}

function Poc22PageReturn(){
    BackToWork();
    document.getElementById("poc22").style.zIndex = "6";
    document.getElementById("poc22").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc22").style.display = "none"; }, 300);
}

function Poc23Page(){
    WorkFullYellow();
    document.getElementById("poc23").style.display = "block";
    setTimeout(function(){ document.getElementById("poc23").style.opacity = "1"; }, 300);
}

function Poc23PageReturn(){
    BackToWork();
    document.getElementById("poc23").style.zIndex = "6";
    document.getElementById("poc23").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc23").style.display = "none"; }, 300);
}

function Poc24Page(){
    WorkFullYellow();
    document.getElementById("poc24").style.display = "block";
    setTimeout(function(){ document.getElementById("poc24").style.opacity = "1"; }, 300);
}

function Poc24PageReturn(){
    BackToWork();
    document.getElementById("poc24").style.zIndex = "6";
    document.getElementById("poc24").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc24").style.display = "none"; }, 300);
}

function Poc25Page(){
    WorkFullYellow();
    document.getElementById("poc25").style.display = "block";
    setTimeout(function(){ document.getElementById("poc25").style.opacity = "1"; }, 300);
}

function Poc25PageReturn(){
    BackToWork();
    document.getElementById("poc25").style.zIndex = "6";
    document.getElementById("poc25").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc25").style.display = "none"; }, 300);
}

function Poc26Page(){
    WorkFullYellow();
    document.getElementById("poc26").style.display = "block";
    setTimeout(function(){ document.getElementById("poc26").style.opacity = "1"; }, 300);
}

function Poc26PageReturn(){
    BackToWork();
    document.getElementById("poc26").style.zIndex = "6";
    document.getElementById("poc26").style.opacity = "0";
    setTimeout(function(){ document.getElementById("poc26").style.display = "none"; }, 300);
}

function mag1zoom(){
    document.getElementById("mag1").style.display = "block";
    document.getElementById("backmagbtn").style.display = "block";
}

function mag2zoom(){
    document.getElementById("mag2").style.display = "block";
    document.getElementById("backmagbtn").style.display = "block";
}

function mag3zoom(){
    document.getElementById("mag3").style.display = "block";
    document.getElementById("backmagbtn").style.display = "block";
}

function mag4zoom(){
    document.getElementById("mag4").style.display = "block";
    document.getElementById("backmagbtn").style.display = "block";
}

function CloseMagz(){
    document.getElementById("backmagbtn").style.display = "none";
    document.getElementById("mag1").style.display = "none";
    document.getElementById("mag2").style.display = "none";
    document.getElementById("mag3").style.display = "none";
    document.getElementById("mag4").style.display = "none";
}



filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}