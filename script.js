const botoesCurtir = document.querySelectorALL("curtir");
botoesCurtir.forEach(function(botoesCurtir){
let curtiu = false;
botoesCurtir.addEventListener("click", curtir);
function curtir(){
    const contador = botoesCurtir.querySelector("span");
    if(curtiu === false){
        contador.textContent++;
        curtiu = true;}
        else{
            contador.textContent--;
            curtiu = false;
        }
}
});