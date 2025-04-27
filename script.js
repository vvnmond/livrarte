// Exemplo de postagens
const postagens = [
    {
        titulo: "Primeiro Livro",
        imagem: "livro1.jpg",
        resumo: "Um breve resumo do primeiro livro...",
        link: "#primeiro-livro"
    },
    {
        titulo: "Pintura Abstrata",
        imagem: "pintura1.jpg",
        resumo: "Texto explicando a pintura...",
        link: "#pintura-abstrata"
    }
    // Adicione mais postagens conforme necessário
];

// Função para carregar postagens na coluna central
function carregarPostagens() {
    const containerPostagens = document.getElementById('postagens');
    
    postagens.forEach(post => {
        const divPost = document.createElement('div');
        divPost.classList.add('postagem');

        divPost.innerHTML = `
            <h2 class="titulo-postagem">${post.titulo}</h2>
            <img src="${post.imagem}" alt="${post.titulo}" class="imagem-postagem" onclick="abrirImagem('${post.imagem}')">
            <p class="resumo-postagem">${post.resumo}</p>
        `;

        containerPostagens.appendChild(divPost);
    });
}

// Função para carregar a lista de postagens na coluna esquerda
function carregarListaPostagens() {
    const listaPostagens = document.getElementById('lista-postagens');
    
    postagens.forEach(post => {
        const divPost = document.createElement('div');
        divPost.classList.add('lista-postagem');

        divPost.innerHTML = `
            <img src="${post.imagem}" alt="${post.titulo}" onclick="abrirPostagem('${post.link}')">
            <h3 class="titulo-postagem">${post.titulo}</h3>
            <p class="resumo-postagem">${post.resumo}...</p>
        `;

        listaPostagens.appendChild(divPost);
    });
}

// Função para abrir uma imagem maior
function abrirImagem(imagem) {
    const imagemMaior = window.open(imagem, '_blank');
    imagemMaior.focus();
}

// Função para rolar até a postagem na coluna central
function abrirPostagem(link) {
    document.querySelector(link).scrollIntoView({ behavior: 'smooth' });
}

// Carregar as postagens quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    carregarPostagens();
    carregarListaPostagens();
});
