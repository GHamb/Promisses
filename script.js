/*Crie um sistema de carregamento de tela para indicar ao usuário que a página está carregando. Crie uma interface de carregamento, pode ser uma mensagem de texto, uma representação visual como uma barra de carregamento, enfim, utilize sua imaginação. Utilize uma promessa para indicar quando o carregamento dos recursos foi finalizado com sucesso, atualizando a interface com uma nova representação visual, ou uma outra interface da sua escolha.*/
new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('carregando')
    }, 10000);

}).then(res => {
    document.getElementById('div').innerHTML = '<img src="https://media0.giphy.com/media/lD76yTC5zxZPG/200.webp?cid=ecf05e4795w58n1oa4a34hf90k60dpdc8p727byd6hg7ufb3&rid=200.webp">' + '<br>' + 'Done !'
}).catch(err => {
    document.getElementById('div').innerHTML = 'ERRRO !!!'
})


