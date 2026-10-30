// ===== TASK 3: live search, price sort, Premium label =====
// I use the product cards that are already in the HTML. I do not create new ones.

const PREMIUM_LIMIT = 2400;   // N x 100, where N = 24

// Grab the elements I need from the page
const searchBox = document.querySelector('#search');
const sortBtn   = document.querySelector('#sort-btn');
const grid      = document.querySelector('#product-grid');
const noResults = document.querySelector('#no-results');
const cards     = document.querySelectorAll('.product');            // all 8 cards
const radios    = document.querySelectorAll('input[name="category"]'); // 4 filter radios

// Read the product name from a card, in lower case
function getName(card) {
  return card.querySelector('.card-title').textContent.toLowerCase();
}

// Read the price from a card: "Rs. 2,200" -> remove everything except digits -> 2200
function getPrice(card) {
  const text = card.querySelector('.card-body p').textContent;
  return Number(text.replace(/[^0-9]/g, ''));
}

// ----- 1. SEARCH (works together with the CSS category filter) -----
function updateVisibility() {
  const text = searchBox.value.trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach(card => {
    const matchesSearch = getName(card).includes(text);

    // Add/remove a class that hides the card (CSS: .hidden-by-search { display: none; })
    card.classList.toggle('hidden-by-search', !matchesSearch);

    // A card is really visible only if NEITHER the search NOR the category filter hides it.
    // getComputedStyle tells me the final display value after all CSS is applied.
    if (getComputedStyle(card).display !== 'none') {
      visibleCount++;
    }
  });

  // No visible cards -> hide the grid and show the message (and the reverse)
  grid.classList.toggle('d-none', visibleCount === 0);
  noResults.classList.toggle('d-none', visibleCount !== 0);
}

// Run on every keystroke
searchBox.addEventListener('input', updateVisibility);

// Also run when the category changes, because the category can also leave zero matches
radios.forEach(radio => radio.addEventListener('change', updateVisibility));

// ----- 2. SORT BY PRICE (click 1: low to high, click 2: high to low, ...) -----
let ascending = true;

sortBtn.addEventListener('click', () => {
  // Turn the NodeList into an array so I can use .sort()
  const sorted = Array.from(cards).sort((a, b) =>
    ascending ? getPrice(a) - getPrice(b) : getPrice(b) - getPrice(a)
  );

  // appendChild MOVES an existing element, so adding them in sorted order re-orders the grid
  sorted.forEach(card => grid.appendChild(card));

  sortBtn.textContent = ascending ? 'Sort by price: low to high' : 'Sort by price: high to low';
  ascending = !ascending;   // flip direction for the next click
});

// ----- 3. PREMIUM LABEL (added when the page loads) -----
cards.forEach(card => {
  if (getPrice(card) > PREMIUM_LIMIT) {
    const label = document.createElement('span');   // make a new <span>
    label.className = 'premium-label';
    label.textContent = 'Premium';
    card.querySelector('.card-body').prepend(label); // put it at the top of the card body
  }
});