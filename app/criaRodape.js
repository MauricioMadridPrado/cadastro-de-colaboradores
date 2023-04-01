const rodape = document.getElementById('rodape')

export default function criaRodape() {
    const texto = 'Empresa I.N.E.U.E, sempre preocupada com seus colaboradores'
    
    rodape.innerHTML =
        `
            <p class="rodape__texto">${texto}</p>

        `
}