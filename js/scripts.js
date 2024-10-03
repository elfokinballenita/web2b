var segundos = 0;
function temporizador() {
segundos = segundos + 1;
document.getElementById("contador").innerHTML = segundos;
}
 setInterval(temporizador,1000);
         
function iniciar() {
    setInterval(temporizador,1000);
}

funcion parar() {
    clearInterval();  
}