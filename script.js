// Dados das postagens
const postagens = [
  { titulo: "Pintura Abstrata", imagem: "Images/pintura1.jpg", resumo: "Texto explicando...", link: "#pintura-abstrata", date: "2025-05-03" },
  { titulo: "Apresentação", imagem: "Images/livro1.jpg", resumo: "Um breve olhar sobre o que encontrará aqui, e o que sou...", link: "#primeiro-livro", date: "2025-06-10" }
];

// Coluna do meio (postagens grandes)
function carregarPostagens(posts) {
  const meio = document.getElementById('postagens');
  meio.innerHTML = ''; // limpa antes de carregar
  posts.forEach(p => {
    const div = document.createElement('div');
    div.className = 'postagem';
    div.innerHTML = `
      <h2>${p.titulo}</h2>
      <img src="${p.imagem}" class="imagem-postagem" onclick="abrirImagem('${p.imagem}')" />
      <p>${p.resumo}</p>`;
    meio.appendChild(div);
  });
}

// Abrir imagem em nova janela
function abrirImagem(src) {
  const win = window.open(src, '_blank');
  win.focus();
}

// Gerar arquivos mensais automaticamente
function gerarArquivos() {
  const archiveList = document.getElementById("archive-list");
  const months = {};

  postagens.forEach(post => {
    const month = post.date.slice(0,7); // yyyy-mm
    if (!months[month]) months[month] = [];
    months[month].push(post);
  });

  for (let month in months) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = month.replace("-", "/"); // ex: "2025/05"
    
    // Ao clicar, filtra posts daquele mês
    a.addEventListener('click', (e) => {
      e.preventDefault();
      carregarPostagens(months[month]);
    });

    li.appendChild(a);
    archiveList.appendChild(li);
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  carregarPostagens(postagens); // carrega todos inicialmente
  gerarArquivos();              // gera lista de meses/arquivos
});
