let ubiPrincipal=window.scrollY

let $nav=document.querySelector("#nav")

let $logo=document.getElementById("logo")
let $logo2=document.getElementById("logo2")

$nav.addEventListener("mouseenter", ()=>{

    if(window.scrollY <50){
        $nav.style.backgroundColor = "rgb(0, 0, 0)";
        $logo.style.display="block";
        $logo2.style.display="none"
        
    }
})


$nav.addEventListener("mouseleave", ()=>{
    if(window.scrollY <50){
        $nav.style.backgroundColor = "rgba(22, 22, 22, 0)";
        $logo.style.display="none";
        $logo2.style.display="block"
       

    }
})

window.addEventListener('scroll', function(){
    let ubiActual=window.scrollY
    console.log(ubiActual);

    if (ubiActual > 50) {
        $nav.style.backgroundColor = "rgb(0, 0, 0)"; // Fondo oscuro
        $logo.style.display="block";
        $logo2.style.display="none"
    } else {
        $nav.style.backgroundColor = "rgba(22, 22, 22, 0)"; // Fondo transparente
        $logo.style.display="none";
        $logo2.style.display="block"
    }

    if (ubiPrincipal >= ubiActual) {
        $nav.style.top="0px"
        
    } 
    else{
        $nav.style.top="-60px";
        $logo.style.display="none"
        $nav.style.backgroundColor = "rgba(22, 22, 22, 0)";
       
    }

    ubiPrincipal=ubiActual;
    
    
    
})


