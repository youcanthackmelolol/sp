document.addEventListener('DOMContentLoaded', function () {
    // Typewriter effect
    var app = document.getElementById('typing');
    var typingText = app.dataset.typingText || 'Default typing text'; // Use the data attribute or provide a default text
    var typewriter = new Typewriter(app, {
        loop: true
    });

    typewriter
        .typeString(typingText)
        .pauseFor(2500)
        .deleteAll()
        .typeString('discord.gg/eye')
        .pauseFor(2500)
        .start();
});