// carousel.js

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  const totalItems = items.length;
  let currentIndex = 0;
  const visibleItems = 3;
  let itemWidth = items[0].offsetWidth + 16; // 16px de gap
  let autoSlideInterval;

  function setCarouselWidth() {
    itemWidth = items[0].offsetWidth + 16;
    carousel.style.width = `${itemWidth * totalItems}px`;
  }

  function updateCarousel() {
    const offset = -currentIndex * itemWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      currentIndex++;
      if (currentIndex > totalItems - visibleItems - 1) {
        currentIndex = 0;
      }
      updateCarousel();
    }, 5000); // cada 5 segundos
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalItems - visibleItems - 1;
    }
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > totalItems - visibleItems - 1) {
      currentIndex = 0;
    }
    updateCarousel();
  });

  // Pausar al pasar el mouse
  const container = document.querySelector('.carousel-container');
  container.addEventListener('mouseenter', stopAutoSlide);
  container.addEventListener('mouseleave', startAutoSlide);

  // Adaptar tamaño al redimensionar ventana
  window.addEventListener('resize', () => {
    setCarouselWidth();
    updateCarousel();
  });

  // REDIRECCIÓN PERSONALIZADA al hacer clic
  items.forEach(item => {
    item.addEventListener('click', () => {
      const url = item.dataset.url;
      if (url) {
        window.location.href = url;
      }
    });
  });

  // Inicializar
  setCarouselWidth();
  updateCarousel();
  startAutoSlide();
});
