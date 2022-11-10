const works ={
    cicada: document.getElementById("cicada"),
    myrorna: document.getElementById("myrorna")
}
works.cicada.addEventListener("click",function(website){
    window.location.href = "cicada/index.html";
})
works.myrorna.addEventListener("click",function(website){
    window.location.href = "myrorna-vintage/index.html";
})
works.cicada.addEventListener("onhover", function(){
   works.cicada.style.border="5px solid red";
});
document.getElementById("work").addEventListener("click",function(){
    window.location.href= "#works-title";
})
