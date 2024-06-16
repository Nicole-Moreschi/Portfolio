
//breackpoint mobile
if(window.innerHeight > window.innerWidth){
  let css = document.getElementById("cssProgetti");
  css.href = "../styles/projects_mobile.css"

  // let bio2 = document.getElementById("bio2");
  // bio2.style.display = "none";

  // let getintouch = document.getElementById("get-in-touch");
  // getintouch.style.display = "none";

  // let hello = document.getElementById("hello");
  // hello.style.display = "none";

  // let credits = document.getElementById("credits");
  // credits.style.display = "none";

  // let tWorks = document.getElementById("t-works");
  // tWorks.style.display = "none";

  // let gap2 = document.getElementById("gap2");
  // gap2.style.display = "none";
  
  // opacità = 0.3;
}


//---------------------------- get mouse x,y -------------------------//
const pos = { x : 0, y : 0 };

const saveCursorPosition = function(x, y) {
        pos.x = (x / window.innerWidth).toFixed(2);
        pos.y = (y - window.innerHeight/4 )+ "px";

        document.documentElement.style.setProperty('--x', pos.x);
        document.documentElement.style.setProperty('--y', pos.y);
     }

  document.addEventListener('mousemove', e => { saveCursorPosition(e.clientX, e.clientY); })
  
  
  
  let i = 0;

  function index(){
    window.location.href = '../index.html'
}

function contatti(){
    let contatti = document.getElementById("get-in-touch");
    contatti.style.display = "none";
    let links = document.getElementById("links");
    links.style.display = "flex";
}

function noContatti(){
    let contatti = document.getElementById("get-in-touch");
    contatti.style.display = "flex";
    let links = document.getElementById("links");
    links.style.display = "none";
}



function menu(){
  if (i==0){
  let menuProgetti = document.getElementById("menuProgetti");
  menuProgetti.style.display = "flex"; 
  let iconaMenu = document.getElementById("iconaMenu");
  iconaMenu.src = "../assets/icons/close.svg"; 

  scrollTo(document.getElementById("content"));

    let scroll = document.getElementById("scroll");
    scroll.style.display="none"
    let content = document.getElementById("content");
    content.style.zIndex = "-1";
    let sez0 = document.getElementById("sez0");
    sez0.style.opacity = "0.25"; 
    sez0.style.filter = "blur(0.2vw)";
    
    let scrollProgetto = document.getElementById("scrollProgetto");
    scrollProgetto.style.opacity = "0.25"; 
    scrollProgetto.style.filter = "blur(0.2vw)";

    setTimeout(hideProj, 500);   

    i=1  

  } else if (i==1){
    let menuProgetti = document.getElementById("menuProgetti");
    menuProgetti.style.display = "none"; 
    let iconaMenu = document.getElementById("iconaMenu");
    iconaMenu.src = "../assets/icons/menu.svg"; 

    let scroll = document.getElementById("scroll");
    scroll.style.display="flex"
    let content = document.getElementById("content");
    content.style.zIndex = "-1";

    let sez0 = document.getElementById("sez0");
    sez0.style.opacity = "1"; 
    sez0.style.filter = "blur(0)";
    
    let scrollProgetto = document.getElementById("scrollProgetto");
    scrollProgetto.style.opacity = "1"; 
    scrollProgetto.style.filter = "blur(0)";
    scrollProgetto.style.display = "block";

    setTimeout(showProj, 500);   

    i=0
  }
}



function anteprima1(){
  let anteprima = document.getElementById("menuPrev1");
  anteprima.style.display = "flex"; 
  anteprima.src = "../assets/previews/min/preview1.png"
}

function anteprima2(){
  let anteprima = document.getElementById("menuPrev2");
  anteprima.style.display = "flex"; 
  anteprima.src = "../assets/previews/min/preview2.png"
}

function anteprima3(){
  let anteprima = document.getElementById("menuPrev3");
  anteprima.style.display = "flex"; 
  anteprima.src = "../assets/previews/min/preview3.png"
}

function anteprima4(){
  let anteprima = document.getElementById("menuPrev4");
  anteprima.style.display = "flex"; 
  anteprima.src = "../assets/previews/min/preview4.png"
}

function anteprima5(){
  let anteprima = document.getElementById("menuPrev5");
  anteprima.style.display = "flex"; 
  anteprima.src = "../assets/previews/min/preview5.png"
}

function anteprima6(){
  let anteprima = document.getElementById("menuPrev6");
  anteprima.style.display = "flex"; 
  anteprima.src = "../assets/previews/min/preview6.png"
}

function anteprima7(){
  let anteprima = document.getElementById("menuPrev7");
  anteprima.style.display = "flex"; 
  anteprima.src = "../assets/previews/min/preview7.png"
}

