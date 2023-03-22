const d = document;
const banner = d.getElementsByClassName('banner')
export default function searchFilters(input,selector){
d.addEventListener('keyup', e => {
if(e.target.matches(input)){//!If--> el orginen del evento conincide con lo que le pase como valor de input entonces
    
    console.log(e.target.value);
    if(e.target.value != ""){
        Swal.fire({
            toast:true,
            title:`Filtrando por "${e.target.value}"`,
            position: 'bottom-left',
            showConfirmButton:false,
            icon:'warning',  
        })
    }else{
        Swal.close();
    }
    
    if(e.key === "Escape")e.target.value = "" 
    
    d.querySelectorAll(selector).forEach((el) =>{//! Para cada elemento que tenga el selctor que le pasamos como argumento
        el.textContent.toLowerCase().includes(e.target.value.toLowerCase())//! Analizaremos con un Booleano si el textContent de cada elemento incluye lo que se esta capturando en el input
        ? el.classList.remove("filter")
        :el.classList.add("filter");
    })
}
})
}