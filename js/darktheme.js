const d = document;

export default function darkTheme(btn,classDark){
    const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");
    // console.log($selectors)

    let moon = "🌙",sun = "☀️";


    let darkModeLS = localStorage.getItem('dark');
    
    if (darkModeLS === 'true'){
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = sun;
      }else {
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
      }
    



    d.addEventListener("click", e => {
        if(e.target.matches(btn)){

            console.log($themeBtn.textContent);

            let darkmode = localStorage.getItem('dark');

            if($themeBtn.textContent === moon){
                $selectors.forEach(el => el.classList.add(classDark));
                $themeBtn.textContent = sun;
                localStorage.setItem('dark',true);
            }
            else{
                $selectors.forEach(el => el.classList.remove(classDark));
                $themeBtn.textContent = moon;
                localStorage.setItem('dark',false);
            }
            console.log(localStorage.getItem('dark'))
        }
    })
}
