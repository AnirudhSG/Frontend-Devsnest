var count=0
function ans(){
    count=count+1
    var x=document.querySelectorAll(".x")
    for (i = 0; i < 4; i++) {
        x[i].style.backgroundColor = "red";
      }
      document.querySelector(".right").style.backgroundColor = "green"
      document.querySelector(".score").innerHTML = count;
      
}

function ans2(){
    count=count+1;
    var x=document.querySelectorAll(".x")
    for (i = 4; i < 8; i++) {
        x[i].style.backgroundColor = "red";
      }
      document.querySelector(".right1").style.backgroundColor = "green"
      document.querySelector(".score").innerHTML = count;
      
    
}
function wrong(item){
     var t=document.querySelectorAll(".y");

    item.style.backgroundColor = "red"
}
document.querySelector(".score").innerHTML = count;
