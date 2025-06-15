const quote = document.getElementById('text');
const character = document.getElementById('author');
const nqButton = document.getElementById('new-quote');
const tweetLink = document.getElementById('tweet-quote');

const fetchingQuote = function () {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then(response => response.json())
        .then(data => {
            const quoteObj = data[0];
            quote.innerHTML = `"${quoteObj.quote}"`;
            character.innerHTML = `- ${quoteObj.character}`;

            const tweetText = `"${quoteObj.quote}" - ${quoteObj.character}`;
            const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
            tweetLink.href = tweetUrl;
        })
        .catch(error => {
            console.error('Error fetching:', error);
        });
}

fetchingQuote();

nqButton.onclick = function () {
    fetchingQuote();
}
