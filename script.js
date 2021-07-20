"use strict"

const modal = document.querySelector(".modal-overlay");

const setLang = ()=>{
    document.querySelector(".en").addEventListener("click", ()=>{
        localStorage.setItem("idioma","en");
        closeModal();
    })

    document.querySelector(".es").addEventListener("click", ()=>{
        localStorage.setItem("idioma","es");
        closeModal();
    })


}

const closeModal = ()=>{
    modal.style.animation = "unshow 1s forwards";
    setTimeout(()=>modal.style.display = "none",1000);
}

const lang =  localStorage.getItem("idioma");

if(lang === null) setLang();
else{
	console.log(`Idioma: ${lang}`)
	modal.style.display = "none";
} 