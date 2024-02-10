console.log(document.body);
const body=document.querySelector("body");
const head=document.querySelector("head");
const div=document.querySelectorAll("div");
const button=document.querySelectorAll("button")
///const a=document.getElementsByClassName("a");
//const a=document.getElementById("a");
const h1=document.createElement("h1")
const h2=document.createElement("h2");
const temp=document.createElement("h1");
const a=document.querySelector("#a");
//console.log(a);
const b=document.querySelector(".b");
console.log(b);
//b.textContent="helo there";
//console.log(b.textContent);
//b.innerHTML="<div>hi</div><h1>hey</h1>";
h1.textContent="hey wassup";
h2.textContent="hello wassup";
//console.log(h1);
//b.append(h1,h2,temp);
//b.appendChild(h1);
//b.insertAdjacentHTML("afterbegin","<span>this is a heading</span>");
b.insertAdjacentHTML("beforeend","<span>span</span>");
//b.insertAdjacentHTML("beforeend");
const buttonforB=document.querySelector(".tar-b");
const buttonforC=document.querySelector(".tar-c");
console.log(buttonforB);
console.log(buttonforC);
function clickHandler(e){
    console.log(e.target);
    console.log("clicked");
}
function buttondownhandler(e){
    console.log(e.target);
    console.log("Button is down");
}
console.log(clickHandler);
buttonforB.addEventListener("click",clickHandler);
buttonforC.addEventListener("click",clickHandler);
document.addEventListener("keydown",buttondownhandler);
console.log(a);
//a.style.backgroundcolor="Black";
console.log(a.classList);
a.classList.remove("bg-red");
a.classList.add("bg-blue");

