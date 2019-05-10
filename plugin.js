//Criando a constante para pegar todas as tags
const p = document.getElementsByTagName("p");
const h5 = document.getElementsByTagName("h5");
const b = document.getElementsByTagName("b");
const div = document.getElementsByTagName("div");
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
      for (i of p) {
        i.style.fontFamily = "Arial"; //Adicionando Css para modificar Font
        i.style.fontSize = "1.2em";
      }

      for (i of h5) {
        i.style.fontSize = "1.2em"; //Adicionando Css para modificar tamanho da fonte
        i.style.fontFamily = "Arial";
      }

      for (i of b) {
        i.style.fontFamily = "Arial";
        i.style.fontSize = "1.2em";
      }

      for (i of span) {
        i.style.fontFamily = "Arial";
        i.style.fontSize = "1.2em";
      }

      for (i of div) {
        i.style.fontSize = "1.2em";
        i.style.fontFamily = "Arial";
      }

      for (i of a) {
        i.style.backgroundColor = "#fff43c"; //Adicionando Css para adicionar highlights
        i.style.fontFamily = "Arial";
        i.style.fontSize = "1.2em";
      }

      for (i of img) {
        const alt = i.getAttribute("alt"); //Criando a constante para pegar o conteudo do atributo alt
        //Confere se tem o atributo alt está sem texto
        if (alt == 0) {
          i.style.width = "105%"; //Adicionando Css para aumentar tamanho da imagem
          i.style.boxShadow = "4px 4px 10px rgba(0, 0, 0, 0.596)"; //Adicionando Css para colocar boxShadow
          i.style.border = "1px solid white"; //Adicionando Css para colocar borda
        }
      }
    } else {
      //Removendo funcionalidades quando o botão for desabilitado

      btn.style.background = "#e22626"; //Mundo cor do botão quando for desabilitado
      for (i of p) {
        i.style.fontFamily = ""; //Retira modificação do plugin
        i.style.fontSize = "";
      }

      for (i of h5) {
        i.style.fontSize = "";
        i.style.fontFamily = "";
      }

      for (i of b) {
        i.style.fontFamily = "";
        i.style.fontSize = "";
      }

      for (i of span) {
        i.style.fontFamily = "";
        i.style.fontSize = "";
      }

      for (i of div) {
        i.style.fontSize = "";
        i.style.fontFamily = "";
      }

      for (i of a) {
        i.style.backgroundColor = "";
        i.style.fontSize = "";
        i.style.fontFamily = "";
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
