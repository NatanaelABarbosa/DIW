let pessoa1 = { };

pessoa1.nome = "Flávio Inácio Lula da Silva";
pessoa1.idade = 2;
pessoa1.cidade = "Atlântida";
pessoa1.veiculos = [];
pessoa1.veiculos[0] = { 
    marca:  "Fiat", 
    modelo: "Uno", 
    ano:    2010, 
    placa:  "ABC-1D23" 
};

console.log(pessoa1);

let pessoa2 = {
    nome: "Paróquia",
    idade: 200,
    cidade: "Pintópolis"
}

console.log(pessoa2);

let pessoa3 = {
    nome: "Jacinto",
    idade: 202, 
    cidade: "Coronel Fabricio anus",
    veiculos: [
        {
            marca: "fiat",
            modelo: "marea",
            ano: 1923,
            placa: "ABC-1D26"
        },
        {
            marca: "citroen",
            modelo: "c3",
            ano: 1991,
            placa: "ABC-1D24"
        }

    ]
}

console.log(pessoa3);

let cadastroPessoas = [pessoa1, pessoa2, pessoa3];

console.log(JSON.stringify(cadastroPessoas));
