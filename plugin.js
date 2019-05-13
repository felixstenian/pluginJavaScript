//Criando constantes para pegar tags
const body = document.querySelector("body");
const h5 = document.querySelectorAll("h5");
const p = document.querySelectorAll("p");
const span = document.querySelectorAll("span");
const a = document.querySelectorAll("a");
const img = document.querySelectorAll("img");

//Criando o botão
function createButtonActiv() {
  var btn = document.createElement("BUTTON");
  var lbl = document.createTextNode("Plugin");
  btn.style.position = "fixed";
  btn.style.right = "50%";
  btn.style.top = "89%";
  btn.style.width = "60px";
  btn.style.height = "60px";
  btn.style.border = "none";
  btn.style.borderRadius = "30px";
  btn.style.boxShadow = "1px 1px 5px rgba(0, 0, 0, 0.4)";
  btn.style.background = "#e22626";
  btn.style.cursor = "pointer";
  btn.style.color = "white";
  btn.style.textAlign = "center";
  btn.style.fontSize = "12px";
  btn.style.transition = "0.2s ease-out";
  btn.style.webkitTransition = "0.2s ease-out";
  btn.appendChild(lbl);

  //Adicionando funcionalidades quando o botão for habilitado
  btn.onclick = function() {
    this.classList.toggle("active");
    btn.style.background = "#15df8b";
    const ativ = btn.getAttribute("class");

    if (ativ == "active") {
      body.style.fontFamily = "Arial";
      body.style.fontSize = "1.2em";

      for (var i = 0; i < h5.length; i++) {
        h5[i].style.fontSize = "1.25em";
        h5[i].style.transition = "0.1s ease-out";
        h5[i].style.webkitTransition = "0.1s ease-out";
      }

      for (var i = 0; i < p.length; i++) {
        p[i].style.fontFamily = "Arial";
        p[i].style.transition = "0.1s ease-out";
        p[i].style.webkitTransition = "0.1s ease-out";
      }

      for (var i = 0; i < span.length; i++) {
        span[i].style.fontFamily = "Arial";
        span[i].style.transition = "0.1s ease-out";
        span[i].style.webkitTransition = "0.1s ease-out";
      }

      for (var i = 0; i < a.length; i++) {
        a[i].style.backgroundColor = "#fff43c"; //Adicionando Css para adicionar highlights
      }

      for (var i = 0; i < img.length; i++) {
        const alt = img[i].getAttribute("alt"); //Criando a constante que pega o conteudo do atributo alt
        if (alt == 0) {
          img[i].style.width = "105%";
          img[i].style.boxShadow = "4px 4px 10px rgba(0, 0, 0, 0.596)";
          img[i].style.border = "1px solid white";
          img[i].style.transition = "0.2s ease-out";
          img[i].style.webkitTransition = "0.2s ease-out";
        }
      }
    } else {
      //Removendo funcionalidades quando o botão for desabilitado
      btn.style.background = "#e22626"; //Mundo cor do botão quando for desabilitado
      body.style.fontFamily = "";
      body.style.fontSize = "";

      for (var i = 0; i < h5.length; i++) {
        h5[i].style.fontSize = "";
      }

      for (var i = 0; i < p.length; i++) {
        p[i].style.fontFamily = "";
      }

      for (var i = 0; i < span.length; i++) {
        span[i].style.fontFamily = "Just Another Hand, cursive";
      }

      for (var i = 0; i < a.length; i++) {
        a[i].style.backgroundColor = "";
      }

      for (var i = 0; i < img.length; i++) {
        const alt = img[i].getAttribute("alt"); //Criando a constante que pega o conteudo do atributo alt
        if (alt == 0) {
          img[i].style.width = "100%";
          img[i].style.boxShadow = "";
          img[i].style.border = "";
        }
      }
    }
  };
  document.body.appendChild(btn);
}

createButtonActiv();
