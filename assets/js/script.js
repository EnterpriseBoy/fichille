let currentPage = "home";
let currentLanguage = "en";

const languageToggle = document.getElementById("languageToggle");

const pages = {
    home: {
        en: "pages/home_eng.html",
        ga: "pages/home_irl.html"
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


// =============================
// Navigation
// =============================

function navigatePage(page) {

    currentPage = page;

    const pageUrl = pages[page][currentLanguage];

    loadPage(pageUrl);
}


// =============================
// Language Switch
// =============================

languageToggle.addEventListener("change", function () {

    if (this.checked) {
        currentLanguage = "ga";
    } else {
        currentLanguage = "en";
    }

    // Reload the current page in the new language
    navigatePage(currentPage);
});


// =============================
// Load Page
// =============================

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


// =============================
// Irish Pronunciation
// =============================

function speakIrish(text) {

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "ga-IE";
    speech.rate = 0.8;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
}


// =============================
// English Pronunciation
// =============================

function speakEnglish(text) {

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-IE";
    speech.rate = 0.8;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
}


// =============================
// Load Home Page
// =============================

document.addEventListener("DOMContentLoaded", function () {

    loadPage(pages.home.en);

});