let count = 0;
let counter = document.getElementById("count");
let save = document.getElementById("saved");

function increment(){
    count = count + 1;
    counter.textContent = count;
    console.log(counter.innerText);
    
}

function del(){
    let countStr = count + " | ";
    save.textContent += countStr
    counter.textContent = 0;
    count = 0;
}