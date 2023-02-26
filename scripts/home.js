//---------------------------- get mouse x,y -------------------------//
const pos = { x: 0, y: 0 };

const saveCursorPosition = function (x, y) {
  pos.x = (x / window.innerWidth).toFixed(2);
  pos.y = y - window.innerHeight / 4 + "px";

  document.documentElement.style.setProperty("--x", pos.x);
  document.documentElement.style.setProperty("--y", pos.y);
};

document.addEventListener("mousemove", (e) => {
  saveCursorPosition(e.clientX, e.clientY);
});

let i = 0;

function overImg() {
  let imgN = document.getElementById("imgNicole");
  imgN.style.display = "block";
}

function noOverImg() {
  let imgN = document.getElementById("imgNicole");
  imgN.style.display = "none";
}

function contatti() {
  let contatti = document.getElementById("get-in-touch");
  contatti.style.display = "none";
  let links = document.getElementById("links");
  links.style.display = "flex";
}

function noContatti() {
  let contatti = document.getElementById("get-in-touch");
  contatti.style.display = "flex";
  let links = document.getElementById("links");
  links.style.display = "none";
}

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll / window.innerHeight > 0.2 && i==0) {
    scrollProj();
  } else if (scroll / window.innerHeight < 0.2 && i==0) {
    home();
  }
});

function home() {
  let freccia = document.getElementById("icona-freccia");
  freccia.style.rotate = "0deg";
  freccia.style.cursor = "cursor";
  let scroll = document.getElementById("scroll");
  scroll.style.animationName = "freccia";
  let testo = document.getElementById("t-works");
  testo.style.display = "flex";
  let content = document.getElementById("content");
  content.style.zIndex = "1";

  let filtri1 = document.getElementById("dataviz");
  filtri1.style.opacity = "1";
  filtri1.style.filter = "blur(0)";
  let dataviz = document.getElementById("datavix-text");
  dataviz.style.pointerEvents = "auto";
  let datavizIcon = document.getElementById("datavixIcon");
  datavizIcon.style.pointerEvents = "auto";
  let filtri2 = document.getElementById("ux-ui");
  filtri2.style.opacity = "1";
  filtri2.style.filter = "blur(0)";
  let uxui = document.getElementById("ux-ui-text");
  uxui.style.pointerEvents = "auto";
  let uxuiIcon = document.getElementById("uxuiIcon");
  uxuiIcon.style.pointerEvents = "auto";
  let filtri3 = document.getElementById("interaction");
  filtri3.style.opacity = "1";
  filtri3.style.filter = "blur(0)";
  let interaction = document.getElementById("interaction-text");
  interaction.style.pointerEvents = "auto";
  let interactionIcon = document.getElementById("interactionIcon");
  interactionIcon.style.pointerEvents = "auto";
  let filtri4 = document.getElementById("branding");
  filtri4.style.opacity = "1";
  filtri4.style.filter = "blur(0)";
  let branding = document.getElementById("branding-text");
  branding.style.pointerEvents = "auto";
  let brandingIcon = document.getElementById("brandingIcon");
  brandingIcon.style.pointerEvents = "auto";
  let filtri5 = document.getElementById("editorial");
  filtri5.style.opacity = "1";
  filtri5.style.filter = "blur(0)";
  let editorial = document.getElementById("editorial-text");
  editorial.style.pointerEvents = "auto";
  let editorialIcon = document.getElementById("editorialIcon");
  editorialIcon.style.pointerEvents = "auto";
}

function scrollProj() {
  let freccia = document.getElementById("icona-freccia");
  freccia.style.rotate = "180deg";
  freccia.style.cursor = "pointer";
  let scroll = document.getElementById("scroll");
  scroll.style.animationName = "stop";
  let testo = document.getElementById("t-works");
  testo.style.display = "none";
  let content = document.getElementById("content");
  content.style.zIndex = "-1";

  let filtri1 = document.getElementById("dataviz");
  filtri1.style.opacity = "0.5";
  filtri1.style.filter = "blur(0.2vw)";
  let dataviz = document.getElementById("datavix-text");
  dataviz.style.pointerEvents = "none";
  let datavizIcon = document.getElementById("datavixIcon");
  datavizIcon.style.pointerEvents = "none";
  let filtri2 = document.getElementById("ux-ui");
  filtri2.style.opacity = "0.5";
  filtri2.style.filter = "blur(0.2vw)";
  let uxui = document.getElementById("ux-ui-text");
  uxui.style.pointerEvents = "none";
  let uxuiIcon = document.getElementById("uxuiIcon");
  uxuiIcon.style.pointerEvents = "none";
  let filtri3 = document.getElementById("interaction");
  filtri3.style.opacity = "0.5";
  filtri3.style.filter = "blur(0.2vw)";
  let interaction = document.getElementById("interaction-text");
  interaction.style.pointerEvents = "none";
  let interactionIcon = document.getElementById("interactionIcon");
  interactionIcon.style.pointerEvents = "none";
  let filtri4 = document.getElementById("branding");
  filtri4.style.opacity = "0.5";
  filtri4.style.filter = "blur(0.2vw)";
  let branding = document.getElementById("branding-text");
  branding.style.pointerEvents = "none";
  let brandingIcon = document.getElementById("brandingIcon");
  brandingIcon.style.pointerEvents = "none";
  let filtri5 = document.getElementById("editorial");
  filtri5.style.opacity = "0.5";
  filtri5.style.filter = "blur(0.2vw)";
  let editorial = document.getElementById("editorial-text");
  editorial.style.pointerEvents = "none";
  let editorialIcon = document.getElementById("editorialIcon");
  editorialIcon.style.pointerEvents = "none";
  freccia.style.cursor = "pointer";
}

