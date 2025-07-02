document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");
  const header = document.querySelector("header");
  const persona = document.getElementById("persona"); // <- este debe coincidir

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("scroll");
      logo.src = "../imagenes/sam.png";
      if (persona) persona.src = "../imagenes/person.png";
    } else {
      header.classList.remove("scroll");
      logo.src = "../imagenes/sam-osc.png";
      if (persona) persona.src = "../imagenes/person-osc.png";
    }
  });
});