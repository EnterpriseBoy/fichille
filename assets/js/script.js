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
    if ("speechSynthesis" in window) {

        window.speechSynthesis.cancel();

        const speech = new SpeechSynthesisUtterance(text);

        speech.lang = "ga-IE";
        speech.rate = 0.8;
        speech.pitch = 1;

        window.speechSynthesis.speak(speech);

    } else {
        alert("Níl fuaimniú ar fáil sa bhrabhsálaí seo.");
    }
}