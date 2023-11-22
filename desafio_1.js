const readline = require('readline');

function somatorioDivisor() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Digite um numero inteiro positivo: ", function (numero) {
        numero = parseInt(numero);

        if (isNaN(numero) || numero <= 0) {
            console.log('Por favor, digite um numero inteiro positivo valido.');
            rl.close();
            return;
        }

        let somatorio = 0;

        for (let i = 1; i < numero; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                console.log(`Numero ${i} e divisivel por 3 ou 5.`);
                somatorio += i;
            }
        }

        console.log(`O somatorio dos numeros divisíveis por 3 ou 5 ate ${numero} e: ${somatorio}`);
        rl.close();
    });
}
somatorioDivisor();
