// SELECTEURS
// document.querySelector('h4').style.background="red";
// const baliseHTML = document.querySelector("h4");
// console.log(baliseHTML);
// baliseHTML.style.background = "yellow";
// click event
// questionContainer.style.borderRadius = "150px";
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1"); //method 1 pour les id (querySelector)
const btn2 = document.getElementById("btn-2"); //method 2 pour les id (getElementById)
const response = document.querySelector("p");

// console.log(questionContainer);
// questionContainer.addEventListener("click", () => {
//   console.log("click !");
// });
// questionContainer.addEventListener("click", () => {
// questionContainer.style.background = "red";
// questionContainer.style.borderRadius = "10px";
// });
questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});
/* les Priorités css    <div style="...">  >  #id  >  .class  >  BaliseHTML 
          w ida habina kch instruction dakhel kch wahda m tlata tkon hiya lwla nakatbo
          9odamha important
          ex :
          .class{
              background: white !important;
          } 
*/
// ----------------------------------------------------------------------------
// mouse mouve

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});
window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%,-25%)";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%,-50%)";
  mousemove.style.border = "2px solid teal";
});
questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});
questionContainer.addEventListener("mouseleave", () => {
  questionContainer.style.background = "pink";
});
response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});
response.addEventListener("mouseleave", () => {
  response.style.transform = "rotate(0deg)";
});

// ------------------------------------------------------------------------------
// KeyPress event
var keyNumber = 1;
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};
function mod(n, m) {
  return ((n % m) + m) % m;
}

// na9adro ndiro fel parametre ta3 la fonction (key) w ndirio
// concatenation m3a src ida kan 3ndna audio ta3 kol caractère msami f
// les fichier w nzido ki njo n3ayto la fonction ltaht ndiro fel parametre
// ta3ha (e.key) ida kona msamyine les fichier 3la hsab les caractères

// kifach ndeclarer fonction fiha audio
document.addEventListener("keypress", (d) => {
  key.textContent = d.key;
  keyNumber = keyNumber + 1;

  if (mod(keyNumber, 2) === 0) {
    keypressContainer.style.backgroundColor = "red";
  } else {
    keypressContainer.style.backgroundColor = "blue";
  }
  if (d.key === "z") {
    ring(d.key);
  }
});

// -----------------------------------------------------------------
//  ScroolEvent
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-50px";
  }
});

