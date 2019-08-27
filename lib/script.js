// event listner on input
document.querySelector(".initial-input").addEventListener('click', function(evt){
    evt.preventDefault();
    word = document.querySelector("input").value;
    document.querySelector("input").value = "";
    createGuess();
});

// creates hidden guessing squares
function createGuess(){
    letters = word.split('');
    letters.forEach(element => {
        let letter = document.createElement('div');
        letter.className = element + ' letters';
        letter.id = element;
        letter.innerText = element;
        document.querySelector(".word-guess").appendChild(letter);
    })   
}

// event listners on all the keys
let keys = document.querySelectorAll(".letter")
let letterGuess = [];
keys.forEach(element =>{
    element.addEventListener('click', function (){
        element.style.background = 'blue';
        letterGuess.push(element.dataset.letter);
        check();
    })
})

// Checks letterguess array against word your trying to guess
let check = function(){
    letterGuess.forEach(element =>{
        let guess = document.querySelectorAll("."+element)
        guess.forEach(ele=>{
            ele.style.color = "black";
        })
    })
}

