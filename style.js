var menu=0;
document.onscroll = showPic;
var nameLine=document.querySelectorAll(".line");
function showPic(){
  var pic= document.getElementById("pic")
  if (pic.getBoundingClientRect().top<20){
    pic.style.animation = "slidein 0.5s forwards";
    document.querySelectorAll(".navigation")[0].style.display="block";
    document.querySelectorAll(".navigation")[0].style.animation="fadein 1s forwards";
    //document.querySelectorAll(".navigationMobile")[0].style.animation="fadein 1s forwards";
  }
}
function namePopIn() {
  letters = document.querySelectorAll(".letter");
  letters.forEach((i) => {
    var t = 0.4 + Math.random() * 1;
    i.style.animation = "intro " + t + "s " + "forwards";
  });
  setTimeout(() => {
    document.getElementById("frontButton").style.animation = "fadein 1s forwards";
    document.getElementById("message1").innerHTML = "<h1>This website entirely made from CSS, HTML and Javascript from scratch! without using any library. Website is made to adopt to size of the Screen (Require Refresh To adopt to mobile sizes).</h1><h1>[Last Updated: Oct 2021]</h1>";
    document.getElementById("message1").style.animation = "fadein 1s forwards";
    // document.querySelector(".container").style.animation = "welcomeUp 1s forwards";
  },  500);
}
//document.onscroll = namePopIn();

var width = window.innerWidth;
var height = window.innerHeight;
invert();

if(width/height<0.9){
  nameLine[0].style.display="block";
  nameLine[1].style.display="block";
  document.getElementById("caption").className = "captionMobile";
   document.getElementById("contact").className = "contactMobile";
  //document.getElementById("menuDesk").style.top="-200vh";
   document.getElementById("menuDesk").className="navigationMobile";
  document.getElementById("button").style.display="block";
 }
function toggleMenu(){
  console.log(menu);
  if(menu==0){ 
    menu=1;
    console.log("dsds");
     document.getElementById("menuDesk").style.display="inline-block";
    document.getElementById("menuDesk").style.animation="slideInMenu 1s forwards";
  }else{
    menu=0;
    document.getElementById("menuDesk").style.animation="slideOutMenu 1s forwards";
     setTimeout(() => {
      document.getElementById("menuDesk").style.display="none";
    }, 1000);
     
  }
}
function invert() {
  timeLine = document.querySelectorAll(".timeLineData");
  projects = document.querySelectorAll(".project");
  tableData=document.querySelectorAll(".tableData");
  line = document.querySelectorAll("#line");
  if(width/height>1.1){
    for (let i = 0; i < timeLine.length; i++) {
      if (i % 2 != 0) {
          timeLine[i].style.left = "-60%";
         // timeLine[i].style.float = "left";
      } else {
          timeLine[i].style.left = "70%";
         // timeLine[i].style.float = "right";
      }
      //document.getElementById("line").style.height=(i+1)*4+"vh";
    }
  }else{
    for (let i = 0; i < timeLine.length; i++) {
     
          timeLine[i].style.left = "100%";
         // timeLine[i].style.float = "left";
     
      document.getElementById("line").style.left="-25%";
    }
  }
  if(width/height>1.67){
    for (let i = 0; i < projects.length; i++) {
      if (i % 2 != 0) {
        //projects[i].style.direction = "rtl";
        tableData[i*2+0].style.float="right";
        tableData[i*2+ 1].style.float = "right";
        }else{
          tableData[i*2+0].style.float="left";
          tableData[i*2+ 1].style.float = "left";
        }
    }
  }else{
    for (let i = 0; i < projects.length; i++) {
      
        //projects[i].style.direction = "rtl";
        tableData[i].style.float="center";
        
    }
  }
  
}
welcome();
function welcome() {
  var t = 2.5;
  //var element = document.querySelector("#welcome");
  document.getElementById("message").style.animation = "messagePop " + t + "s forwards";
  setTimeout(() => {
    document.getElementById("message").innerHTML = "<h1>I'm</h1>"
  }, t * 670);


  setTimeout(() => {
    //document.querySelector("#nav").style.animation = "navPop 1s forwards";
   // document.querySelector(".container").style.animation = "welcomeUp 1s forwards";
    namePopIn();
    
  }, t * 900);

}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});