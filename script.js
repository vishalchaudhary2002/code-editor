function run(){
    let htmlcode=document.querySelector(".htmlcode").value;
    let csscode=document.querySelector(".csscode").value;
    let jscode=document.querySelector(".jscode").value;
    let outputcode=document.querySelector(".output");
    outputcode.contentDocument.body.innerHTML=htmlcode+"<style>"+csscode+"</style>";
    outputcode.contentWindow.eval(jscode);
}
// code for copy a text in different textarea

    let btn1=document.querySelector("#htxt");
    btn1.addEventListener("click",function(){
        let htmlcopy1=document.querySelector(".htmlcode");
        htmlcopy1.select();
        document.execCommand('copy');
        alert("copied");


    });

    let btn2=document.querySelector("#csstxt");
    btn2.addEventListener("click",function(){
        let htmlcopy2=document.querySelector(".csscode");
        htmlcopy2.select();
        document.execCommand('copy');
        alert("copied");


    });
    let btn3=document.querySelector("#jstxt");
    btn3.addEventListener("click",function(){
        let htmlcopy3=document.querySelector(".jscode");
        htmlcopy3.select();
        document.execCommand('copy');
        alert("copied");


    });

// code for download a file 


function htmlsave(){
    let data=document.querySelector(".htmlcode").value;
    var c=document.createElement("a");
    c.download="file1.html";
    var t=new Blob([data],{type:"text/plain"});
    c.href=window.URL.createObjectURL(t);
    c.click();

}
function csssave(){
    let data=document.querySelector(".csscode").value;
    var c=document.createElement("a");
    c.download="file2.css";
    var t=new Blob([data],{type:"text/plain"});
    c.href=window.URL.createObjectURL(t);
    c.click();

}
function jssave(){
    let data=document.querySelector(".jscode").value;
    var c=document.createElement("a");
    c.download="file3.js";
    var t=new Blob([data],{type:"text/plain"});
    c.href=window.URL.createObjectURL(t);
    c.click();

}
//lock text editor
function lock(){
     let textbox=document.querySelector(".htmlcode");
    textbox.setAttribute("disabled","true");
    let btn=document.querySelector("#btnlock");
    btn.style.backgroundColor="red";
}
function csslock(){
     let textbox=document.querySelector(".csscode");
    textbox.setAttribute("disabled","true");
    let btn=document.querySelector("#csslockbtn");
    btn.style.backgroundColor="red";
}
function jslock(){
     let textbox=document.querySelector(".jscode");
    textbox.setAttribute("disabled","true");
    let btn=document.querySelector("#jslockbtn");
    btn.style.backgroundColor="red";
}

//unlock text editor 
function unlock(){
     let textbox=document.querySelector(".htmlcode");
    textbox.removeAttribute("disabled");
    let btn=document.querySelector("#btnlock");
    btn.style.backgroundColor="white";
}
function cssunlock(){
     let textbox=document.querySelector(".csscode");
    textbox.removeAttribute("disabled");
    let btn=document.querySelector("#csslockbtn");
    btn.style.backgroundColor="white";
}
function jsunlock(){
     let textbox=document.querySelector(".jscode");
    textbox.removeAttribute("disabled");
    let btn=document.querySelector("#jslockbtn");
    btn.style.backgroundColor="white";
}
