const localDoQuadroDeColaboradores = document.getElementById(
  "quadroDeColaboradores"
);

const colaboradores = JSON.parse(localStorage.getItem('colaboradores')) || [
  
];

export default function criaColaboradorNoQuadro(colaborador) {
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
