let nome = prompt("Digite seu nome!");
let renda = 0;
let despesas = 0;
let cdespesas = 0;
let tmp = 0;
let sobra = 0;
let msg = "";
let fmsg = "";

do {
    renda = Number(prompt("Digite sua renda: "));
} while (isNaN(renda));

do {
    despesas = Number(prompt("Digite suas despesas: "));
} while (isNaN(despesas) || (despesas > 5 || despesas < 1));

for (let i = 0; i < despesas; i++) {
    do {
        tmp = Number(prompt(`Despesa ${i+1}: `));
    } while (isNaN(tmp));
    cdespesas += tmp;
}

if (cdespesas > renda) msg = "Atenção: Você gastou mais do que gastou";
else {
    sobra = renda-cdespesas;
    if (sobra >= renda*0.3) msg = "Ótimo: Boa margem de sobra";
    else msg = "Ok: dá pra melhorar a sobra";
}

alert(msg);

fmsg = `Nome: ${nome}\nRenda: R$${renda.toFixed(2)}\nDespesas totais: R$${cdespesas.toFixed(2)}\nSobra: R$${sobra.toFixed(2)}\n${msg}`
alert(fmsg);
console.log(fmsg);
