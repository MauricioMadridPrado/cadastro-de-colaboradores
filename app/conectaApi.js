async function listaColaboradores() {
    const conexao = await fetch ("http://localhost:3000/colaboradores");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida
}

export const conectaApi = {
    listaColaboradores
}