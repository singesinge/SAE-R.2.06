let ouverture = document.querySelector('.Bouverture')
let Popup = document.querySelector('.popup')
ouverture.onclick = function(){
    Popup.classList.toggle('ouvert')
    Popup.classList.remove('fermer')
}

