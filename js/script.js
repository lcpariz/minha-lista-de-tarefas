function salvaTarefa() {
    let tarefa = document.getElementById('textArea').value;
    // CAPTURA A PRIORIDADE SELECIONADA PELO USUÁRIO E TRATA SUA CONDIÇÃO
    const select = document.querySelector('#prioridade');
    select.addEventListener('change', (event) => {
        var recebePrioridade = document.querySelector('#prioridade');
        prioridade = event.target.value;
    })
    switch (prioridade.value || prioridade) {
        case '0':
            prioridade = "blue"
            break;
        case '1':
            prioridade = "yellow"
            break;
        case '2':
            prioridade = "red";
            break;
        default:

    }
    // FORMATA DATA DA POSTAGEM
    var data = new Date();
    var dataFormatada = (data.getDate() + "." + ((data.getMonth() + 1)) + "." + (data.getFullYear()));
    var id = (data.getMilliseconds() + 4) * 2;
    var tarefaObj = {id:id, tarefa:tarefa, data:dataFormatada, prioridade:prioridade};
    
    // ADICIONA AO LOCAL STORAGE
    localStorage.setItem(tarefaObj.id, JSON.stringify(tarefaObj));
    postTarefa()
}


// FORMATA E POSTA A TAREFA NA PAGINA
function postTarefa() {
    var minhaTarefa = new Array()
    let pegarElementos = document.getElementById('id-tarefa');
    for(var i = 0; i < localStorage.length; i++) {
        minhaTarefa.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        let post = 
        "<li class='texto-tarefa' id= '" + minhaTarefa[i].id + "'><input type='checkbox' class='tarefa-concluida' id= '" + minhaTarefa[i].id  + 
        "' onclick='(" + minhaTarefa[i].id  + ")'><div id = '" + minhaTarefa[i].prioridade + "'></div> " 
        + minhaTarefa[i].tarefa + " -  <span>Salvo em " + minhaTarefa[i].data + "</span> <hr></li>"
        pegarElementos.innerHTML = post
        console.log(minhaTarefa[i].tarefa  + " ID: " + minhaTarefa[i].id)
        limpaEstrutura();
    }
}

// CONCLUIR TAREFA

function concluiTarefa (id) {
    setTimeout(function (){
        document.getElementById(id).style.display="none";
    }, 500)
}

// CRIA NOVA LI PARA RECEBER TAREFA E LIMPA FORMULÁRIO
function limpaEstrutura () {
    let posicaoInicial = document.getElementById('lista');
    let novaLi = document.createElement("li");
    novaLi.setAttribute('id', 'id-tarefa')
    posicaoInicial.insertBefore(novaLi, posicaoInicial.children[0]);
}

