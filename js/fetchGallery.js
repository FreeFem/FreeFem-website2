window.addEventListener('popstate', function(event) {
	if (history.state) {
		fetchModule(event, history.state.url, history.state.title, true)
		event.preventDefault()
		event.stopPropagation()
	}
})

function fetchGallery(e, url, title, disableHistory) {
	e.preventDefault()
	fetch(url)
		.then(function(response) {
			return response.text()
		})
		.then(function(html) {
			// Replace in the page
			document.querySelector('#galleryImg').innerHTML = html

			// Reset scroll
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0

			// Set history
			if (!disableHistory) history.pushState({url: url, title: title}, title, url)
			document.title = "FREEFEM++ - " + title

			// Relaunch MathJax
			MathJax.Hub.Queue(["Typeset",MathJax.Hub])
		})
		.catch(function(err) {
			console.log('Failed to fetch page: ', err)
		})
}
