export default function banner (){
    const images = document.querySelectorAll('.banner img');
    let index = 0;

    function carousel (){
        images[index].classList.remove('active');
        index = (index + 1) % images.length ;
        images[index].classList.add('active');

    }

    setInterval(carousel,3000);

}