// Dados das postagens
const postagens = [
    { titulo: "Pintura Abstrata", imagem: "pintura1.jpg", resumo: "Texto explicando...", link: "#pintura-abstrata" },
    { titulo: "Apresentação", imagem: "livro1.jpg", resumo: "Um breve olhar sobre o que encontrará aqui, e o que sou...", link: "#primeiro-livro" }
  ];
  
  // Coluna do meio (postagens grandes)
  function carregarPostagens() {
    const meio = document.getElementById('postagens');
    postagens.forEach(p => {
      const div = document.createElement('div');
      div.className = 'postagem';
      div.innerHTML = `
        <h2>${p.titulo}</h2>
        <img src="${p.imagem}" class="imagem-postagem" onclick="abrirImagem('${p.imagem}')" />
        <p>${p.resumo}</p>`;
      meio.appendChild(div);
    });
  }
  
  // Coluna esquerda (lista)
  function carregarListaPostagens() {
    const lista = document.getElementById('lista-postagens');
    postagens.forEach(p => {
      const div = document.createElement('div');
      div.className = 'lista-postagem';
      div.innerHTML = `
        <img src="${p.imagem}" onclick="abrirPostagem('${p.link}')" />
        <h3>${p.titulo}</h3>
        <p>${p.resumo}...</p>`;
      lista.appendChild(div);
    });
  }
  
  // Ações de imagem e scroll
  function abrirImagem(src) {
    const win = window.open(src, '_blank');
    win.focus();
  }
  function abrirPostagem(link) {
    document.querySelector(link)?.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Inicialização
  document.addEventListener('DOMContentLoaded', () => {
    carregarPostagens();
    carregarListaPostagens();
  });
  
