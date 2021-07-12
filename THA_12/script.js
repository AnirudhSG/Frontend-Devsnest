var input = document.querySelector("#input");
let taskadd = document.querySelector(".todo-list");
document.querySelector("#btn-add").addEventListener("click",add1)
function add1() {
    let value=input.value;
    if (value==""){
        alert("Enter Your todo");
        return;
    }
    else {
    let listitem = `<div class='task'>${value}<button id="del-btn">Remove</button></div>` ;
    // localStorage.setItem("listitem",listitem);
    taskadd.innerHTML +=listitem;
    input.value="";
    var dlt=document.querySelectorAll("#del-btn");
    dlt.forEach(el=> {
        el.addEventListener("click",function(){
        
            let item= this.parentElement;
            item.remove();
        } )
        

        
    });
    


}};
