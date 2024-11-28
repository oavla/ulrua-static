document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const gitHub = document.getElementById('gitHub');
  const engineDropdown = document.getElementById('searchEngine');
  setTimeout(() => searchInput.classList.add('expanded'), 200);
  setTimeout(() => engineDropdown.classList.add('expanded'), 200);
  setTimeout(() => gitHub.classList.add('spin'), 200);

  const sloganElement = document.getElementById('slogan');
  const quotes = [
    '"The only way to do great work is to love what you do." - Steve Jobs',
    '"Success is not the key to happiness. Happiness is the key to success." - Albert Schweitzer',
    '"Believe you can and you’re halfway there." - Theodore Roosevelt',
    '"Your time is limited, don’t waste it living someone else’s life." - Steve Jobs',
    '"Dream big and dare to fail." - Norman Vaughan',
    '"What lies behind us and what lies before us are tiny matters compared to what lies within us." - Ralph Waldo Emerson',
    '"Don’t watch the clock; do what it does. Keep going." - Sam Levenson',
    '"Act as if what you do makes a difference. It does." - William James',
    '"The best way to predict the future is to invent it." - Alan Kay',
    '"Do not wait to strike till the iron is hot; but make it hot by striking." - William Butler Yeats',
    '"The harder you work for something, the greater you’ll feel when you achieve it." - Anonymous',
    '"Success usually comes to those who are too busy to be looking for it." - Henry David Thoreau',
    '"Don’t be pushed by your problems. Be led by your dreams." - Ralph Waldo Emerson'
  ];
  let i = 0;
  let isDeleting = false;
  let currentQuote = quotes[Math.floor(Math.random() * quotes.length)];

  function typeWriter() {
    if (!isDeleting && i < currentQuote.length) {
      sloganElement.innerHTML = currentQuote.substring(0, i + 1);
      i++;
      setTimeout(typeWriter, 60);
    } else if (isDeleting && i > 0) {
      sloganElement.innerHTML = currentQuote.substring(0, i - 1);
      i--;
      setTimeout(typeWriter, 40);
    } else if (!isDeleting && i === currentQuote.length) {
      setTimeout(() => {
        isDeleting = true;
        typeWriter();
      }, 1000);
    } else if (isDeleting && i === 0) {
      isDeleting = false;
      currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
      typeWriter();
    }
  }

  typeWriter();
});