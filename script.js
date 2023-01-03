const images = ["carousel-1.jpg","carousel-2.jpg" ,"carousel-3.jpg","carousel-4.jpg","carousel-5.jpg","carousel-6.jpg"];
const carousel =  document.querySelector(".carousel");
const interval = setInterval(function() {
    startCarousel();
}, 3000);
var index = 1;

startCarousel = () => {
    carousel.style.backgroundImage = `url(${images[index++]})`;
    carousel.classList.remove("fade")
    void carousel.offsetWidth;
    carousel.classList.add("fade");
    if( index > images.length - 1) index = 0;
}