// -------------------------------------------------------------------
// Form Events
const inputName =
  document.querySelector('input[type="text"]'); /*syntax a ne pas oublier*/
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
  // console.log("votre langage préférer est bien " + language);
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); /* bch ki n3abzo 3la boutton ta3 Submit la page ma dirche actualiser */
  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>language préférer : ${language}</h4>`;
  } else {
    alert("veuillez accepter les CGV");
  }
});

// --------------------------------------------------------------------
// Load event
// ba3d ma tatla3 la page

// window.addEventListener("load", () => {
//   console.log("Document Charger !");
// });

//-----------------------------------------------------------------------
// ForEach

// const boxes = document.querySelectorAll(".box");
// console.log(boxes);
// boxes.forEach((b) => {
//   b.addEventListener("click", (e) => {
//     e.target.style.transform = "scale(0.7)";
//       });
// });

//enlever le commentaire puis clicker sur les elements qui on une class box pour voir le resultat

// -----------------------------------------------------------------------
// addEventListner VS onclick

// !!! kaml li khdamna bihom mn 9bal ta3 addEventListner kayn haja wahdokhra ,
// nzido kaml les addEventListner "ON" 9bal ,
// Example
// "click" twali "onclick"
// "mousemove" twali "onmousemove"
// Remarque : - addEventListner howa li recomander
//            - ON est beaucoup deconseiller meme par la documentation javascript

//                            debut du code "ON"

// document.body.onscroll = () => {
//   console.log("scroll (1) !!!");
// };

// document.body.onscroll = () => {
//   console.log("scroll (2)  !!!");
// };

//                            Fin du code "ON"

//                            debut du code addEventListener

// document.body.addEventListener("click", () => {
//   console.log("click (1) with addEventListener");
// });
// document.body.addEventListener("click", () => {
//   console.log("click (2) with addEventListener");
// });

//                            fin du code addEventListener
// l'un des inconvainiants ta3 ON c'est had le code li raho lfou9
// explication : onscroll dexième craza onscroll premier
// par contre lokan sta3malna "addEventListner" yokhorjo bin zouj
// roh la console chouf !!!

// na9adro nasta3mlo "ON" dakhl la balise html
// Exemple : <body onclick ="console.log("depuit la balise !!!")">
// copier l'exemple pour voir

// ---------------------------------------------------------------------------
// Bubbling et Usecapture

// Bubbling => fin (de base l'eventlistener est paramétré en mode Bubbling)
// tsama "false" machi obligé ndiroho

//                 Bubbling

document.body.addEventListener(
  "click",
  () => {
    console.log("click 1 !");
  },
  false
);

//                  Usecapture

document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 !!");
  },
  true
);

// Usecapture tkon b true
// li tkon Usecapture hiya li texecuta lwla

// ----------------------------------------------------------------------------
// Stop propagation

// questionContainer.addEventListener("click", (e) => {
//   alert("test !");
//   e.stopPropagation();
// });

// ! ! ! Remarque ! ! ! : ki naklikiw f questionContainer nchoufo f la console bli
// khraj "click 2 !!"
// ta3 Usecapture omb3d moraha tji alert li rahi fel code hada tali w ki troh alert bch ji
// "click 1 !" ta3 Bubbling (9bal manzido '   e.stopPropagation()   ')
// w ki zadna '   e.stopPropagation()   ' li tkon vrai tomchi w li tkon false wla par defaut
// ma tamchich
// ! ! ! Conclusion ! ! !  : "idDuParametre.stopPropagation()" thabs les addEventListener
// li ykono Bubbling     MCHI GA3   ghir li ykono tab3ine la meme balise w meme action
// action habit n9ol kima click w mousemove ..etc...

// ida habina nahiw kch eventListener kyn fonction kima "addEventListener"
// esemha "removeEventListener"

// ----------------------------------------------------------------------------------
// BOM  (Brother Object Model)

// console.log(window.innerHeight);
// window.innerHeight => tmadlna tol ta3 la fenetre ta3na

// console.log(window.innerWidth);
// window.innerWidth => tmadlna 3ord ta3 la fenetre ta3na

// window.open(
//   "https://facebook.com",
//   "test de javaScript",
//   "height=600, width= 800"
// );
// hadi window.open khadmatha taftah une page li
// lien ta3ha howa "https://facebook.com"
// msamyinha "test de javaScript"
// la hauteur "600"
// la largeur "800"

// w bch norol9o la page automatiquement ndiro "window.close()"

// cofirm

btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous tromper ?");
});

// confirm tachabah l alert
// alert ki tokhroj w thab tnahiha ymadolk boutton "OK"
// w confirm ymadolk boutton "OK" w "Annuler"
// ida dart "Annuler" tsama keli ma clikitch 3la btn2

// prompt

btn1.addEventListener("click", () => {
  let answer = prompt("Entrer votre nom !");
  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
  /* += darnaha bch ma yrohch kaml wch kayn f question container */
  /* sayi b = omb3d sayi b += */
});

//    ! ! !   important   ! ! !

// Timer, compte a rebours

setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);

// explication setTimeout hiya li tgerer lwa9t w9tach tasra kch instruction
// kima had lhala 9olnalha diri borderRadius ta3 300px l questionContainer ba3d
// 2s  (2000 = 2 seconds)

// setInterval

// let interval = setInterval(() => {
//   document.body.innerHTML += `
//   <div class='box'>
//   <h2>Nouvelle boite !</h2>
//   <div/>
//   `;
// }, 60000);

// pour stoper setInterval
// ki naklikiw 3la body tahbas
// document.body.addEventListener("click", (e) => {
//   // console.log(e.target);
//   // e.target.remove(); /* hadi hab y9ol ki naklikiw 3la kch haja dakhl body tatsuprima */
//   clearInterval(interval);
// });

// location
// console.log(
//   location.href
// ); /*example : http://127.0.0.1:5500/apprendreJS2P.html */
// console.log(location.host); /*example : 127.0.0.1:5500 */
// console.log(location.pathname); /*example : apprendreJS2P.html */
// console.log(
//   location.search
// ); /* hadi ki tkon takhdam b backend kima php ...etc..*/
// location.replace("https://google.com");   /*hadi tbal la page kaml w dir f plasetha google.com */

// example
// window.onload = () => {
//   location.replace("https://facebook.com");
// };

// Navigator
// console.log(navigator.userAgent); /* les information ta3 l'utilisateur */

// Geolocation
// pour avoir les position de nos utilisateurs
// le lien  https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   var crd = pos.coords;

//   console.log("Votre position actuelle est :");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude : ${crd.longitude}`);
//   console.log(`La précision est de ${crd.accuracy} mètres.`);
// }

// function error(err) {
//   console.warn(`ERREUR (${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

// history
// console.log(history);
// window.history.back(); /*hadi taja3 la page li mn 9bal nasha9oha ki yakliki 3la kch haja*/
// history.go(-2); /*par exemple hna darna twali b 2 page en arrière */

// ------------------------------------------------------------------------------
// setProperty
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});

//     FIN DU 2ème COURS
