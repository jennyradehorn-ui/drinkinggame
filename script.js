let cards = [];
let currentLang = 'sv';

const langSelect = document.getElementById('lang-select');
const gameSection = document.getElementById('game-section');
const cardElement = document.getElementById('card');
const categoryElement = document.getElementById('category');
const textElement = document.getElementById('text');
const nextBtn = document.getElementById('next-btn');

// Hämta korten
fetch('cards.json')
    .then(res => res.json())
    .then(data => { cards = data; });

function startGame(lang) {
    currentLang = lang;
    langSelect.classList.add('hidden');
    gameSection.classList.remove('hidden');
    showNextCard();
}

function showNextCard() {
    if (cards.length === 0) return;
    
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    
    // Uppdatera text
    categoryElement.innerText = randomCard.cat;
    textElement.innerText = randomCard['text_' + currentLang];

    // Uppdatera färg baserat på kategori
    cardElement.className = 'card'; // Nollställ
    const categoryClass = 'cat-' + randomCard.cat.toLowerCase().replace(/\s+/g, '-');
    cardElement.classList.add(categoryClass);
}

nextBtn.addEventListener('click', showNextCard);
