let opened = false;

function openNav() {
  const nav = document.getElementById('topNav');
  const navButton = document.getElementById('nav-button');

  if(navButton.style.display === 'none') return

  if (opened) {
    nav.style.width = 0
    opened = false
  } else {
    nav.style.width = "100%"
    opened = true
  }
}
