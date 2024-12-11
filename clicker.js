window.addEventListener("load", function(){
    let scoreBlock = document.querySelector('.main-game .score');
    let score = 0;

    document.querySelector('.main-game .click-zone').onclick = function(){
        score +=10;
        scoreBlock.innerText = score;
        // console.log(score)
    };

    document.querySelectorAll('.factory').forEach(function(fc){
        let factory = {
            title: fc.querySelector('.title').innerText,
            costs: parseInt(fc.querySelector('.price').innerText),
            isAdding:parseInt(fc.querySelector('.adds').innerText)
        };
        console.log(factory)
    });

});