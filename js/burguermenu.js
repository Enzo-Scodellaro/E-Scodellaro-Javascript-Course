export default function hamburguerMenu(panelBtn,panel,menulink){
    const d = document;
    
    d.addEventListener("click",(e) => {
        if(e.target.matches(panelBtn)|| e.target.matches(`${panelBtn} *`)){
        d.querySelector(panel).classList.toggle("is-active");
        d.querySelector(panelBtn).classList.toggle("is-active");
    }
    if(e.target.matches(menulink)){
        d.querySelector(panel).classList.remove("is-active");
        d.querySelector(panelBtn).classList.remove("is-active");
    }
    });
}