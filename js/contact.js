document.getElementById('contact').addEventListener('submit', function(e) {
	let xhr = new XMLHttpRequest();

	let tele = document.querySelector('input[name="tele"]').value;
	let auto = document.querySelector('input[name="auto"]').value;
	let addr = document.querySelector('input[name="addr"]').value;
	let date = document.querySelector('input[name="date"]').value;
	let comm = document.querySelector('input[name="comm"]').value;

	xhr.open('POST', 'https://xn----7sbgjfran1adece4as5e.xn--p1ai/contact.php');
	xhr.withCredentials = true;
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = function() {
		if (xhr.status === 200) {
			alert(xhr.responseText);
		} else {
			alert('Ошибка при отправке сообщения :( Пожалуйста, позваните нам сами!');
		}
	};
	xhr.send(encodeURI('tele=' + tele + '&auto=' + auto + '&addr=' + addr + '&date=' + date + '&comm=' + comm));
	e.preventDefault();
});
