// Function to perform Caesar Cipher encryption or decryption
function caesarCipher(text, shift, mode) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';

  // Adjust shift for decryption
  if (mode === 'decrypt') shift = -shift;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (alphabet.includes(char)) {
      let index = (alphabet.indexOf(char) + shift) % 26;
      if (index < 0) index += 26; // Handle negative index
      result += alphabet[index];
    } else if (alphabetUpper.includes(char)) {
      let index = (alphabetUpper.indexOf(char) + shift) % 26;
      if (index < 0) index += 26; // Handle negative index
      result += alphabetUpper[index];
    } else {
      result += char; // Non-alphabet characters remain unchanged
    }
  }
  return result;
}

// Event listeners for Encrypt and Decrypt buttons
document.getElementById('encryptButton').addEventListener('click', () => {
  const inputText = document.getElementById('inputText').value;
  const shiftValue = parseInt(document.getElementById('shiftValue').value, 10);

  if (isNaN(shiftValue)) {
    alert('Please enter a valid shift value.');
    return;
  }

  const encryptedText = caesarCipher(inputText, shiftValue, 'encrypt');
  document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptButton').addEventListener('click', () => {
  const inputText = document.getElementById('inputText').value;
  const shiftValue = parseInt(document.getElementById('shiftValue').value, 10);

  if (isNaN(shiftValue)) {
    alert('Please enter a valid shift value.');
    return;
  }

  const decryptedText = caesarCipher(inputText, shiftValue, 'decrypt');
  document.getElementById('outputText').value = decryptedText;
});

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
const stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speedX: Math.random() * 2 - 1,
    speedY: Math.random() * 2 - 1
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    star.x += star.speedX;
    star.y += star.speedY;

    if (star.x < 0 || star.x > canvas.width) star.speedX *= -1;
    if (star.y < 0 || star.y > canvas.height) star.speedY *= -1;
  });
  requestAnimationFrame(drawStars);
}

drawStars();