function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
}

function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const menuIcon = document.querySelector('.menu-icon');

    const isSidebarVisible = sidebar.classList.contains('show-sidebar');

   
    sidebar.classList.toggle('show-sidebar', !isSidebarVisible);

    
    if (!isSidebarVisible) {
        menuIcon.style.transform = 'translateX(250px)';
    } else {
        menuIcon.style.transform = 'translateX(0)';
    }
}
