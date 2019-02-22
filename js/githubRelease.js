fetch('https://api.github.com/repos/FreeFem/FreeFem-sources/releases/latest')
	.then(response => {
		if (response.ok) {
			return response.json()
		} else {
			return Promise.reject('something went wrong!')
		}
	})
	.then(data => {
		document.getElementById("release").innerHTML = "Release notes " + data.tag_name
	})
	.catch(error => document.getElementById("release").innerHTML = "Grab the latest version");
