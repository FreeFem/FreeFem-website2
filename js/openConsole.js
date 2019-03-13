let consoleOpen = false;
const mainDiv = document.getElementById('exampleMain')
const exResult = document.getElementById('exampleResult')
const exConsole = document.getElementById('exampleConsole')
const stdoutDiv = exConsole.children[1];
const exResultArrowDiv = exResult.children[1];
const exResultArrow = exResultArrowDiv.children[0]
const exResultText = exResultArrowDiv.children[1]

function openConsole() {

  // const exResultCanvas = exResult.children[3]

  if (consoleOpen) {
    mainDiv.style.gridTemplateRows = "calc(100% - 1.875rem) 1.875rem"
    stdoutDiv.classList.toggle('is-invisible')
    // exResultCanvas.classList.toggle('is-invisible')
    exResultArrowDiv.classList.toggle('is-invisible')
    consoleOpen = false
  } else {
    stdoutDiv.classList.toggle('is-invisible')
    // exResultCanvas.classList.toggle('is-invisible')
    exResultArrowDiv.classList.toggle('is-invisible')
    mainDiv.style.gridTemplateRows = "1.875rem calc(100% - 1.875rem)"
    consoleOpen = true
  }
}
