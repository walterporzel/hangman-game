let hits = 0;
let misses = 0;
let word = "";

let random = ['owner','rotate','reader','nominate','orbit','museum','wing','eliminate','career','executive']
// event listner on input
document.querySelector(".initial-input").addEventListener('click', function(evt){
    evt.preventDefault();
    word = document.querySelector("input").value;
    document.querySelector("#form").style.display = "none";
    document.querySelector(".reset").style.display = "block";
    document.querySelector(".keyboard").style.display = "block";
    createGuess();
    document.addEventListener('keydown',type);
});
// event listner random word button
document.querySelector(".random-word").addEventListener('click', function(evt){
    evt.preventDefault();
    word = random[Math.floor(Math.random()*random.length)];
    document.querySelector("#form").style.display = "none";
    document.querySelector(".reset").style.display = "block";
    document.querySelector(".keyboard").style.display = "block";
    createGuess();
    document.addEventListener('keydown',type);
});

// lets user type on keyboard
function type(evt){
    evt.preventDefault();
    document.querySelectorAll(".letter").forEach(element => {
        if(element.dataset.letter === event.key){
            element.style.display = 'none'
            letterGuess.push(element.dataset.letter);
            check();
            status();
            hits = 0;
            misses = 0;
        }
    })
}

// creates hidden guessing squares
function createGuess(){
    letters = word.split('');
    letters.forEach(element => {
        let letter = document.createElement('div');
        letter.className = element + ' letters';
        letter.id = element;
        letter.innerText = element;
        letter.style.background = "white"
        document.querySelector(".word-guess").appendChild(letter);
    })   
}

// event listners on all the keys
let keys = document.querySelectorAll(".letter")
let letterGuess = [];
keys.forEach(element =>{
    element.addEventListener('click', function (evt){
        evt.preventDefault();
        element.style.display = 'none';
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
                ele.style.background = "green";
            })
        })
}

// reset button
document.querySelector(".reset").addEventListener('click', function(){
    document.querySelector("#form").style.display = "block";
    document.querySelector(".reset").style.display = "none";
    document.querySelectorAll(".letters").forEach(ele =>{
        document.querySelector('.word-guess').removeChild(ele);  
    })
    letters = [];
    letterGuess = [];
    counter = 0;
    document.querySelector("input").value = "";
    document.querySelector(".keyboard").style.display = "none";
    document.querySelector(".loseMessage").style.display="none"
    document.querySelector(".winMessage").style.display="none"
    document.removeEventListener('keydown',type);
    document.querySelectorAll(".letter").forEach(ele =>{
        ele.style.display = "inline-block";  
    })
    document.querySelector(".gallows-one").style.display ="none"
    document.querySelector(".gallows-two").style.display ="none"
    document.querySelector(".gallows-three").style.display ="none"
    document.querySelector(".gallows-four").style.display ="none"
    document.querySelector(".gallows-five").style.display ="none"
    document.querySelector(".gallows-six").style.display ="none"
    document.querySelector(".gallows-start").style.display ="block"
})

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
    if(misses === 1){
        document.querySelector(".gallows-start").style.display ="none"
        document.querySelector(".gallows-one").style.display ="block"
    }
    else if(misses === 2){
        document.querySelector(".gallows-one").style.display ="none"
        document.querySelector(".gallows-two").style.display ="block"
    }
    else if(misses === 3){
        document.querySelector(".gallows-two").style.display ="none"
        document.querySelector(".gallows-three").style.display ="block"
    }
    else if(misses === 4){
        document.querySelector(".gallows-three").style.display ="none"
        document.querySelector(".gallows-four").style.display ="block"
    }
    else if(misses === 5){
        document.querySelector(".gallows-four").style.display ="none"
        document.querySelector(".gallows-five").style.display ="block"
    }
    else if(misses === 6){
        document.querySelector(".gallows-five").style.display ="none"
        document.querySelector(".gallows-six").style.display ="block"
        document.querySelector(".loseMessage").style.display="block"
        document.querySelector(".keyboard").style.display="none"
        document.querySelectorAll(".letters").forEach(e =>{
            if(e.style.background === "white"){
                e.style.background = "red";
                e.style.color = "black";
            }
        })
        
    }
    // checks to see if the game has been won
    let counter = 0
    letters.forEach(ele =>{
        if(document.querySelector("."+ele).style.background === "green"){
            counter++;
        }
    })
    if(counter === letters.length){
        document.querySelector(".winMessage").style.display="block"
        document.querySelector(".keyboard").style.display="none"
    }
}

