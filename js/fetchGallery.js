window.addEventListener('popstate', function(event) {
	if (history.state) {
		fetchGallery(event, history.state.url, history.state.title, true)
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
			// Get content (not surrounding header, footer, nav, ...)
			var parser = new DOMParser()
			var content = parser.parseFromString(html, "text/html")
			var galleryImg = content.getElementById('galleryImg')

			// Replace in the page
			document.querySelector('#galleryImg').innerHTML = galleryImg.innerHTML

			// Reset scroll
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0

			// Set history
			if (!disableHistory) history.pushState({url: url, title: title}, title, url)
			document.title = "FREEFEM++ - " + title

			// Relaunch MathJax
			try{
				MathJax.Hub.Queue(["Typeset",MathJax.Hub])
			} catch (error) {
				console.log('MathJax disabled');
				console.log(error)
			}
		})
		.catch(function(err) {
			console.log('Failed to fetch page: ', err)
		})
}

function activateGallery(elmt) {
	const elmtToActivate = elmt.parentNode.parentNode

	const galleryTitle = document.getElementById('galleryTitle')
	const list = galleryTitle.getElementsByTagName('li')

	for (let i = 0; i < list.length; i++) {
		list[i].classList.remove('active')
	}
	elmtToActivate.classList.add('active')
}
