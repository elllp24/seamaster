/* =========================================================
   SEAMASTER MARINE SERVICES
   Django-compatible frontend JavaScript
========================================================= */


/* =========================================================
   HEADER
========================================================= */

const header = `
<div class="topbar">

    <div>
        ABU DHABI • UAE • GLOBAL MARITIME SUPPORT
    </div>

    <div>
        <a href="mailto:info@seamastermarine.net">
            info@seamastermarine.net
        </a>

        &nbsp;

        <a href="tel:+971503579482">
            +971 50 357 9482
        </a>
    </div>

</div>


<header class="nav">

    <a class="brand" href="/">
        <span class="brandmark">SM</span>

        <span>
            SEAMASTER
            <small>MARINE SERVICES LLC</small>
        </span>
    </a>


    <button
        class="menu"
        aria-label="Open menu"
        type="button"
    >
        ☰
    </button>


    <nav>

        <a href="/">
            Home
        </a>

        <a href="/about/">
            About
        </a>

        <a href="/services/">
            Services
        </a>

        <a href="/#sectors">
            Sectors
        </a>

        <a href="/contact/">
            Contact
        </a>

    </nav>


    <a
        class="navcta"
        href="/contact/"
    >
        Request a Service →
    </a>

</header>
`;


/* =========================================================
   FOOTER
========================================================= */

const footer = `
<footer>

    <div class="brand footerbrand">

        <span class="brandmark">
            SM
        </span>

        <span>
            SEAMASTER
            <small>MARINE SERVICES LLC</small>
        </span>

    </div>


    <p>
        Marine expertise. Operational confidence.
    </p>


    <div>

        <a href="mailto:info@seamastermarine.net">
            info@seamastermarine.net
        </a>

        •

        <a href="tel:+971503579482">
            +971 50 357 9482
        </a>

    </div>


    <div class="copy">
        © ${new Date().getFullYear()}
        Seamaster Marine Services LLC.
        All rights reserved.
    </div>

</footer>
`;


/* =========================================================
   INSERT HEADER & FOOTER
========================================================= */

const sh = document.getElementById("site-header");
const sf = document.getElementById("site-footer");

if (sh) {
    sh.innerHTML = header;
}

if (sf) {
    sf.innerHTML = footer;
}


/* =========================================================
   MOBILE MENU
========================================================= */

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

if (menu && nav) {

    menu.addEventListener("click", () => {

        nav.classList.toggle("open");

    });

}


/* =========================================================
   SERVICE PRE-SELECTION
   Example:
   /contact/?service=Marine%20Surveys
========================================================= */

const params = new URLSearchParams(
    window.location.search
);

const service = params.get("service");

const select = document.getElementById(
    "serviceSelect"
);

if (service && select) {

    [...select.options].forEach(option => {

        if (option.text === service) {
            option.selected = true;
        }

    });

}


/* =========================================================
   CONTACT / ENQUIRY FORM
========================================================= */

const form = document.getElementById(
    "enquiryForm"
);

if (form) {

    form.addEventListener("submit", event => {

        event.preventDefault();


        const data = new FormData(form);


        const subject = encodeURIComponent(
            `Website Enquiry — ${data.get("service") || ""}`
        );


        const body = encodeURIComponent(

`Name: ${data.get("name") || ""}

Company: ${data.get("company") || ""}

Email: ${data.get("email") || ""}

Phone: ${data.get("phone") || ""}

Vessel/Project: ${data.get("vessel") || ""}

Location: ${data.get("location") || ""}

Service: ${data.get("service") || ""}


Requirement:

${data.get("message") || ""}`

        );


        window.location.href =
            `mailto:info@seamastermarine.net?subject=${subject}&body=${body}`;


        const status =
            document.getElementById("formStatus");


        if (status) {

            status.textContent =
                "Preparing your email enquiry…";

        }

    });

}


/* =========================================================
   SCROLL ANIMATION
========================================================= */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "visible"
                );

            }

        });

    },

    {
        threshold: 0.08
    }

);


document
    .querySelectorAll(
        ".service-detail-grid article," +
        ".value-grid > div," +
        ".process-grid > div," +
        ".sector"
    )
    .forEach(element => {

        observer.observe(element);

    });