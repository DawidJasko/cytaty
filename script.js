const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

//Show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = localQuote[Math.floor(Math.random() * localQuote.length)];
  //Check if Author is blank and replese it with 'Unknow'
  if (!quote.author) {
    authorText.textContent = 'Unknow';
  } else {
    authorText.textContent = quote.author;
  }
  //Check Qoute length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }

  quoteText.textContent = quote.text;
}

// Get Quotes From API

async function getQuotes() {
  const apiUrl = 'https://type.fit./api/quotes';

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    console.log(apiQuotes);
  } catch (error) {
    alert;
    // Catch Error Here
  }
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} = ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

//Event Listen
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();

// Local
newQuote();
