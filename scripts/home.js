


function overImg(){
    let imgN = document.getElementById("imgNicole");
    imgN.style.display = "block";
}


function noOverImg(){
    let imgN = document.getElementById("imgNicole");
    imgN.style.display = "none";
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

function ruota(){
    let freccia = document.getElementById("icona-freccia");
    freccia.style.rotate = "0deg";
    freccia.style.cursor = "cursor"; 
    let scroll = document.getElementById("scroll");
    scroll.style.animationName="freccia" 
    let testo = document.getElementById("t-works");
    testo.style.display = "flex"; 
    let content = document.getElementById("content");
    content.style.zIndex = "1";

    let filtri1 = document.getElementById("dataviz");
    filtri1.style.opacity = "1"; 
    filtri1.style.filter = "blur(0)";
    let dataviz = document.getElementById("datavix-text");
    dataviz.style.pointerEvents = "auto"; 
    let filtri2 = document.getElementById("ux-ui");
    filtri2.style.opacity = "1"; 
    filtri2.style.filter = "blur(0)";
    let uxui = document.getElementById("ux-ui-text");
    uxui.style.pointerEvents = "auto"; 
    let filtri3 = document.getElementById("interaction");
    filtri3.style.opacity = "1"; 
    filtri3.style.filter = "blur(0)";
    let interaction = document.getElementById("interaction-text");
    interaction.style.pointerEvents = "auto"; 
    let filtri4 = document.getElementById("branding");
    filtri4.style.opacity = "1"; 
    filtri4.style.filter = "blur(0)";
    let branding = document.getElementById("branding-text");
    branding.style.pointerEvents = "auto"; 
    let filtri5 = document.getElementById("editorial");
    filtri5.style.opacity = "1"; 
    filtri5.style.filter = "blur(0)";
    let editorial = document.getElementById("editorial-text");
    editorial.style.pointerEvents = "auto";
}

window.addEventListener('scroll', () => {
    let freccia = document.getElementById("icona-freccia");
    freccia.style.rotate = "180deg";
    freccia.style.cursor = "pointer"; 
    let scroll = document.getElementById("scroll");
    scroll.style.animationName="stop" 
    let testo = document.getElementById("t-works");
    testo.style.display = "none"; 
    let content = document.getElementById("content");
    content.style.zIndex = "-1";

    let filtri1 = document.getElementById("dataviz");
    filtri1.style.opacity = "0.5"; 
    filtri1.style.filter = "blur(0.2vw)";
    let dataviz = document.getElementById("datavix-text");
    dataviz.style.pointerEvents = "none"; 
    let filtri2 = document.getElementById("ux-ui");
    filtri2.style.opacity = "0.5"; 
    filtri2.style.filter = "blur(0.2vw)";
    let uxui = document.getElementById("ux-ui-text");
    uxui.style.pointerEvents = "none"; 
    let filtri3 = document.getElementById("interaction");
    filtri3.style.opacity = "0.5"; 
    filtri3.style.filter = "blur(0.2vw)";
    let interaction = document.getElementById("interaction-text");
    interaction.style.pointerEvents = "none"; 
    let filtri4 = document.getElementById("branding");
    filtri4.style.opacity = "0.5"; 
    filtri4.style.filter = "blur(0.2vw)";
    let branding = document.getElementById("branding-text");
    branding.style.pointerEvents = "none"; 
    let filtri5 = document.getElementById("editorial");
    filtri5.style.opacity = "0.5"; 
    filtri5.style.filter = "blur(0.2vw)";
    let editorial = document.getElementById("editorial-text");
    editorial.style.pointerEvents = "none"; 
    freccia.style.cursor = "pointer"; 
  });



  function scrollTo(element) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop 
    });
  }
  document.getElementById("datavix-text").addEventListener('click', () => {
    scrollTo(document.getElementById("prog1"));
  });
  document.getElementById("ux-ui-text").addEventListener('click', () => {
    scrollTo(document.getElementById("prog2"));
  });
  document.getElementById("interaction-text").addEventListener('click', () => {
    scrollTo(document.getElementById("prog3"));
  });
  document.getElementById("branding-text").addEventListener('click', () => {
    scrollTo(document.getElementById("prog7"));
  });
  document.getElementById("editorial-text").addEventListener('click', () => {
    scrollTo(document.getElementById("prog9"));
  });
  document.getElementById("icona-freccia").addEventListener('click', () => {
    scrollTo(document.getElementById("sez0"));
  });

  function progetto1(){
    window.location.href = './pages/progetto1.html'
}

