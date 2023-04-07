import {conectaApi} from "./conectaApi.js"

const localDoQuadroDeColaboradores = document.getElementById(
  "quadroDeColaboradores"
);
async function importaLista () {
  const colaboradores = await conectaApi.listaColaboradores();
    colaboradores.forEach((colaborador) => {
      localDoQuadroDeColaboradores.innerHTML +=
      `
      <tr id="quadroDeColaboradores_corpo" class="quadroDeColaboradores_corpo">
          <td>${colaborador.nome}</td>
          <td>${colaborador.cpf}</td>
          <td>${colaborador.rg}</td>
          <td>${colaborador.telefone}/td>
          <td>${colaborador.email}@mau.com</td>
      </tr>
  `;
    });
  }
export default importaLista;
