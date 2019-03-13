let navOpened = false;

openNav = () => {
  const nav = document.getElementById('topNav')
  const navButton = document.getElementById('nav-button')

  if(window.getComputedStyle(navButton).display === 'none') return

  if (opened) {
    nav.style.width = 0
    opened = false
  } else {
    nav.style.width = "100%"
    opened = true
  }
}
