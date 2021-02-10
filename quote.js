const colors = [
	"#c0ffee",
	"#453a2e",
	"#dab420",
	"#b9c97b",
	"#820068",
	"#20b2aa",
	"#7fe5f0",
	"#800000"
	]



const URL = "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

async function getJson(){

const response = await fetch(URL);

if(!response.ok){
	throw new Error(`HTTP error! status: ${response.status}`);
}else{
	return await response.json();
}
}


const button = document.querySelector("#links #new-quote");



function randomQuote(){

	getJson().then(data =>{
	let quotesArray = data.quotes;

		let randomIndex = Math.floor(Math.random()*102);

        const container = document.querySelector("#text");
		const author = document.querySelector("#author");

		container.innerHTML = `<p style="font-size: 1.5em;"><i class="fa fa-quote-left"></i> ${quotesArray[randomIndex].quote} <i class="fa fa-quote-right"></i></p>`;
		author.innerHTML = `<p style="padding-left: 5rem;"> - ${quotesArray[randomIndex].author}</p>`;

		document.querySelector("#tweet-quote").setAttribute("href", `https://www.twitter.com/intent/tweet?&text=${quotesArray[randomIndex].quote} - ${quotesArray[randomIndex].author}`);

}).catch(error =>{
console.log(error)
});
}

function unifyColors(){
	let randomColorIndex = Math.floor(Math.random()*colors.length);
	document.body.style.backgroundColor = colors[randomColorIndex];
	document.querySelector("#text").style.color = colors[randomColorIndex];
	document.querySelector("#author").style.color = colors[randomColorIndex];
	document.querySelector("#tweet-quote").style.backgroundColor = colors[randomColorIndex];
	document.querySelector("#new-quote").style.backgroundColor = colors[randomColorIndex];
}


window.addEventListener("DOMContentLoaded", ()=>{
	randomQuote();
    unifyColors();

});

button.addEventListener("click", ()=>{
	const container = document.querySelector("#text p");
	container.textContent = "";
	randomQuote();
    unifyColors();
});