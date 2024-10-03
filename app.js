criarCartao(categoria, pergunta, resposta) {

}
function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
}
cartao.innerHTML =
`<div class="cartao_conteudo"></div>
                <h3>Programação</h3>
                <div class="cartao_conteudo_pergunta">
                    <p>O que é JavaScript?</p>
                </div>
                <div class="cartao_conteudo_resposta">
                    <p>O JavaScript é uma linguagem de programação</p>
                    </div>
                    </div>`
                    container.appenchild(cartao)
