const buttunInstall = document.getElementById("buttonInstall");
const txtHeader = document.getElementById("txtHeader");
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installBtn.style.visibility = "visible";
  txtHeader.textContent = "for install please click the button !";

  installBtn.addEventListener("click", () => {
    event.prompt();
    installBtn.setAttribute("disabled", true);
    installBtn.textContent = "Installed success !";
  });
});

window.addEventListener("appinstalled", (event) => {
  txtHeader.textContent = "installed success !";
  console.log("appinstalled", event);
});
