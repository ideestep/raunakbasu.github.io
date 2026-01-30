function loadHTML(id, file) {
  fetch(file)
    .then(r => {
      if (!r.ok) throw new Error(file + " not found");
      return r.text();
    })
    .then(html => document.getElementById(id).innerHTML = html)
    .catch(err => console.error(err));
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header", "partials/header.html");
  loadHTML("footer", "partials/footer.html");
});
