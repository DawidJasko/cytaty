// let apiQuotes = [];

//Show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = localQuote[Math.floor(Math.random() * localQuote.length)];
  console.log(quote);
}

// // Get Quotes From API

// async function getQuotes() {
//   const apiUrl = 'https://type.fit./api/quotes';

//   try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     console.log(apiQuotes);
//   } catch (error) {
//     alert;
//     // Catch Error Here
//   }
// }

// getQuotes();

newQuote();
