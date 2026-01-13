let cards = [];
let currentCard = null;
let currentLang = 'sv';

const cardElement = document.getElementById('card');
const categoryElement = document.getElementById('category');
const textElement = document.getElementById('text');
const nextBtn = document.getElementById('next-btn');

// Hämta kortdata
fetch('cards.json')
    .then(response => response.json())
    .then(data => {
        cards = data;
    })
    .catch(err => {
        console.error("Kunde inte ladda cards.json:", err);
        textElement.innerText = "Kunde inte ladda korten. Kolla formatet i cards.json!";
    });

// Språkfunktion
function setLanguage(lang) {
    currentLang = lang;
    
    // Uppdatera knappar
    document.getElementById('btn-sv').classList.toggle('active', lang === 'sv');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');

    if (currentCard) {
        updateCardDisplay();
    }
}

// Slumpa kort
function showRandomCard() {
    if (cards.length === 0) return;
    
    currentCard = cards[Math.floor(Math.random() * cards.length)];
    
    // Animation: "Pop" effekt när man byter kort
    cardElement.style.transform = "scale(0.8) rotate(-5deg)";
    
    setTimeout(() => {
        updateCardDisplay();
        cardElement.style.transform = "scale(1) rotate(0deg)";
    }, 100);
}

// Uppdatera skärmen
function updateCardDisplay() {
    categoryElement.innerText = currentCard.cat + " ✨";
    textElement.innerText = currentCard['text_' + currentLang];

    // Byt färgklass
    cardElement.className = 'card'; // Nollställ
    const categoryClass = 'cat-' + currentCard.cat.toLowerCase().replace(/\s+/g, '-');
    cardElement.classList.add(categoryClass);
}

nextBtn.addEventListener('click', showRandomCard);
