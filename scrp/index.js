let width = document.getElementById("html").clientWidth;
let height =document.getElementById("html").clientHeight;
if(width < 301){
    alert("Your screen width is "+ width +"px.Your screen should have at least 301px.Othewise,this site can't work properly.")
}
if(height<400){
    alert("Your screen height is "+ height +"px.Your screen should have at least 400px.Othewise,this site can't work properly.")
}

function req(method,url){
    const promise = new Promise((resolve,reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.onload = function(){
            resolve(this.response);
        };
        xhr.open(method,url);
        xhr.responseType = "json";
        xhr.send();
    })
    return promise;
}
function getFrndData(){
    req("GET","./db/frnd.json").then((resData)=>{
        let i= 0
        let listid;let listid2;
        let hinp = document.getElementById("hiddenInp").value;
        let hinp2 = document.getElementById("hiddenInp2").value;
        hinp = resData.fl;
        hinp2 = resData.frn;
        listid = hinp.split("~");
        listid2 = hinp2.split("~");
        let inter = setInterval(() => {
            eCreator("li",listid2[i],"friendList",listid[i],"flist")
            i++;
             if (i>(resData.Frnd)){
                 clearInterval(inter)
             }
        }, 50);
        
        resData.Frnd;
    })
}
function hchanger(){
    let a = 0;
    let highlighter =document.getElementById("highlighter");
    req("Get","./db/highlightedtext.json").then((res)=>{
        let hinp3 = document.getElementById("hiddenInp3").value;
        hinp3 = res.text;
        let htext = hinp3.split("$")
        setInterval(() => {
            highlighter.innerText=htext[a];
            console.log(htext[a]);
            a++;
        }, 250);
    })
}
let imgCount = 0;
function imgDisplayCreator(){
    let hinp4 = document.getElementById("hiddenInp4").value;
    req("Get","./db/photos.json").then((ph)=>{
        hinp4= ph.src;
        let isrc = hinp4.split("$");
        let timer = setInterval(() => {
        if (imgCount < ph.count){
            eCreator("img",null,"imgDisplay","img"+imgCount,"imgDis","src",isrc[imgCount])
            imgCount++;
        }
        if(html.clientWidth > 425){
            wd()
        }else{
    
        }}, 100);
    })
}
hchanger()
getFrndData();
imgDisplayCreator()