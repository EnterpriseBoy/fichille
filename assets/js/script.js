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