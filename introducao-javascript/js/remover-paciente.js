var pacientes = document.querySelectorAll(".paciente")
var table = document.querySelector("table")
table.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut")
    setTimeout(function(){
        event.target.parentNode.remove()//////////////////////////////////////////

    },500)
    
})/*
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){
        console.log("foi clicado duas vezes")
        this.remove()
    })
})*/