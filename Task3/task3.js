let btn = document.querySelector('.js-btn-request');
let divNode = document.querySelector('.js-result');

function makeRequest(url, callback) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.send();

	xhr.onload = () => {
		if(xhr.status != 200) {
			console.log(xhr.status);
		} else {
			let result = JSON.parse(xhr.response);
			if (callback) callback(result);
		}
	}
	xhr.onerror = () => {
		console.log('Ошибка! Статус ответа: ', xhr.status);
	}
}

function addCards(apiData) {
	let cardBlock = '';

	apiData.forEach(elem => {
		let card = `<div class='card'>
			<img src='${elem.download_url}' class='card-image'>
			<p>${elem.author}</p>
			</div>`;
		cardBlock = cardBlock + card;
	});
	divNode.innerHTML = cardBlock;
	divNode.style.color = 'black';
}

function showCards() {
	let customValue = +document.querySelector('.input').value;

	if (isNaN(customValue)) {
		divNode.innerText = 'Введите натуральное число в диапазоне от 1 до 10!';
		divNode.style.color = 'red';
	}
	else if (customValue < 1 || customValue > 10) {
		divNode.innerText = 'Введено число вне диапазона от 1 до 10!';
		divNode.style.color = 'red';
	} else {
		makeRequest('https://picsum.photos/v2/list?limit=' + customValue, addCards);
	}
}

btn.addEventListener('click', showCards);
