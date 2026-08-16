function handleNavClick(section) {
    // Update active link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`a[href="#${section}"]`).classList.add('active');

    // Hide all sections
    document.querySelectorAll('section').forEach(sec => {
        sec.style.display = 'none';
    });

    // Show the selected section
    const target = document.getElementById(section);
    if (target) {
        target.style.display = 'flex';
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

function speakIrish(text) {
    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "ga-IE";
    speech.rate = 0.8;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
}

async function loadPage(page) {
    try {

        const response = await fetch(page);

        if (!response.ok) {
            throw new Error("Page could not be loaded.");
        }

        const html = await response.text();

        document.getElementById("content").innerHTML = html;

    } catch (error) {

        console.error(error);

        document.getElementById("content").innerHTML =
            "<p>Sorry, the page could not be loaded.</p>";
    }
}

const toggle = document.getElementById("languageToggle");

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        console.log("Irish selected");
    } else {
        console.log("English selected");
    }
});

let currentLanguage = "en";

const pages = {
    home: {
        en: "home.html",
        ga: "home_irl.html"
    },
    about: {
        en: "pages/about_eng.html",
        ga: "pages/about_irl.html"
    },
    resources: {
        en: "pages/resources_eng.html",
        ga: "pages/resources_irl.html"
    },
    timetable: {
        en: "pages/timetable_eng.html",
        ga: "pages/timetable_irl.html"
    }
};

function navigatePage(page) {
    const pageUrl = pages[page][currentLanguage];

    loadPage(pageUrl);
}