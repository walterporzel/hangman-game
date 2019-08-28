let hits = 0;
let misses = 0;
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
        status();
        hits = 0;
        misses = 0;
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

// Determines game status
let status = function(){
    letterGuess.forEach(element=>{
        if(letters.includes(element)){
            hits++;
        }
        else{
            misses++;
        }
    })
    if(misses === 6){
        alert("you lost!")
    }
    let counter = 0
    letters.forEach(ele =>{
        if(document.querySelector("#"+ele).style.color === "black"){
            counter++;
        }
    })
    if(counter === letters.length){
        alert("you won!")
    }
}

