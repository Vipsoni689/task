document.getElementById("toggle").onclick =()=>{
    var main_slide=document.getElementById("main_slide")

    main_slide.classList.add("active")
    
}

function cut1(){
    var main_slide=document.getElementById("main_slide")
    main_slide.classList.remove("active")
}


function form1(){
    document.getElementById("form").classList.add("active")
}
function cut2(){
    document.getElementById("form").classList.remove("active")
}




const cut3=()=>{
    document.getElementById("pop").style="display:none"
}
