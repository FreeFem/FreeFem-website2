let open = false;

function openConsole() {
  const exConsole = document.getElementById('exampleConsole')
  const temp = document.getElementById('main')

  if (open) {
    temp.style.gridTemplateRows = "auto 2.4375remx"
    exConsole.style.height = "2.4375rem"
    exConsole.style.overflow = "hidden"
    open = false
  } else {
    temp.style.gridTemplateRows = "70% 30%"
    exConsole.style.height = "100%"
    exConsole.style.overflow = "auto"
    open = true
  }
}
