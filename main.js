const keyList = document.querySelectorAll('.tecla');
const keySoundList = document.querySelectorAll('.som');

function playSound(element)
{
    if(!element)
        console.log("Erro! Elemento não encontrado");
    else
        if(element.localName == 'audio')
            element.play();
        else
            console.log("Erro! Esse elemento não é um áudio");
}

/*
let counter = 0;

while (counter < keyList.length)
{
    const key = keyList[counter];
    const instrument = keyList[counter].classList[1];
    key.onclick = function() {playSound(document.querySelector(`#som_${instrument}`))};
    counter++;
}
*/

//keyList.forEach(element => {element.onclick = function() {playSound(keySoundList[indexOf(element)])}});

for(let counter = 0; counter < keyList.length; counter++)
{
    const key = keyList[counter];

    key.onclick = function()
    {
        playSound(keySoundList[counter])
    };
    
    key.onkeydown = function(event)
    {
        if(event.code === 'Enter' || event.code === 'Space')
        {
            key.classList.add('ativa');
        }
    };

    key.onkeyup = function()
    {
        key.classList.remove('ativa')
    };
}