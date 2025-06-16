const images = document.querySelectorAll('.image-row img');

images.forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.1)';
    img.style.transition = 'transform 0.3s ease';
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});

// Dark mode switch logic
const switchToggle = document.getElementById('darkModeSwitch');

switchToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', switchToggle.checked);
});