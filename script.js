let submit = document.getElementById("submit");

let nombreATrouver = 250;


submit.addEventListener("click", (e) => {
  e.preventDefault();
  let nombre = Number(document.getElementById("nombre").value);
  if (nombre>nombreATrouver) {
    alert("le chiffre est trop grand");
  } else if (nombre<nombreATrouver) {
    alert("le chiffre est trop petit");
  }else if (nombre==nombreATrouver) {
    alert("vous avez trouvé");
  }
});