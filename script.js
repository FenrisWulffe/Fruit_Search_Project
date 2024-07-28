const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	// Below is a check to make sure the function is being called properly.
	// console.log('search function is being called by searchHandler');
	// console.log('Input value for search function: ', str);
	if (str == '') {
		return [];
	} else {
		// console.log(str);
		let results = fruit.filter((entry) => entry.toLowerCase().includes(str));
		// console.log(results);
		return results;
	}
}

function searchHandler(e) {
	// Below is a check to make sure the function is being called properly.
	// console.log('searchHandler function is being called by keyup');
	// console.log('Key entered: ', e.key);
	// console.log('Search field: ', document.getElementById('fruit').value);
	let fruitInput = document.getElementById('fruit').value.toLowerCase();
	// console.log('fruitInput value: ', fruitInput);
	let results = search(fruitInput);
	// console.log(results);
	showSuggestions(results, fruitInput);
}

function showSuggestions(results) {
	// Below is a check to make sure the function is being called properly.
	// console.log('showSuggestions function is being called by searchHandler');
	// console.log(inputVal);
	// console.log(results);
	let fruitList = document.querySelector('ul');
	// console.log(fruitList);
	// write a function to remove previous fruitList entries with each keyup
	while (fruitList.firstChild) {
		fruitList.removeChild(fruitList.firstChild);
	}
	let suggestions = document.createDocumentFragment();
	// write a forEach function to turn each array entry of results into an li element
	results.forEach(fruitType => {
		// console.log(fruitType);
		let li = document.createElement('li');
		li.textContent = fruitType;
		suggestions.appendChild(li);
	});
	// console.log('__________________________________________');
	fruitList.appendChild(suggestions);
}

function useSuggestion(e) {
	let searchSelection = e.target.innerText;
	// console.log('Clicked on: ', searchSelection);
	document.getElementById('fruit').value = searchSelection;
	// console.log(document.getElementById('fruit'));
	let fruitList = document.querySelector('ul');
	while (fruitList.firstChild) {
		fruitList.removeChild(fruitList.firstChild);
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);