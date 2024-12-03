document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('slide-menu');
    menu.classList.toggle('open');
});

document.addEventListener('click', function(event) {
    var menu = document.getElementById('slide-menu');
    var menuToggle = document.getElementById('menu-toggle');

    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('open');
    }
});
