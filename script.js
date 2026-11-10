const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');

let currentSlide = 0;

// Создаем точки-индикаторы для каждого слайда
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateControls() {
    // Скрываем все слайды
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Показываем текущий
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');

    // Блокируем кнопки на краях
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;
    
    // Меняем прозрачность неактивных кнопок
    prevBtn.style.opacity = currentSlide === 0 ? '0.3' : '1';
    nextBtn.style.opacity = currentSlide === slides.length - 1 ? '0.3' : '1';
}

function goToSlide(index) {
    if (index >= 0 && index < slides.length) {
        currentSlide = index;
        updateControls();
    }
}

// Слушатели для кнопок
nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));

// Слушатели для клавиатуры (стрелочки влево/вправо, пробел)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        goToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft') {
        goToSlide(currentSlide - 1);
    }
});

// Инициализация при загрузке
updateControls();
