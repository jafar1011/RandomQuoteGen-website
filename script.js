const quote = document.getElementById('text');
const character = document.getElementById('author');
const nqButton = document.getElementById('new-quote');
const tweetLink = document.getElementById('tweet-quote');

const fetchingQuote = async function () {
    try {
        const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
        const data = await response.json();
        const quoteObj = data[0];

        quote.innerHTML = `"${quoteObj.quote}"`;
        character.innerHTML = `- ${quoteObj.character}`;

        const tweetText = `"${quoteObj.quote}" - ${quoteObj.character}`;
        const tweetUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
        tweetLink.href = tweetUrl;
    } catch (error) {
        console.error('Error fetching:', error);
    }
};

fetchingQuote();

nqButton.onclick = function () {
    fetchingQuote();
}
