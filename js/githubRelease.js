fetch('https://api.github.com/repos/FreeFem/FreeFem-sources/releases/latest')
	.then(response => {
		if (response.ok) {
			return response.json()
		} else {
			return Promise.reject('something went wrong!')
		}
	})
	.then(data => {
		document.getElementById("release").innerHTML = "<strong>" + data.tag_name + "</strong>Release notes"
	})
	.catch(error => document.getElementById("release").innerHTML = "Grab the latest version");
