
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


function home(){
  let freccia = document.getElementById("icona-freccia");
  freccia.style.rotate = "0deg";
  freccia.style.cursor = "cursor"; 
  let scroll = document.getElementById("scroll");
  scroll.style.animationName="freccia" 
}

window.addEventListener('scroll', () => {
  let freccia = document.getElementById("icona-freccia");
  freccia.style.rotate = "180deg";
  freccia.style.cursor = "pointer"; 
  let scroll = document.getElementById("scroll");
  scroll.style.animationName="stop" 
});

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

