let count = 0;
let counter = document.getElementById("count");
let save = document.getElementById("saved");

function del(){
    let countStr = counter.textContent + " | ";
    save.textContent += countStr
    counter.textContent = 0;
    count = 0;
}
console.log(del());
function increment(){
    count = count + 1;
    counter.textContent = count;
    console.log(counter.innerText);

}
