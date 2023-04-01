const localDaNavegacao = document.getElementById("navegacao");

const navegacao = [
  {
    tipo: "colaboradores",
    link: "/pages/quadroDeColaboradores.html",
  },
  {
    tipo: "formulario",
    link: "/pages/formularioDeCadastroDeColaboradores.html",
  },
];

export default function criaNavegacao() {
  navegacao.forEach((item) => {
    localDaNavegacao.innerHTML += `
      <li class="cabecalho__navegacao__itens">
      <a 
        class="cabecalho__navegacao__link"
        href="${item.link}">
        ${item.tipo}
        </a>
      </li>
    `;
  });
}
