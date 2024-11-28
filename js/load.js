document.addEventListener('DOMContentLoaded', function() {
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
    '"Dream big and dare to fail." - Norman Vaughan'
  ];
  let currentQuoteIndex = 0;
  let i = 0;

  function typeWriter() {
    if (i < quotes[currentQuoteIndex].length) {
      sloganElement.innerHTML += quotes[currentQuoteIndex].charAt(i);
      i++;
      setTimeout(typeWriter, 60);
    } else {
      setTimeout(() => {
        sloganElement.classList.add('cursor-fade-out');
        setTimeout(nextQuote, 1000); 
      }, 1000);
    }
  }

  function nextQuote() {
    sloganElement.classList.remove('cursor-fade-out');
    sloganElement.innerHTML = '';
    i = 0;
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length; 
    typeWriter();
  }

  typeWriter(); 
});