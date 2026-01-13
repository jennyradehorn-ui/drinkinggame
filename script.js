let cards = [];
let currentLang = 'sv';
let currentIndex = 0;

// Ladda Cards.json
fetch('Cards.json')
  .then(response => response.json())
  .then(data => {
    cards = data;
  });

// Språkval
document.querySelectorAll('#language-selection button').forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    document.getElementById('language-selection').style.display = 'none';
    document.getElementById('game').style.display = 'block';
  });
});

// Starta spel
document.getElementById('start-game').addEventListener('click', () => {
  currentIndex = 0;
  showCard();
});

// Nästa kort
document.getElementById('next-card').addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= cards.length) currentIndex = 0;
  showCard();
});

// Visa kort
function showCard() {
  const card = cards[currentIndex];
  const container = document.getElementById('card-container');
  container.textContent = currentLang === 'sv' ? card.text_sv : card.text_en;
  
  // Färg per kategori
  switch(card.cat) {
    case 'Rösta tyst': container.style.backgroundColor = '#f28b82'; break;
    case 'Dare or drink': container.style.backgroundColor = '#fbbc04'; break;
    case 'Truth or drink': container.style.backgroundColor = '#34a853'; break;
    case 'Drick om': container.style.backgroundColor = '#4285f4'; break;
    case 'Snurra flaskan': container.style.backgroundColor = '#9c27b0'; break;
    case 'Vote to drink': container.style.backgroundColor = '#00bfa5'; break;
    case 'All inclusive': container.style.backgroundColor = '#ff6d00'; break;
    case 'Övrigt': container.style.backgroundColor = '#8d6e63'; break;
    default: container.style.backgroundColor = '#000'; break;
  }
}
