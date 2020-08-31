/*Escreva uma função chamada espereNSegundos(), que obedece as premissas abaixo:
Recebe um numero inteiro como parametro;
Retorna uma promessa;
Se o número não for inteiro (ex: 1,5) reject a promessa com uma mensagem de erro;
Espere a quantidade de segundos indicada, e então resolve com sucesso a promessa;*/

function espereNSegundos(num) {
    var espera = num

    new Promise(function (resolve, reject) {

        if (Number.isInteger(espera)) {
            setTimeout(() => {
                resolve(espera)
            }, 1000 * espera);
        }
        else {
            setTimeout(() => {
                reject("não é inteiro")
            }, 1000);
        }
    }).then(res => {
        console.log("O seu Número inteiro é " + res + 'segundo(s)')
    }).catch(() => {
        console.log("O seu número não é inteiro ")
    }).finally(() => {
        setTimeout(() => {
            console.log("Promessa finalizada.");
        }, 1000);
    })
}

espereNSegundos(2)


