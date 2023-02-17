totaltime = 1200
timeleft = totaltime

indice = ["Tu devrais cherché si quelque chose n'est pas caché sur le bureau",
          "Tien il y a un fichier word ?",
          "Le dossier document a l'air protéger par une date de naissance",
          "A = 1 B = 2 E = 5 ?"]
gameState = 0

function showIndice(){
  alert(indice[gameState])
}
function updateTime() {
    const ecranlose = document.getElementById('ecranDefaite')
    const timeDisplay = document.querySelector('#time');
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    timeleft--
    if (timeleft===0){
      ecranlose.style.display = 'flex'
    }
    if(timeleft === 800 || timeleft === 600 || timeleft === 400 || timeleft === 200 || timeleft === 150 || timeleft === 100 || timeleft === 50){
      setInterval(createMessage, 50000)
    }
    var textTelechargement = document.getElementById('DownloadText');
    textTelechargement.innerHTML = "Téléchargement : " + (100-timeleft*100/totaltime).toFixed(2) + "%"
    var barreTelechargement = document.getElementById('barreTelechargement');
    barreTelechargement.style.width = (0.75*(100-timeleft*100/totaltime).toFixed(2))+"%"

  }

function verifMdpDocument(){
  const date = document.getElementById("dateDocPass")
  if(date.value === "2007-03-25"){
    ouvre('folderDocument')
    fermer('passwordDocument')
    if(gameState < 3) gameState = 3
  }
}

function changePostIt(){
  var postIt1 = document.getElementById('recto');
  var postIt2 = document.getElementById('verso');
  if(postIt1.style.display != 'none'){
    postIt1.style.display = 'none'
    postIt2.style.display = 'block'
  }
  else{
    postIt2.style.display = 'none'
    postIt1.style.display = 'block'
  }

  if(gameState < 1) gameState = 1
}

function verifMdpTwitter(){
  var username = document.getElementById('usernameTwitter');
  var password = document.getElementById('passwordTwitter');

  if(username.value === "Doumbaaa" && password.value === "croustibat30"){
    var connectionWindow = document.getElementById('motDePasseTwitter');
    var pageTwitter = document.getElementById('appTwitter');
    connectionWindow.style.display = "none"
    pageTwitter.style.display = "block"
    gameState = 2
  }else{
    username.value = "Doumbaaa"
    password.value = ""
  }
}



setInterval(updateTime, 1000);


function verifMdp(){
  var mdpGuess = document.getElementById('password');
  const ecranvictoire = document.getElementById('ecranVictoire')
  const body = document.getElementsByTagName('body')[0];
  const score = document.getElementById('score');

  if(mdpGuess.value === "955825"){
    ecranvictoire.style.display = "flex"
    body.style.overflow = "hidden"
    score.innerHTML = "Reussit en " + (Math.floor(timeleft/60)) + " minutes " + timeleft%60 + " secondes"
  }else{
    alert("Mauvais mot de passe");
    mdpGuess.value = ""
  }
}


const position = { x: 0, y: 0 }

interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,

      // call this function on every dragend event
      end (event) {
        var textEl = event.target.querySelector('p')

      
      }
    }
  })

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener

