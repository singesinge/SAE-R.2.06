totaltime = 1200
timeleft = totaltime

function updateTime() {
    const timeDisplay = document.querySelector('#time');
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    timeleft--
    var textTelechargement = document.getElementById('DownloadText');
    textTelechargement.innerHTML = "Téléchargement : " + (100-timeleft*100/totaltime).toFixed(2) + "%"
    var barreTelechargement = document.getElementById('barreTelechargement');
    barreTelechargement.style.width = (0.75*(100-timeleft*100/totaltime).toFixed(2))+"%"
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

