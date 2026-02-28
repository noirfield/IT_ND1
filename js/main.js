document.addEventListener("DOMContentLoaded", function () {
    fetch("./partials/header.html")
        .then(response => response.text())
        .then(data => {
        document.getElementById("header").innerHTML = data;

        let currentPage = window.location.pathname.split("/").pop();
        if (currentPage === "") {
            currentPage = "index.html";
        }

        const links = document.querySelectorAll("nav a");

        links.forEach(link => {
            if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
            }
        });
        });
    fetch("./partials/footer.html")
        .then(r => r.text())
        .then(html => {
        document.getElementById("footer").innerHTML = html;
        });
});