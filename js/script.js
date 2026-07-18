/* ==========================================================
   Academic Portfolio
   script.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Dark / Light Mode
    ========================================== */

    const themeToggle = document.getElementById("themeToggle");

    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark-mode");
        if(themeToggle){
            themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    }

    if(themeToggle){

        themeToggle.addEventListener("click",()=>{

            document.body.classList.toggle("dark-mode");

            if(document.body.classList.contains("dark-mode")){

                localStorage.setItem("theme","dark");

                themeToggle.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

            }else{

                localStorage.setItem("theme","light");

                themeToggle.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

            }

        });

    }
    
    /* ==========================================
       Mobile Sidebar
    ========================================== */
   const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {

    sidebar.classList.toggle("open");

});
 /*
    const sidebar=document.querySelector(".sidebar");

    const menu=document.createElement("button");

    menu.className="menu-toggle";

    menu.innerHTML='<i class="fa-solid fa-bars"></i>';

    document.body.appendChild(menu);

    menu.addEventListener("click",()=>{

        sidebar.classList.toggle("active");

    });*/

    /* ==========================================
       Close Sidebar on Link Click (Mobile)
    ========================================== */

    document.querySelectorAll(".sidebar a").forEach(link=>{

        link.addEventListener("click",()=>{

            sidebar.classList.remove("active");

        });

    });

    /* ==========================================
       Scroll Animation
    ========================================== */

    const sections=document.querySelectorAll(".section");

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.15

    });

    sections.forEach(section=>{

        section.classList.add("fade-in");

        observer.observe(section);

    });

    /* ==========================================
       Back To Top Button
    ========================================== */

    const topButton=document.createElement("button");

    topButton.id="backToTop";

    topButton.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

    document.body.appendChild(topButton);

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            topButton.style.display="block";

        }else{

            topButton.style.display="none";

        }

    });

    topButton.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /* ==========================================
       Publication Search
    ========================================== */

    const search=document.getElementById("publicationSearch");

    if(search){

        search.addEventListener("keyup",()=>{

            const value=search.value.toLowerCase();

            document.querySelectorAll(".publication-item")
            .forEach(item=>{

                item.style.display=
                item.innerText.toLowerCase().includes(value)
                ? "block"
                : "none";

            });

        });

    }

    /* ==========================================
       Contact Form
    ========================================== */

    const form=document.getElementById("contactForm");

    if(form){

        form.addEventListener("submit",(e)=>{

            e.preventDefault();

            alert("Thank you! Your message has been sent.");

            form.reset();

        });

    }

    /* ==========================================
       Newsletter
    ========================================== */

    const newsletter=document.querySelector(".newsletter-form");

    if(newsletter){

        newsletter.addEventListener("submit",(e)=>{

            e.preventDefault();

            const email=newsletter.querySelector("input");

            if(email.value.trim()===""){

                alert("Please enter your email.");

                return;

            }

            alert("Subscribed Successfully!");

            newsletter.reset();

        });

    }

    /* ==========================================
       Active Navigation
    ========================================== */

    const currentPage=
    window.location.pathname.split("/").pop();

    document.querySelectorAll(".sidebar nav a")
    .forEach(link=>{

        const href=link.getAttribute("href");

        if(href===currentPage){

            link.parentElement.classList.add("active");

        }

    });

    /* ==========================================
       Image Hover Animation
    ========================================== */

    document.querySelectorAll("img").forEach(img=>{

        img.addEventListener("mouseenter",()=>{

            img.style.transform="scale(1.03)";

        });

        img.addEventListener("mouseleave",()=>{

            img.style.transform="scale(1)";

        });

    });

    /* ==========================================
       Card Hover Shadow
    ========================================== */

    document.querySelectorAll(".card").forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.boxShadow=
            "0 18px 35px rgba(0,0,0,.15)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.boxShadow="";

        });

    });

    /* ==========================================
       Footer Year
    ========================================== */

    document.querySelectorAll("footer p").forEach(p=>{

        if(p.innerText.includes("©")){

            p.innerText=
            "© "+new Date().getFullYear()+
            " Academic Portfolio";

        }

    });

});
