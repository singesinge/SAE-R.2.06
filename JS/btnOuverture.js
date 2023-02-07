function ouvre(id) {
    var popup = document.getElementById(id);
    popup.style.transform = 'translate(0px,0px)'
    position.x = 0
    position.y = 0
    popup.classList.remove('fermer');
    popup.classList.toggle('ouvert');
}

