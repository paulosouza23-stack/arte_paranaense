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

const btnTema = document.querySelector(".btn-tema");
btnTema.addEventListener("click", mudarTema);
function mudarTema(){
    document.body.classList.toggle("tema-escuro"):
}