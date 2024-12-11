window.addEventListener("load", function(){
    let scoreBlock = document.querySelector('.main-game .score');
    let score = 0;

    document.querySelector('.main-game .click-zone').onclick = function(){
        score +=10;
        scoreBlock.innerText = score;
    }
})