
let score1=document.querySelectorAll("#correct");
let button1=document.querySelectorAll("#wrong1");
let button2=document.querySelectorAll("#wrong2");
let button3=document.querySelectorAll("#wrong3");
var animatedDiv=document.getElementById("time");
var resultDiv=document.getElementById("result");
var count=0;
const display=()=>{
    score1=count++;
}
correct.addEventListener("click", () => {
        correct.innerText="selected";
        correct.disabled=true;
        wrong1.disabled=true;
        wrong2.disabled=true;
        wrong3.disabled=true;
})
wrong1.addEventListener("click", () => {
    wrong1.innerText="selected";
    correct.disabled=true;
    wrong1.disabled=true;
    wrong2.disabled=true;
    wrong3.disabled=true;
});
wrong2.addEventListener("click", () => {
    wrong2.innerText="selected";
    correct.disabled=true;
    wrong1.disabled=true;
    wrong2.disabled=true;
    wrong3.disabled=true;
});
wrong3.addEventListener("click", () => {
    wrong3.innerText="selected";
    correct.disabled=true;
    wrong1.disabled=true;
    wrong2.disabled=true;
    wrong3.disabled=true;
});
function onAnimationEnd( ) {
    correct.disabled=true;
    wrong1.disabled=true;
    wrong2.disabled=true;
    wrong3.disabled=true;
}
animatedDiv.addEventListener('animationend', onAnimationEnd);

resultDiv.innerHTML = count;

