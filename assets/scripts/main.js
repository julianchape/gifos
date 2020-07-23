var burger = document.getElementById('burger');
        burger.addEventListener("click",function(){
            var x = document.getElementById("lista");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        })

const apiKey = '2j2nFdUnwzYEf2AFwEXO1LlzWlJFNI5I';
async function getTrendingGifs(){
    let url = 'http://api.giphy.com/v1/gifs/trending?api_key='+apiKey+'&limit=3'
    const trendingData = await fetch (url);
    const trendingArray = await trendingData.json();
    return trendingArray.data;
}

async function addTrendingToDom(){
    var poner = await getTrendingGifs();
    var seccion = document.getElementById('trending');
    console.log(poner);
    for (let i=0;i<poner.length;i++){
        var img = document.createElement('img');
        img.setAttribute('src',poner[i].images.downsized_large.url);
        seccion.appendChild(img);
    }
}

addTrendingToDom();
