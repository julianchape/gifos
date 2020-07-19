var burger = document.getElementById('burger');
burger.addEventListener("click",function(){
    var ul = document.getElementById('lista');
    if(ul.style.display=="none"){
        ul.style.display="block"
    }else{
        ul.style.display="none";
    }
})    