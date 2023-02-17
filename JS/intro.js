var textIntroduction = "Votre ordinateur a été infecté. Le responsable est le hackeur egingIurne ouscr. Pour l'arréter vous devez trouver le mot de passe administrateur de l'ordinateur. Le hackeur est joueur il a donc caché plusieurs indices éparpillés sur l'ordinateur de votre ami. De plus des indices sont disponibles si vous ne vous sentez pas capable d'affronter le pirate. Lorsque le téléchargement de vos données est fini c'est perdu. Vous avez 20 minutes. Bonne chance"
var lettre = 0

intro()

function intro(){

  if(lettre === textIntroduction.length){
    setTimeout(fermeIntro,5000)
    return
  }
  textIntro.innerHTML = textIntro.innerHTML + textIntroduction[lettre++]
  setTimeout(intro,50)
}

function fermeIntro(){
    document.getElementById('ecranIntro').style.display = "none"
    setInterval(createMessage, 30000)
}
