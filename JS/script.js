totaltime = 2
timeleft = totaltime

function updateTime() {
    const ecranlose = document.getElementById('ecranDefaite')
    const timeDisplay = document.querySelector('#time');
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    timeleft--
    if (timeleft===0){
      ecranlose.style.display = 'block'
    }
    var textTelechargement = document.getElementById('DownloadText');
    textTelechargement.innerHTML = "Téléchargement : " + (100-timeleft*100/totaltime).toFixed(2) + "%"
    var barreTelechargement = document.getElementById('barreTelechargement');
    barreTelechargement.style.width = (0.75*(100-timeleft*100/totaltime).toFixed(2))+"%"

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
}

function verifMdpTwitter(){
  var username = document.getElementById('usernameTwitter');
  var password = document.getElementById('passwordTwitter');

  if(username.value === "test" && password.value === "test"){
    var connectionWindow = document.getElementById('motDePasseTwitter');
    var pageTwitter = document.getElementById('appTwitter');
    connectionWindow.style.display = "none"
    pageTwitter.style.display = "block"
  }else{
    alert("pas reussit")
    password.value = ""
  }
}



setInterval(updateTime, 1000);


function verifMdp(){
  var mdpGuess = document.getElementById('password');
  if(mdpGuess.value === "test"){
    alert("bon");
  }else{
    alert("mauvais");
    mdpGuess.value = ""
  }
}


const position = { x: 0, y: 0 }

interact('.draggable').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy
      event.target.style.transform = `translate(${position.x}px, ${position.y}px)`
    },
  }
})

