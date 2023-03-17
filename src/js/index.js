function listenerBtn(){
  const botoescarrossel = document.querySelectorAll('.botao');
  botoescarrossel.forEach((botao, indice)=>{
    botao.addEventListener('click', ()=>{
      document.querySelector('.botao.selecionado').classList.remove('selecionado');
      botao.classList.add('selecionado')
      imageController(botao, indice);
    })
  })
}

function imageController(botao, indice){
  document.querySelector('.imagem.ativa').classList.remove('ativa');
  document.querySelectorAll('.imagem')[indice].classList.add('ativa');

}

function init(){
  listenerBtn();
}

init();
