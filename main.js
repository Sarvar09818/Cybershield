// Автоподстановка текущего года в футер
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Проверка и обработка формы, если она есть
  const form = document.getElementById('contactForm');
  const successAlert = document.getElementById('successAlert');

  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      event.stopPropagation();

      // honeypot
      const honeypot = document.getElementById('website');
      if (!form.checkValidity() || (honeypot && honeypot.value)) {
        form.classList.add('was-validated');
        if (successAlert) successAlert.classList.add('visually-hidden');
      } else {
        // Успешная отправка
        if (successAlert) {
          successAlert.classList.remove('visually-hidden');
        }
        form.classList.remove('was-validated');
        form.reset();
      }
    });
  }
});
