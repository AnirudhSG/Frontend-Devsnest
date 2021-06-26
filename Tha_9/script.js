console.log("anirudh")

const element=document.querySelectorAll('.p')
var x=0;
for(let i=0;i<36;i++){
element[i].addEventListener('click',()=>{
    console.log("cjj")
    console.log(element[0].classList)
    element[i].classList.toggle('x');
    
    if( element[i].classList.contains('x')){
        x=x+1
    }
    else{
        x=x-1
    }
    document.getElementById("ans1").innerHTML =x;
    document.getElementById("ans2").innerHTML =36- x;

});
}