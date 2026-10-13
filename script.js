// Раскрытие/скрытие текста "Обо мне"
const aboutBtn = document.getElementById('about-btn');
const aboutText = document.getElementById('about-text');

aboutBtn.addEventListener('click', () => {
  const isHidden = aboutText.classList.toggle('hidden');

  // Меняем подпись и aria-атрибут
  if (isHidden) {
    aboutBtn.textContent = 'нажми, чтобы прочитать обо мне';
    aboutBtn.setAttribute('aria-expanded', 'false');
  } else {
    aboutBtn.textContent = 'свернуть';
    aboutBtn.setAttribute('aria-expanded', 'true');
  }
});

// Смена темы
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});