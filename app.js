// Forbinder showModal knapperne til js
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("Antal");
dialog.returnValue = "Antal";

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}

// cancel knap lukker dialog boxen
cancelButton.addEventListener("click", () => {
  dialog.close("antalnotchosen");
  openCheck(dialog);
});