function scrollTo(element) {
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: element.offsetTop,
  });
}
document.getElementById("datavix-text").addEventListener("click", () => {
  scrollTo(document.getElementById("prog1"));
});
document.getElementById("datavixIcon").addEventListener("click", () => {
  scrollTo(document.getElementById("prog1"));
});
document.getElementById("ux-ui-text").addEventListener("click", () => {
  scrollTo(document.getElementById("prog2"));
});
document.getElementById("uxuiIcon").addEventListener("click", () => {
  scrollTo(document.getElementById("prog2"));
});
document.getElementById("interaction-text").addEventListener("click", () => {
  scrollTo(document.getElementById("prog3"));
});
document.getElementById("interactionIcon").addEventListener("click", () => {
  scrollTo(document.getElementById("prog3"));
});
document.getElementById("branding-text").addEventListener("click", () => {
  scrollTo(document.getElementById("prog7"));
});
document.getElementById("brandingIcon").addEventListener("click", () => {
  scrollTo(document.getElementById("prog7"));
});
document.getElementById("editorial-text").addEventListener("click", () => {
  scrollTo(document.getElementById("prog9"));
});
document.getElementById("editorialIcon").addEventListener("click", () => {
  scrollTo(document.getElementById("prog9"));
});
document.getElementById("icona-freccia").addEventListener("click", () => {
  scrollTo(document.getElementById("sez0"));
});

function progetto1() {
  window.location.href = "./pages/progetto1.html";
}
function progetto2() {
  window.location.href = "./pages/progetto2.html";
}
function progetto3() {
  window.location.href = "./pages/progetto3.html";
}
function progetto4() {
  window.location.href = "./pages/progetto4.html";
}
function progetto5() {
  window.location.href = "./pages/progetto5.html";
}
function progetto6() {
  window.location.href = "./pages/progetto6.html";
}
function progetto7() {
  window.location.href = "./pages/progetto7.html";
}
function progetto8() {
  window.location.href = "./pages/progetto8.html";
}
function progetto9() {
  window.location.href = "./pages/progetto9.html";
}
function progetto10() {
  window.location.href = "./pages/progetto10.html";
}
function progetto11() {
  window.location.href = "./pages/progetto11.html";
}


function menu() {
  if (i == 0) {
    scrollTo(document.getElementById("content"));
    setTimeout(hideProj, 500);   

        
    let apriMenu = document.getElementById("scroll-progetti");
    apriMenu.style.opacity = "0.25";
    apriMenu.style.filter = "blur(0.2vw)";

    let menuProgetti = document.getElementById("menuProgetti");
    menuProgetti.style.display = "flex";
    let iconaMenu = document.getElementById("iconaMenu");
    iconaMenu.src = "./assets/icons/close.svg";

    let scroll = document.getElementById("scroll");
    scroll.style.display = "none";
    let content = document.getElementById("content");
    content.style.zIndex = "-1";

    let sx = document.getElementById("sx");
    sx.style.opacity = "0";
    let footer = document.getElementById("footer");
    footer.style.opacity = "0";
    let hello = document.getElementById("hello");
    hello.style.opacity = "0.25";

    let filtri1 = document.getElementById("dataviz");
    filtri1.style.opacity = "0.25";
    filtri1.style.filter = "blur(0.2vw)";
    let dataviz = document.getElementById("datavix-text");
    dataviz.style.pointerEvents = "none";
    let filtri2 = document.getElementById("ux-ui");
    filtri2.style.opacity = "0.25";
    filtri2.style.filter = "blur(0.2vw)";
    let uxui = document.getElementById("ux-ui-text");
    uxui.style.pointerEvents = "none";
    let filtri3 = document.getElementById("interaction");
    filtri3.style.opacity = "0.25";
    filtri3.style.filter = "blur(0.2vw)";
    let interaction = document.getElementById("interaction-text");
    interaction.style.pointerEvents = "none";
    let filtri4 = document.getElementById("branding");
    filtri4.style.opacity = "0.25";
    filtri4.style.filter = "blur(0.2vw)";
    let branding = document.getElementById("branding-text");
    branding.style.pointerEvents = "none";
    let filtri5 = document.getElementById("editorial");
    filtri5.style.opacity = "0.25";
    filtri5.style.filter = "blur(0.2vw)";
    let editorial = document.getElementById("editorial-text");
    editorial.style.pointerEvents = "none";
    let freccia = document.getElementById("icona-freccia");
    freccia.style.cursor = "pointer";
    i = 1;
    console.log(i);
  } else if (i == 1) {
    let apriMenu = document.getElementById("scroll-progetti");
    apriMenu.style.display = "block";
    apriMenu.style.opacity = "1";
    apriMenu.style.filter = "blur(0)";
    let menuProgetti = document.getElementById("menuProgetti");
    menuProgetti.style.display = "none";
    let iconaMenu = document.getElementById("iconaMenu");
    iconaMenu.src = "./assets/icons/menu.svg";

    let scroll = document.getElementById("scroll");
    scroll.style.display = "flex";
    let content = document.getElementById("content");
    content.style.zIndex = "1";

    let sx = document.getElementById("sx");
    sx.style.opacity = "1";
    let footer = document.getElementById("footer");
    footer.style.opacity = "1";
    let hello = document.getElementById("hello");
    hello.style.opacity = "0.5";

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
    i = 0;
    console.log(i);
  }
}

