const url = "https://dog.ceo/api/breeds/image/random";
let ImgEl = document.querySelector(".hero");

async function getDog() {
	ImgEl.innerHTML = `<img src="giphy.gif" alt="Loading">`;
	const response = await fetch(url);
	const data = await response.json();

	ImgEl.innerHTML = `<img src="${data.message}" alt="Que FOFO!">`;
}

document.addEventListener("DOMContentLoaded", getDog());
document.querySelector(".btn-hero").addEventListener("click", (e) => getDog());
