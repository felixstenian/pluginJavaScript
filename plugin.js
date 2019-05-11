//Criando constantes para pegar tags
const body = document.querySelector("body");
const h5 = document.getElementsByTagName("h5");
const p = document.getElementsByTagName("p");
const span = document.getElementsByTagName("span");
const a = document.getElementsByTagName("a");
const img = document.getElementsByTagName("img");

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
      body.style.fontFamily = "Arial"; //Adicionando Css para modificar Font
      body.style.fontSize = "1.2em"; //Adicionando Css para modificar tamanho da fonte

      for (i of h5) {
        i.style.fontSize = "1.25em";
      }

      for (i of p) {
        i.style.fontFamily = "Arial";
      }

      for (i of span) {
        i.style.fontFamily = "Arial";
      }

      for (i of a) {
        i.style.backgroundColor = "#fff43c"; //Adicionando Css para adicionar highlights
      }

      for (i of img) {
        const alt = i.getAttribute("alt"); //Criando a constante que pega o conteudo do atributo alt
        //Confere se o atributo alt está sem texto
        if (alt == 0) {
          //Destacando imagens
          i.style.width = "105%";
          i.style.boxShadow = "4px 4px 10px rgba(0, 0, 0, 0.596)";
          i.style.border = "1px solid white";
          i.style.transition = "0.2s ease-out";
          i.style.webkitTransition = "0.2s ease-out";
        }
      }
    } else {
      //Removendo funcionalidades quando o botão for desabilitado

      btn.style.background = "#e22626"; //Mundo cor do botão quando for desabilitado

      body.style.fontFamily = "";
      body.style.fontSize = "";

      for (i of h5) {
        i.style.fontSize = "";
      }

      for (i of p) {
        i.style.fontFamily = "";
      }

      for (i of span) {
        i.style.fontFamily = "Just Another Hand, cursive";
      }

      for (i of a) {
        i.style.backgroundColor = "";
      }

      for (i of img) {
        const alt = i.getAttribute("alt");
        if (alt == 0) {
          i.style.width = "100%";
          i.style.boxShadow = "";
          i.style.border = "";
        }
      }
    }
  };
  document.body.appendChild(btn);
}

createButtonActiv();
