const inputText = document.querySelector('textarea');
const btn = document.querySelector('button');
const result = document.querySelector('p');

endUrl = 'https://api.funtranslations.com/translate/minion.json?text=';

btn.addEventListener('click', () => {
	fetch(endUrl + inputText.value)
		.then(res => res.json())
		.then(json => {
			if (inputText.value === '') {
				result.innerHTML =
					'<i class="fas fa-exclamation-circle"></i> Please enter text';
				result.style.color = 'red';
			} else {
				result.textContent = json.contents.translated;
			}
		})
		.catch(err => {
			result.innerHTML =
				'<i class="fas fa-exclamation-circle"></i> Please try latter';
			result.style.color = 'red';
		});
});
