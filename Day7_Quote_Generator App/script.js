const api_url = "https://api.quotable.io/quotes/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    
    quote.innerHTML = data[0].content;
    author.innerHTML = data[0].author;
}

getquote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "--- by " + author.innerHTML , "Tweet Window" , "width=600, height=300")
}

