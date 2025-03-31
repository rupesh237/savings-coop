function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            initHeaderScripts();
        });
}

function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
}

function initHeaderScripts() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    const navLinksAnchors = document.querySelectorAll(".nav-links a");

    function setActiveLink(event) {
        navLinksAnchors.forEach(link => link.classList.remove("active"));
        event.target.classList.add("active");
        localStorage.setItem("activeNavLink", event.target.href);
    }

    navLinksAnchors.forEach(link => link.addEventListener("click", setActiveLink));

    const activeLink = localStorage.getItem("activeNavLink");
    if (activeLink) {
        navLinksAnchors.forEach(link => {
            if (link.href === activeLink) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener('scroll', function () {
        const navBar = document.querySelector('.nav-bar');
        const scrolled = window.pageYOffset > navBar.offsetTop;
        document.body.classList.toggle('scrolled', scrolled);
    });
}

loadHeader();
loadFooter();