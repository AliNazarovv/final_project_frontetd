let lenta = document.querySelector('.carousel-images');
let width = 19;
let slides = document.querySelectorAll('.carousel-images .img');
let currentSlide = 0;

lenta.style.width = `${width * slides.length + 10}%`;
setInterval(() => {
    currentSlide++;

    if (currentSlide >= slides.length) currentSlide = 0;
    lenta.style.left = `-${currentSlide * width}%`;

    console.log(slides[currentSlide].children[0].children[0]);

    slides[currentSlide].children[0].children[0].classList.add("active-text")
    slides[currentSlide].children[0].children[1].classList.add("active-text")
    slides[currentSlide].children[0].children[2].classList.add("active-text")



}, 3000);

slideNextBtn.addEventListener('click', () => {
    if (currentSlide >= slides.length) currentSlide = 0;
    currentSlide++;

    lenta.style.left = `-${currentSlide * width}px`;
})

slidePrevBtn.addEventListener('click', () => {
    if (currentSlide >= slides.length) {
        currentSlide = 0
    }
    if (currentSlide > 0) {
        currentSlide--;
    }

    lenta.style.left = `-${currentSlide * width}px`;
})



console.log("salam");