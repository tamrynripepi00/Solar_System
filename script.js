(() => {
  const body = document.body;
  const universe = document.getElementById("universe");
  const solarSystem = document.getElementById("solar-system");

  document.getElementById("toggle-data").addEventListener("click", (event) => {
    body.classList.toggle("data-open");
    body.classList.toggle("data-close");
    event.preventDefault();
  });

  document.getElementById("toggle-controls").addEventListener("click", (event) => {
    body.classList.toggle("controls-open");
    body.classList.toggle("controls-close");
    event.preventDefault();
  });

  document.querySelectorAll("#data a").forEach((link) => {
    link.addEventListener("click", (event) => {
      solarSystem.className = link.className;
      document.querySelectorAll("#data a").forEach((planet) => planet.classList.remove("active"));
      link.classList.add("active");
      event.preventDefault();
    });
  });

  document.querySelector(".set-view").addEventListener("click", () => {
    body.classList.toggle("view-2D");
    body.classList.toggle("view-3D");
  });

  document.querySelector(".set-zoom").addEventListener("click", () => {
    body.classList.toggle("zoom-large");
    body.classList.toggle("zoom-close");
  });

  document.querySelector(".set-speed").addEventListener("click", () => {
    universe.className = "scale-stretched set-speed";
  });
  document.querySelector(".set-size").addEventListener("click", () => {
    universe.className = "scale-s set-size";
  });
  document.querySelector(".set-distance").addEventListener("click", () => {
    universe.className = "scale-d set-distance";
  });
  document.querySelector(".set-years").addEventListener("click", () => {
    universe.className = "scale-stretched set-years";
  });

  body.classList.remove("opening", "view-2D");
  body.classList.add("view-3D");
  window.setTimeout(() => {
    body.classList.remove("hide-UI");
    body.classList.add("set-speed");
  }, 2000);
})();
