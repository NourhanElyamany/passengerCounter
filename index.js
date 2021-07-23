let count = 0;
let counter = document.getElementById("count");
let saved = document.getElementById("saved")


function del(){

    counter.innerText = 0;
    count = 0;
    let countStr = count + " - ";
    saved.textContenttStr += countStr;
}
console.log(del());
function increment(){
    count = count + 1;
    counter.textContent = count;
    console.log(counter.innerText);

}
