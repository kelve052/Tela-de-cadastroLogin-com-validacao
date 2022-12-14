const bloco = document.getElementsByClassName('bloco')
const nome = document.getElementsByClassName('bloco_caixa')[0]
const email = document.getElementsByClassName('bloco_caixa')[1]
const semha = document.getElementsByClassName('bloco_caixa')[2]
const div_botao = document.getElementById('div_botao')
const botao = document.getElementById('botao')
const proxima_pagina = document.getElementById('proxima_pagina')
const bloco_mensagem = document.getElementById('mensagem')
const entrar = document.getElementById('entrar')
const ainda_não_tem_conta = document.getElementById('ainda_não_tem_conta')
let entrar_acionado = 0

bloco[0].addEventListener('click', clicar_caixa_nome)

function clicar_caixa_nome(){
    bloco[0].id = 'for'
    bloco[1].id = 'bloco'
    bloco[2].id = 'bloco'
    nome.style.background = '#fff'
    email.style.background = '#E7EAF2'
    semha.style.background = '#E7EAF2'
}

bloco[1].addEventListener('click', clicar_caixa_email)

function clicar_caixa_email(){
    nome.style.background = '#E7EAF2'
    semha.style.background = '#E7EAF2'
    bloco[0].id = 'bloco'
    bloco[1].id  = 'for'
    bloco[2].id = 'bloco'
    email.style.background = '#fff'

}
bloco[2].addEventListener('click', clicar_caixa_senha)

function clicar_caixa_senha(){
    nome.style.background = '#E7EAF2'
    semha.style.background = '#fff'
    bloco[0].id = 'bloco'
    bloco[1].id  = 'bloco'
    bloco[2].id = 'for'
    email.style.background = '#E7EAF2'

}

botao.addEventListener('click', validar)

function validar(){
    let senha_num = 0
    bloco_mensagem.innerHTML = ''
    const mensagem = document.createElement('p')
    if (nome.value == ''){
        bloco_mensagem.insertAdjacentElement('beforeend', mensagem)
        mensagem.innerHTML = 'Campo "NOME" não pode ser vasio!'
        mensagem.id = 'validação_mensagem'
    }else if(email.value == ''){
        mensagem.innerHTML = 'Campo "E-MAIL" não pode ser vasio!'
        mensagem.id = 'validação_mensagem'
        bloco_mensagem.insertAdjacentElement('beforeend', mensagem)
    }else if(semha.value == '' || semha.value.length < 8){
        mensagem.innerHTML = 'A senha deve ter pelo menos 8 caracteres, com 1 caracter numérico'
        mensagem.id = 'validação_mensagem'
        bloco_mensagem.insertAdjacentElement('beforeend', mensagem)
    }else{
        for (c = 0;c < semha.value.length; c++){
            for (d=1;d<=10;d++){
                if(semha.value[c] == d){
                    senha_num = 1
                }
            }
        }
        if(senha_num == 0){
            mensagem.innerHTML = 'A senha deve ter pelo menos 8 caracteres, com 1 caracter numérico'
            mensagem.id = 'validação_mensagem'
            bloco_mensagem.insertAdjacentElement('beforeend', mensagem)
        }else{
            
            div_botao.innerHTML = '<a href="verificação.html"><input id="botao_prosseguir" type="button" value="clique para prosseguir\t &rarr;"></a>'
            nome.style.background = '#E7EAF2'
            semha.style.background = '#E7EAF2'
            bloco[0].id = 'bloco'
            bloco[1].id  = 'bloco'
            bloco[2].id = 'bloco'
            email.style.background = '#E7EAF2'
            bloco[0].style.border = '#1bcf33 1px solid'
            bloco[1].style.border = '#1bcf33 1px solid'
            bloco[2].style.border = '#1bcf33 1px solid'

            mensagem.innerHTML = 'Tudo certo!'
            mensagem.id = 'validação_mensagem_verde'
            bloco_mensagem.insertAdjacentElement('beforeend', mensagem)
        }
    }
}

entrar.addEventListener('click', altenar_entrar_criar_conta)

function altenar_entrar_criar_conta(){
    if (entrar_acionado == 0){
        entrar.innerText = 'Criar conta'
        ainda_não_tem_conta.innerText = 'Ainda não possue conta?'
        botao.value = 'Entrar'
        entrar_acionado = 1
    }else if(entrar_acionado == 1){
        entrar.innerText = 'Entrar'
        ainda_não_tem_conta.innerText = 'Já tem uma conta?'
        botao.value = 'Criar contar'
        entrar_acionado = 0
    }
}

