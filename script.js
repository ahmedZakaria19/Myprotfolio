const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
const textElement = document.getElementById('typing-text');
const text = "Frontend & Mobile App Developer";
let index = 1;
let isDeleting = false;

function typeWriter() {
    const currentText = text.slice(0, index);
    textElement.textContent = currentText;

    if (!isDeleting) {
        index++;
        if (index > text.length) {
            isDeleting = true;
            setTimeout(typeWriter, 2000); 
            return;
        }
    } else {
        index--;
        if (index < 0) {
            isDeleting = false;
            index = 0;
        }
    }

    let speed = isDeleting ? 50 : 100;
    setTimeout(typeWriter, speed);
}

window.onload = typeWriter;