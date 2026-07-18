/* ==========================================
   Academic Portfolio
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       Sidebar Toggle
    ===================================== */

    const menuButton = document.getElementById("menuToggle");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.getElementById("overlay");

    if (menuButton && sidebar) {

        menuButton.addEventListener("click", function () {

            sidebar.classList.toggle("open");

            if (overlay) {
                overlay.classList.toggle("show");
            }

        });

    }

    if (overlay) {

        overlay.addEventListener("click", function () {

            sidebar.classList.remove("open");
            overlay.classList.remove("show");

        });

    }

    /* =====================================
       Close Sidebar on Mobile
    ===================================== */

    document.querySelectorAll(".sidebar a").forEach(link => {

        link.addEventListener("click", function () {

            sidebar.classList.remove("open");

            if (overlay) {
                overlay.classList.remove("show");
            }

        });

    });

    /* =====================================
       Dark Mode
    ===================================== */

    const themeButton = document.getElementById("themeToggle");

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark-mode");

        if (themeButton) {
            themeButton.innerHTML =
                '<i class="fa-solid fa-sun"></i>';
        }

    }

    if (themeButton) {

        themeButton.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {

                localStorage.setItem("theme", "dark");

                themeButton.innerHTML =
                    '<i class="fa-solid fa-sun"></i>';

            } else {

                localStorage.setItem("theme", "light");

                themeButton.innerHTML =
                    '<i class="fa-solid fa-moon"></i>';

            }

        });

    }

    /* =====================================
       Scroll Animation
    ===================================== */

    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold:0.15

    });

    sections.forEach(function(section){

        section.classList.add("fade-in");

        observer.observe(section);

    });

    /* =====================================
       Back To Top Button
    ===================================== */

    const topButton = document.createElement("button");

    topButton.id = "backToTop";

    topButton.innerHTML =
        '<i class="fa-solid fa-arrow-up"></i>';

    document.body.appendChild(topButton);

    window.addEventListener("scroll", function(){

        if(window.scrollY > 400){

            topButton.style.display = "block";

        }else{

            topButton.style.display = "none";

        }

    });

    topButton.addEventListener("click", function(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /* =====================================
       Publication Search
    ===================================== */

    const search =
        document.getElementById("publicationSearch");

    if(search){

        search.addEventListener("keyup", function(){

            const value = this.value.toLowerCase();

            document.querySelectorAll(".publication-item")
            .forEach(function(item){

                if(item.innerText.toLowerCase().includes(value)){

                    item.style.display="block";

                }else{

                    item.style.display="none";

                }

            });

        });

    }

    /* =====================================
       Contact Form
    ===================================== */

    const contactForm =
        document.getElementById("contactForm");

    if(contactForm){

        contactForm.addEventListener("submit", function(e){

            e.preventDefault();

            alert("Message sent successfully!");

            contactForm.reset();

        });

    }

    /* =====================================
       Newsletter
    ===================================== */

    const newsletter =
        document.querySelector(".newsletter-form");

    if(newsletter){

        newsletter.addEventListener("submit", function(e){

            e.preventDefault();

            alert("Thank you for subscribing!");

            newsletter.reset();

        });

    }

    /* =====================================
       Active Navigation
    ===================================== */

    const page =
        window.location.pathname.split("/").pop();

    document.querySelectorAll(".sidebar a")
    .forEach(function(link){

        if(link.getAttribute("href") === page){

            link.parentElement.classList.add("active");

        }

    });

});
