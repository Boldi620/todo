// JavaScript to handle the animation and text typing
const texts = ['Відкрий світ запитань', 'Відповідай правильно, весело', 'Знання - ключ до перемоги', 'Випробуй свій інтелект', 'Дізнавайся більше, граючи', 'Грай, вчися, перемагай!', 'Розвивай мозок граючи'];

let index = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[index];
  if (charIndex < currentText.length && !isDeleting) {
    document.getElementById('text').innerText = currentText.substring(0, charIndex + 1);
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    document.getElementById('text').innerText = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (isDeleting) {
      setTimeout(type, 1000);
    } else {
      index++;
      if (index >= texts.length) index = 0;
      setTimeout(type, 100);
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(type, 1000);
});