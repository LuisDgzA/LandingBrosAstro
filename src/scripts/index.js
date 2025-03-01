function initServiceImages () {
    document.removeEventListener("scroll", updateImageOnScroll);
    console.log('pathname',window.location.pathname)
    if (window.location.pathname !== "/") return;
    console.log('pathname2',window.location.pathname)

    const $service_text_items = document.querySelectorAll(".services__item"),
    $img_service = document.querySelectorAll(".img__service");

    console.log("domloaded",$service_text_items);

    const imgService = document.querySelector(".image_service")
    
    const servicesImg = [
        '../src/assets/icons/service-web.svg',
        '../src/assets/icons/service-pages.svg',
        '../src/assets/icons/services-app.svg',
        '../src/assets/icons/services-videogames.svg',
        '../src/assets/icons/services-teach.svg',
        '../src/assets/icons/services-consulting.svg'
    ]
    

    function updateImageOnScroll() {
        if (window.innerWidth > 991) {
            console.log('991',$service_text_items)
            if($service_text_items.length > 0){

                if ($service_text_items[$service_text_items.length - 1].getBoundingClientRect().top > -50) {
                    let index = getTopDistance($service_text_items);
                    imgService.src = servicesImg[index];
                }
            }
        } else {
            $img_service.forEach($img => {
                $img.classList.add("active");
            });
        }
    }

    document.addEventListener("scroll", updateImageOnScroll);

}



document.addEventListener("astro:page-load", initServiceImages);
document.addEventListener("astro:after-swap", initServiceImages);
document.addEventListener("DOMContentLoaded", initServiceImages);


function getTopDistance(array){
    let contador = 0;
    for (let index = 0; index < array.length; index++) {

        let distanceTop = array[index].getBoundingClientRect().top

        if((distanceTop * -1) + 200 >= array[index].offsetHeight ){
            contador ++             
        }       
    }
    return contador;
}