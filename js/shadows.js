const d = document;

export default function hoverShadow(origin){
d.addEventListener('mouseover',e => {
    if(e.target.classList.contains(origin)){
         e.target.classList.add('shadow');
    }
}) 
}

