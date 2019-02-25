let opened = false;

function openNav() {
  const nav = document.getElementById('topNav')
  const navButton = document.getElementById('nav-button')

  const directStyle = navButton.style.display
  const computedStyle = window.getComputedStyle(navButton)
  if((directStyle === 'none') || (computedStyle.display === 'none')) return

  if (opened) {
    nav.style.width = 0
    opened = false
  } else {
    nav.style.width = "100%"
    opened = true
  }
}
