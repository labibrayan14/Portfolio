let html = document.getElementById("html");
let body;
function eCreator(tName,tValue,pId,id,clss,src,srcAdrs){
    const eName = document.createElement(tName);
    const eValue = document.createTextNode(tValue);
    eName.appendChild(eValue);
    eName.setAttribute("id",id);
    eName.setAttribute("class",clss);
    eName.setAttribute(src,srcAdrs);
    const pElement = document.getElementById(pId);
    pElement.appendChild(eName);
}
function wd(){
    body = document.getElementById("body");
    body.style.height = html.clientHeight +"px"; 
}

function darkmode(){
    window.alert("Coming Soon")
}
let count = 0;
let timer = setInterval(() => {
    count++;
    if(html.clientWidth > 425){
        wd()
    }}, 100);
function modecheaker(){
    let hinp5=document.getElementById("hiddenInp5").value;
    let mode = document.getElementById("mode");
    let modeButton = document.getElementById("modeButton")
    if(hinp5 == "0"){
        mode.href = "./stl/dark-mode.css"
        document.getElementById("hiddenInp5").value = "1";
        modeButton.innerText = "Turn off Dark Mode"
    } 
    else{
        modeButton.innerText = "Turn on Dark Mode"
        mode.href = "./stl/light-mode.css"
        document.getElementById("hiddenInp5").value = "0";
    }
}

