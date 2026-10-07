const data = {
  produtos: [
    {
      id: 1,
      nome: "iPhone 15",
      preco: 4999.99,
      categoria: "Celulares",
      imagem: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-1.jpg",
      descricao: "Smartphone Apple com tela de 6,1 polegadas e câmera avançada.",
      emEstoque: true
    },
    {
      id: 2,
      nome: "Samsung Galaxy S24",
      preco: 4299.99,
      categoria: "Celulares",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaiA4rIuGlpw7mS5m2s32LRgf7DCWJnkxdtJk2-qkSzg&s=10",
      descricao: "Smartphone Samsung com alto desempenho e câmera de alta resolução.",
      emEstoque: true
    },
    {
      id: 3,
      nome: "MacBook Air M3",
      preco: 8999.99,
      categoria: "Notebooks",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNq9FB91DyzRdSatsvykP2xxlYl9dduwxdbQ0T-noy5g&s=10",
      descricao: "Notebook leve e potente com chip Apple M3.",
      emEstoque: false
    },
    {
      id: 4,
      nome: "Dell Inspiron 15",
      preco: 3599.99,
      categoria: "Notebooks",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm9W_9c_me2YrKBknUN-W6mZ9z_93qNPd-W-TxEecuyg&s=10",
      descricao: "Notebook versátil para estudos, trabalho e entretenimento.",
      emEstoque: true
    },
    {
      id: 5,
      nome: "Mouse Logitech MX Master 3S",
      preco: 599.99,
      categoria: "Acessórios",
      imagem: "https://m.media-amazon.com/images/I/61xKiCADfpL.jpg",
      descricao: "Mouse sem fio ergonômico com alta precisão e vários recursos.",
      emEstoque: true
    },
    {
      id: 6,
      nome: "Teclado Mecânico HyperX Alloy",
      preco: 449.99,
      categoria: "Acessórios",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4BP6p4Og_DyeP_CxlVyjb_fHh7gWU7uX2Acf4UvEDRA&s",
      descricao: "Teclado mecânico compacto com iluminação RGB.",
      emEstoque: true
    },
    {
      id: 7,
      nome: "PlayStation 5",
      preco: 3999.99,
      categoria: "Games",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQJRHW6WFXXnpgheTA6vHti3e1kRlbSTbyzIgcC08AA&s=10",
      descricao: "Console de última geração da Sony com suporte a jogos em alta resolução.",
      emEstoque: true
    },
    {
      id: 8,
      nome: "Xbox Series X",
      preco: 4299.99,
      categoria: "Games",
      imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/1064950/xlarge/Console-Microsoft-XBOX-Series-X-2TB-Galaxy-Black-Edition-Lan-amento-2026_1786646028.png",
      descricao: "Console de alto desempenho da Microsoft para jogos em 4K.",
      emEstoque: false
    }
  ]
};

function formatPrice(p) {
    return "R$ " + p.toString(2);
}
