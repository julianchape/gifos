var burger = document.getElementById('burger');
        burger.addEventListener("click",function(){
            var x = document.getElementById("lista");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        })