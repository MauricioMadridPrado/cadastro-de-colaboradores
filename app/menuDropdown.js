import { conectaApi } from "./conectaApi.js";
const menuDropdown = document.getElementById('selecao__colaboradores')
async function criaSelecaoColaborador(){

    const colaboradores = await conectaApi.listaColaboradores()
    menuDropdown.innerHTML += 
    `
    <option class="dropdown__opcoes" value="colaboradores"> </option>
    `
    colaboradores.forEach(  (colaborador)=>{
        menuDropdown.innerHTML += 
        `
        <option id="opcaoDropdown" class="dropdown__opcoes" value="colaboradores">${colaborador.nome}</option>
        `
    })


}
// const tipo = evento.target.elements["item-tipo"];
export default criaSelecaoColaborador;