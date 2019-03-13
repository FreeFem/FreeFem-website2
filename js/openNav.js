let navOpened = false;

openNav = () => {
  const nav = document.getElementById('topNav')
  const navButton = document.getElementById('nav-button')

  if(window.getComputedStyle(navButton).display === 'none') return

  if (navOpened) {
    nav.style.width = 0
    navOpened = false
  } else {
    nav.style.width = "100%"
    navOpened = true
  }
}
