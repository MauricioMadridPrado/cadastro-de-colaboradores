import { colaboradores } from "./main.js";
export default function criandoColaborador(e) {
  e.preventDefault();
  const nome = document.getElementById("nome");
  const cpf = document.getElementById("cpf");
  const rg = document.getElementById("rg");
  const telefone = document.getElementById("telefone");
  const email = document.getElementById("email");

  const colaborador = {
    nome: nome.value,
    cpf: cpf.value,
    telefone: telefone.value,
    rg: rg.value,
    email: email.value,
  };
  colaboradores.push(colaborador);
  console.table(colaboradores);

  localStorage.setItem("colaboradores", JSON.stringify(colaboradores));


  nome.value = "";
  cpf.value = "";
  telefone.value = "";
  rg.value = "";
  email.value = "";
}
