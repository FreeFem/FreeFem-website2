let open = false;

function openConsole() {
  const exConsole = document.getElementById('exampleConsole')

  if (open) {
    exConsole.style.height = "39px"
    exConsole.style.overflow = "hidden"
    open = false
  } else {
    exConsole.style.height = "100%"
    exConsole.style.overflow = "auto"
    open = true
  }
}
