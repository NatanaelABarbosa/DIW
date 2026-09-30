let cadastro = [
    { 
        "nome": "Flávio Inácio Lula da Silva",
        "idade": 2,
        "cidade": "Atlântida",
        "veiculos": [
            { 
                "marca": "Fiat", 
                "modelo": "Uno", 
                "ano": 2010, "placa": 
                "ABC-1D23" 
            }
        ] 
    }, 
    { 
        "nome": "Paróquia", 
        "idade": 200, 
        "cidade": "Pintópolis",
        "veiculos": []
    }, 
    { 
        "nome": "Jacinto", 
        "idade": 202, "cidade": 
        "Coronel Fabricio anus", 
        "veiculos": [
            { 
                "marca": "fiat", 
                "modelo": "marea", 
                "ano": 1923, 
                "placa": "ABC-1D26" 
            }, 
            { 
                "marca": "citroen", 
                "modelo": "c3", 
                "ano": 1991, 
                "placa": "ABC-1D24" 
            }
        ] 
    }
];

function ExibirCadastro() {
    var testosteronaHTML = "";
    testosteronaHTML += "<ul>";
    for (let i = 0; i < cadastro.length; i++) {
        testosteronaHTML += `Pessoa: ${cadastro[i].nome}<br>`;

        if (cadastro[i].veiculos.length > 0) testosteronaHTML += "<ul>";
        for (let j = 0; j < cadastro[i].veiculos.length; j++) {
            testosteronaHTML += ` <li> Veiculo: ${cadastro[i].veiculos[j].marca} - ${cadastro[i].veiculos[j].modelo} - ${cadastro[i].veiculos[j].ano} - ${cadastro[i].veiculos[j].placa}</li> <br>`;
        }
        
        if (cadastro[i].veiculos.length > 0) testosteronaHTML += "</ul>";

        testosteronaHTML += "<br>";
    }
    testosteronaHTML += "</ul>";

    var tela = document.getElementById("tela");
    tela.innerHTML = testosteronaHTML;

    //alert(testosteronaHTML);
}