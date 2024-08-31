const text = "Web Creation ♕♕♕ SEO services ♕♕♕ Social Media ♕♕♕";
const circleText = document.getElementById('circleText');
const textArray = text.split('');
const totalChars = textArray.length;

textArray.forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.className = 'text';
    if (char === '♕') {
        span.classList.add('star');
    }
    const angle = (i / totalChars) * 360;
    span.style.transform = `rotate(${angle}deg) translateY(-150px)`;
    circleText.appendChild(span);
});