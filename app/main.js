import criandoColaborador from "./criandoColaborador.js";
import criaNavegacao from "./criaNavegacao.js";
import criaSelecaoColaborador from "./menuDropdown.js";
import criaColaboradorNoQuadro from "./adicionaColaboradorNoQuadro.js";
import criaRodape from "./criaRodape.js";
export const colaboradores = [];
const form = document.getElementById("formulario");
const botao = document.getElementById("botao__enviar");
criaNavegacao();
if (
  window.location.href ===
  "http://127.0.0.1:5500/pages/quadroDeColaboradores.html"
) {
  criaColaboradorNoQuadro();
  criaSelecaoColaborador();

} else {

  criaRodape();
  botao.addEventListener("click", (e) => {
    criandoColaborador(e);
  });
}


