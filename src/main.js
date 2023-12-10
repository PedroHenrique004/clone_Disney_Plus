document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const headerElements = document.querySelector('[data-tab-header]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            headerElements.classList.remove('header--is-hidden');
        }
        else {
            headerElements.classList.add('header--is-hidden');
        }
    })

    
    for (let i =0; i< buttons.lengtH; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            removeBotaoAtivo();
            aba.classList.add('shows__list--is-active');
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta)
    }

    function abreOuFechaResposta(elemento){
       const classe ='faq__questions__item--is-open';
       const elementoPai =  elemento.target.parentNode;

       elementoPai.classList.toggle(classe);
    }
    

    function removeBotaoAtivo (){
        const buttons = document.querySelectorAll('[data-tab-button]');

        for (let i = 0; i < buttons.length; i++){
            buttons[i].classList.remove('shows__tabs__button--is-active')
        }
    }

    function escondeTodasAbas(){
        const tabsContainer =  document.querySelectorAll('[data-tab-id]');
    
        for (let i = 0; i < tabsContainer.length; i++){
            tabsContainer[i].classList.remove('shows__list--is-active');
        }

    }

})