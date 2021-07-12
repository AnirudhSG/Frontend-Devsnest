var element = document.querySelectorAll(".box"); //grab the element
console.log(element);

element.forEach(element => {
  element.addEventListener("click",function(){
    element.classList.toggle("trans")

  })
  
});

