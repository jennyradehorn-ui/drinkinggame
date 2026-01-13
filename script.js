function showCard() {
  const card = cards[currentIndex];
  const container = document.getElementById('card-container');
  const textDiv = document.getElementById('card-text');
  const catDiv = document.getElementById('card-category');

  // Text
  textDiv.textContent = currentLang === 'sv' ? card.text_sv : card.text_en;
  catDiv.textContent = card.cat;

  // Ta bort gamla emoji-klasser
  container.className = "";
  
  // Färg + emoji-klass per kategori
  switch(card.cat) {
    case 'Rösta tyst': container.style.backgroundColor = '#f28b82'; container.classList.add('rösta'); break;
    case 'Dare or drink': container.style.backgroundColor = '#fbbc04'; container.classList.add('dare'); break;
    case 'Truth or drink': container.style.backgroundColor = '#34a853'; container.classList.add('truth'); break;
    case 'Drick om': container.style.backgroundColor = '#4285f4'; container.classList.add('drickom'); break;
    case 'Snurra flaskan': container.style.backgroundColor = '#9c27b0'; container.classList.add('snurra'); break;
    case 'Vote to drink': container.style.backgroundColor = '#00bfa5'; container.classList.add('vote'); break;
    case 'All inclusive': container.style.backgroundColor = '#ff6d00'; container.classList.add('allinclusive'); break;
    case 'Övrigt': container.style.backgroundColor = '#8d6e63'; container.classList.add('other'); break;
    default: container.style.backgroundColor = '#000'; break;
  }

  // Fade-in animation
  container.style.opacity = 0;
  setTimeout(() => { container.style.opacity = 1; }, 50);
  container.style.transform = "scale(1.05)";
  setTimeout(() => { container.style.transform = "scale(1)"; }, 200);
}