function anteprima1() {
  let anteprima = document.getElementById("menuPrev1");
  anteprima.style.display = "flex";
  anteprima.src = "./assets/previews/min/preview1.png";
}

function anteprima2() {
  let anteprima = document.getElementById("menuPrev2");
  anteprima.style.display = "flex";
  anteprima.src = "./assets/previews/min/preview2.png";
}

function anteprima3() {
  let anteprima = document.getElementById("menuPrev3");
  anteprima.style.display = "flex";
  anteprima.src = "./assets/previews/min/preview3.png";
}

function anteprima4() {
  let anteprima = document.getElementById("menuPrev4");
  anteprima.style.display = "flex";
  anteprima.src = "./assets/previews/min/preview4.png";
}

function anteprima5() {
  let anteprima = document.getElementById("menuPrev5");
  anteprima.style.display = "flex";
  anteprima.src = "./assets/previews/min/preview5.png";
}

function anteprima6() {
  let anteprima = document.getElementById("menuPrev6");
  anteprima.style.display = "flex";
  anteprima.src = "./assets/previews/min/preview6.png";
}

function anteprima7() {
  let anteprima = document.getElementById("menuPrev7");
  anteprima.style.display = "flex";
  anteprima.src = "./assets/previews/min/preview7.png";
}

function anteprima8() {
  let anteprima = document.getElementById("menuPrev8");
  anteprima.style.display = "flex";
  anteprima.src = "./assets/previews/min/preview8.png";
}

function anteprima9() {
  let anteprima = document.getElementById("menuPrev9");
  anteprima.style.display = "flex";
  anteprima.src = "./assets/previews/min/preview9.png";
}

function anteprima10() {
  let anteprima = document.getElementById("menuPrev10");
  anteprima.style.display = "flex";
  anteprima.src = "./assets/previews/min/preview10.png";
}

function anteprima11() {
  let anteprima = document.getElementById("menuPrev11");
  anteprima.style.display = "flex";
  anteprima.src = "./assets/previews/min/preview11.png";
}

function NOanteprima1() {
  let anteprima = document.getElementById("menuPrev1");
  anteprima.style.display = "none";
}

function NOanteprima2() {
  let anteprima = document.getElementById("menuPrev2");
  anteprima.style.display = "none";
}

function NOanteprima3() {
  let anteprima = document.getElementById("menuPrev3");
  anteprima.style.display = "none";
}

function NOanteprima4() {
  let anteprima = document.getElementById("menuPrev4");
  anteprima.style.display = "none";
}

function NOanteprima5() {
  let anteprima = document.getElementById("menuPrev5");
  anteprima.style.display = "none";
}

function NOanteprima6() {
  let anteprima = document.getElementById("menuPrev6");
  anteprima.style.display = "none";
}

function NOanteprima7() {
  let anteprima = document.getElementById("menuPrev7");
  anteprima.style.display = "none";
}

function NOanteprima8() {
  let anteprima = document.getElementById("menuPrev8");
  anteprima.style.display = "none";
}

function NOanteprima9() {
  let anteprima = document.getElementById("menuPrev9");
  anteprima.style.display = "none";
}

function NOanteprima10() {
  let anteprima = document.getElementById("menuPrev10");
  anteprima.style.display = "none";
}

function NOanteprima11() {
  let anteprima = document.getElementById("menuPrev11");
  anteprima.style.display = "none";
}

function hideProj(){
    let apriMenu = document.getElementById("scroll-progetti");
    apriMenu.style.display = "none";
}