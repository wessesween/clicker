window.addEventListener("load", function(){
    let scoreBlock = document.querySelector('.main-game .score');
    let score = 0;
    let ownedFactories = [];

    document.querySelector('.main-game .click-zone').onclick = function(){
        score +=10;
        scoreBlock.innerText = score;
        // console.log(score)
    };

    document.querySelectorAll('.factory').forEach(function(fc){
        let factory = {
            title: fc.querySelector('.title').innerText,
            costs: parseInt(fc.querySelector('.price').innerText),
            isAdding:parseInt(fc.querySelector('.adds').innerText),
            count: parseInt(fc.querySelector('.count').innerText.slice(1,-1)),
            button: fc.querySelector('button')
        };
        factory.button.onclick = function(){
            if (score >= factory.costs){
                score -= factory.costs;
                factory.count++;
                scoreBlock.innerText = score;
                fc.querySelector('.count').innerText = '(' + factory.count + ')';
            }
        }
        ownedFactories.push(factory);
    });
    console.log(ownedFactories);

    setInterval(function(){
        console.log('tick');
    }, 1000)

});