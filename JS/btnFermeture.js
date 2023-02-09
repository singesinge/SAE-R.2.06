function fermer(id) {
    var popup = document.getElementById(id);
    popup.classList.remove('ouvert')
    popup.classList.toggle('fermer')
}