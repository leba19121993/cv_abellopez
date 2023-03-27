//Menu lateral

var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu.menu_visible = true;
    }
    else{
        menu.style.display ="none"
        menu_visible = false;
    }
}

//oculto el menu una vez que selecciono una opcion

let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Crear las barritas de una barra particulas identificada por su id

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
    let div = document.createElement("div");
    div.className = "e";
    id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales para luego manipularlas

let html =document.getElementById("html")
crearBarra(html);
let javascript =document.getElementById("javascript")
crearBarra(javascript);
let mysql =document.getElementById("mysql")
crearBarra(mysql);
let springboot =document.getElementById("springboot")
crearBarra(springboot);
let java =document.getElementById("java")
crearBarra(java);
let github =document.getElementById("github")
crearBarra(github);

//Guardar la cantidad de barritas que se van a ir pintando por  cada barra
//se utiliza un arreglo, cada posicion pertenece a un elemento
//se comienza en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1]
//esta variable se utilizara de bandera para saber si ya se ejecuto la animación
let entro = false;


//funcion que aplica las animaciones de las habilidades 
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16,0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 12,1, intervalJavascript);
        },100);
        const intervalMysql = setInterval(function(){
            pintarBarra(mysql, 15,2, intervalMysql);
        },100);
        const intervalSpringBoot = setInterval(function(){
            pintarBarra(springboot, 10,3, intervalSpringBoot);
        },100);
        const intervalJava = setInterval(function(){
            pintarBarra(java, 12,4, intervalJava);
        },100);
        const intervalGithub = setInterval(function(){
            pintarBarra(github, 13,5, intervalGithub);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada

function pintarBarra(id_barra,cantidad,indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e")
        elementos[x].style.backgroundColor = "#940253";

    }else{
        clearInterval(interval)
    }
}

//se detecta el scrolling del mouse para aplicar la animacion de la barra

window.onscroll = function(){
    efectoHabilidades();
}

