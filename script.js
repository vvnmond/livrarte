// Exemplo de postagens (aqui você pode adicionar suas postagens)
const postagens = [
    {
        titulo: "Primeiro Livro",
        imagem: "livro1.jpg",
        resumo: "Um breve resumo do primeiro livro...",
        link: "pagina-livro1.html"
    },
    {
        titulo: "Pintura Abstrata",
        imagem: "pintura1.jpg",
        resumo: "Texto explicando a pintura...",
        link: "pagina-pintura1.html"
    },
    // Adicione mais postagens conforme necessário
];

// Função para carregar as postagens dinamicamente
function carregarPostagens() {
    const containerPostagens = document.getElementById('postagens');
    
    postagens.forEach(post => {
        const divPost = document.createElement('div');
        divPost.classList.add('post');

        divPost.innerHTML = `
            <h2>${post.titulo}</h2>
            <img src="${post.imagem}" alt="${post.titulo}" class="imagem-postagem">
            <p>${post.resumo}</p>
            <a href="${post.link}">Leia mais...</a>
        `;

        containerPostagens.appendChild(divPost);
    });
}

// Chama a função para carregar as postagens assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', carregarPostagens);
