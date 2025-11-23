document.addEventListener('DOMContentLoaded', () => {
  // === Carousel Logic ===
  const carousel = document.getElementById('carousel');
  const dotsContainer = document.getElementById('dots');
  const reviews = document.querySelectorAll('.review');
  const prev = document.getElementById('prev'); 
  const next = document.getElementById('next'); 

  let index = 0;
  const total = reviews.length;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${index * (340 + 25)}px)`; 
    updateDots();
  }

  function updateDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('div');
      dot.className = i === index ? 'active' : '';
      dot.addEventListener('click', () => {
        index = i;
        updateCarousel();
      });
      dotsContainer.appendChild(dot);
    }
  }

  //Auto slide 
  setInterval(() => {
    index = (index + 1) % total;
    updateCarousel();
  }, 5000);

  // sliding  buttons
  prev?.addEventListener('click', () => {
    index = (index - 1 + total) % total;
    updateCarousel();
  });

  next?.addEventListener('click', () => {
    index = (index + 1) % total;
    updateCarousel();
  });

  updateCarousel();

  // === Modal (Add Skill) ===
  const modal = document.getElementById('skillModal');
  const openBtn = document.querySelector('.add-skill-btn');
  const closeBtn = document.getElementById('closeModal');
  const cancelBtn = document.getElementById('cancelBtn');
  const addBtn = document.getElementById('addBtn');

  const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; //scrolling
  };

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // not scrolling
  });

  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);
  addBtn.addEventListener('click', closeModal);

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});
