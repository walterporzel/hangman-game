// event listner on input
let word;
document.querySelector(".initial-input").addEventListener('click', function(evt){
    evt.preventDefault();
    word = document.querySelector("input").value;
    document.querySelector("input").value = "";
    console.log("word");
});