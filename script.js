let currentSlides = [0, 0, 0]; // Index slide untuk setiap slider
const sliders = document.querySelectorAll('.slider');

function showSlide(sliderIndex, slideIndex) {
    const slider = sliders[sliderIndex];
    const slides = slider.querySelector('.slides');
    const slideCount = slides.querySelectorAll('img').length;
    const dots = slider.querySelectorAll('.dot');

    // Batasi slideIndex agar tidak keluar batas
    if (slideIndex >= slideCount) currentSlides[sliderIndex] = 0;
    else if (slideIndex < 0) currentSlides[sliderIndex] = slideCount - 1;
    else currentSlides[sliderIndex] = slideIndex;

    // Geser slide
    slides.style.transform = `translateX(-${currentSlides[sliderIndex] * 100}%)`;

    // Perbarui dot aktif
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlides[sliderIndex]);
    });
}

function moveSlide(direction, sliderIndex) {
    showSlide(sliderIndex, currentSlides[sliderIndex] + direction);
}

// Inisialisasi slider
sliders.forEach((slider, index) => {
    const slideCount = slider.querySelectorAll('img').length;
    const dotsContainer = slider.querySelector('.dots');

    // Tambahkan dot untuk setiap slide
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.onclick = () => showSlide(index, i);
        dotsContainer.appendChild(dot);
    }

    showSlide(index, 0);
});
