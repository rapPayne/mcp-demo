const message = document.getElementById("message");

function setMessage(text) {
  message.textContent = text;
}

document.getElementById("btn-one").addEventListener("click", () => {
  setMessage("Main action selected");
});

document.getElementById("btn-two").addEventListener("click", () => {
  setMessage("Danger action selected");
});

document.getElementById("btn-three").addEventListener("click", () => {
  setMessage("Warning action selected");
});
