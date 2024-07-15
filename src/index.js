const init = () => {
  const inputFormEl = document.querySelector("form");
  inputFormEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const searchByIDInputEl = event.target.querySelector("input#searchByID");

    fetch(`http://localhost:3000/movies/${searchByIDInputEl.value}`)
      .then((response) => response.json())
      .then((data) => {
        const titleEl = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        titleEl.textContent = data.title;
        summary.textContent = data.summary;

        searchByIDInputEl.value = "";
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
