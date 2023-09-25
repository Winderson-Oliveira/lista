const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const ListaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []


function adicionarNovaTarefa(){
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrartarefas()
}

function mostrartarefas(){
    let novaLi = ''

    minhaListaDeItens.forEach((item, posicao) => {
        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}">
        <img src="./img/checked.png" alt="chec-na-tarefa" onclick="concluirTarefa(${posicao})">
        <p>${item.tarefa}</p>
        <img src="./img/trash.png" alt="tarefa-para-lixo" onclick="deletarItem(${posicao})">
    </li>
        
        `
    })

    ListaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

  
}


function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida 

    mostrartarefas()
}


function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1)

    mostrartarefas()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if(tarefasDoLocalStorage){
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }     
    mostrartarefas()
}

button.addEventListener('click', adicionarNovaTarefa)