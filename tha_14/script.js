function alert1(){
    alert("video starts");
}
function alert2(){
    alert("video Paused");
}
function myfunc(){
    if (document.querySelector("body").style.backgroundColor=="red"){
        document.querySelector("body").style.backgroundColor="white"
    }
    else{
    document.querySelector("body").style.backgroundColor="red"
}}
function focussed(){
    if (document.querySelector("button").style.backgroundColor=="red"){
        document.querySelector("button").style.backgroundColor="white"
    }
    else{
    document.querySelector("button").style.backgroundColor="red"
}
}
function resise(){
    console.log("ab")
    document.querySelector("div").classList.add("video1")
}
function out(){
    document.querySelector(".xyz").innerHTML="mouse out";
}
function up(){
    document.querySelector(".up").innerHTML="video played or paused";
}