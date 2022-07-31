document.querySelector("#gameover").addEventListener('click',function(){location.reload()});
const hamgWords=['STAFF','RUN','LUCKY','WAVE','OXYGEN'];
const random=Math.random()*5;
const randomWord=hamgWords[Math.floor(random)];
console.log(randomWord);
const showWordTag=document.querySelector("#showWord").firstElementChild;
const showWordText=showWord.innerText.substring(0,randomWord.length);
showWordTag.innerHTML=showWordText;
let clicked=[];
const hanging=document.querySelector('#image').querySelector('img');
const gameOverMessage=document.querySelector('#gameover').querySelector('div').querySelector('p');
let i=1;
let result="";
const keys=document.querySelector('#letters').querySelectorAll('div');

function letterhandler(letter){
    clicked.indexOf(letter) === -1 ? clicked.push(letter) :null;
}

function replaceWord(){
    const splitedWord=randomWord.split("");
    mapedWord=splitedWord.map(item => (clicked.indexOf(item) >=0 ? item : "_"));
    console.log(mapedWord);
    result=mapedWord.join("");
    showWordTag.innerText=result;
}

keys.forEach(function(item){item.addEventListener('click',function(event){
    item.className='used';
    letterhandler(event.target.id);

    if(randomWord.includes(item.innerText)){
        replaceWord();

        if(!showWordTag.innerText.includes("_")){
            hanging.src='./assets/winner.png';
            gameOverMessage.style.display='block';
            keys.forEach(item => item.style.display='none');
        }
    }else if(i <6){
        hanging.src=`assets/hangman${i}.png`;
        i++;
    }else{
        hanging.src='./assets/hangman6.png';
        showWordTag.style.fontSize="25px";
        showWordTag.style.marginTop="40px";
        showWordTag.innerText=`you lose, the word was: "${randomWord}"`;
        gameOverMessage.style.display='block';
        keys.forEach(item => item.style.display='none');
    }
})});