function anteprima8(){
  let anteprima = document.getElementById("menuPrev8");
  anteprima.style.display = "flex"; 
  anteprima.src = "../assets/previews/min/preview8.png"
}

function anteprima9(){
  let anteprima = document.getElementById("menuPrev9");
  anteprima.style.display = "flex"; 
  anteprima.src = "../assets/previews/min/preview9.png"
}

function anteprima10(){
  let anteprima = document.getElementById("menuPrev10");
  anteprima.style.display = "flex"; 
  anteprima.src = "../assets/previews/min/preview10.png"
}

function anteprima11(){
  let anteprima = document.getElementById("menuPrev11");
  anteprima.style.display = "flex"; 
  anteprima.src = "../assets/previews/min/preview11.png"
}

function anteprima12(){
  let anteprima = document.getElementById("menuPrev12");
  anteprima.style.display = "flex"; 
  anteprima.src = "../assets/previews/min/preview12.png"
}

function NOanteprima1(){
  let anteprima = document.getElementById("menuPrev1");
  anteprima.style.display = "none"; 
}

function NOanteprima2(){
  let anteprima = document.getElementById("menuPrev2");
  anteprima.style.display = "none"; 
}

function NOanteprima3(){
  let anteprima = document.getElementById("menuPrev3");
  anteprima.style.display = "none"; 
}

function NOanteprima4(){
  let anteprima = document.getElementById("menuPrev4");
  anteprima.style.display = "none"; 
}

function NOanteprima5(){
  let anteprima = document.getElementById("menuPrev5");
  anteprima.style.display = "none"; 
}

function NOanteprima6(){
  let anteprima = document.getElementById("menuPrev6");
  anteprima.style.display = "none"; 
}

function NOanteprima7(){
  let anteprima = document.getElementById("menuPrev7");
  anteprima.style.display = "none"; 
}

function NOanteprima8(){
  let anteprima = document.getElementById("menuPrev8");
  anteprima.style.display = "none"; 
}

function NOanteprima9(){
  let anteprima = document.getElementById("menuPrev9");
  anteprima.style.display = "none"; 
}

function NOanteprima10(){
  let anteprima = document.getElementById("menuPrev10");
  anteprima.style.display = "none"; 
}

function NOanteprima11(){
  let anteprima = document.getElementById("menuPrev11");
  anteprima.style.display = "none"; 
}

function NOanteprima12(){
  let anteprima = document.getElementById("menuPrev12");
  anteprima.style.display = "none"; 
}

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll/window.innerHeight > 0.2){
    scrollProj()
  } else if (scroll/window.innerHeight < 0.2){
    home()
  }
});

function home(){
  let freccia = document.getElementById("icona-freccia");
  freccia.style.rotate = "0deg";
  freccia.style.cursor = "pointer"; 
  let scroll = document.getElementById("scroll");
  scroll.style.animationName="freccia" 
}

function scrollProj(){
let freccia = document.getElementById("icona-freccia");
freccia.style.rotate = "180deg";
freccia.style.cursor = "pointer"; 
let scroll = document.getElementById("scroll");
scroll.style.animationName="stop" 
}


function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop 
  });
}
document.getElementById("icona-freccia").addEventListener('click', () => {
  scrollTo(document.getElementById("content"));
});

function hideProj(){
  let scrollProgetto = document.getElementById("scrollProgetto");
  scrollProgetto.style.display = "none"; 
}

function showProj(){
  let scrollProgetto = document.getElementById("scrollProgetto");
  scrollProgetto.style.display = "block"; 
}

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll/window.innerHeight > 1.3){
      var vid = document.getElementById("videoProgettuale"); 
      vid.play(); 
  }
});

function progetto1() {
  window.location.href = "./progetto1.html";
}
function progetto2() {
  window.location.href = "./progetto2.html";
}
function progetto3() {
  window.location.href = "./progetto3.html";
}
function progetto4() {
  window.location.href = "./progetto4.html";
}
function progetto5() {
  window.location.href = "./progetto5.html";
}
function progetto6() {
  window.location.href = "./progetto6.html";
}
function progetto7() {
  window.location.href = "./progetto7.html";
}
function progetto8() {
  window.location.href = "./progetto8.html";
}
function progetto9() {
  window.location.href = "./progetto9.html";
}
function progetto10() {
  window.location.href = "./progetto10.html";
}
function progetto11() {
  window.location.href = "./progetto11.html";
}
function progetto12() {
  window.location.href = "./progetto12.html";
}

function noBar(){
  let bar = document.getElementById("scrollbar");
  bar.style.display = "none"; 
}