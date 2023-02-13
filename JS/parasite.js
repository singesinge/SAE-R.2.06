let lmessage = [
    "Bouffe ton pere !",
    "ça se voit que tu as 2 de QI",
    "Je te hais !",
    "On a ton adresse",
    "Le monde n'a plus besoin de toi",
    "T'es aigris comme Laly"
]

function createMessage(){
    var div = document.createElement("div");
    var p = document.createElement("p")
    div.appendChild(p)
    p.innerHTML = lmessage[Math.floor(Math.random() * lmessage.length)]
    div.onclick = div.remove
    div.classList.add("spam-pop-up")
    div.style.zIndex = 2;
    div.style.top = Math.floor(Math.random() * 40) + 5 + "%";
    div.style.left = Math.floor(Math.random() * 65) + 5 + "%";
    document.getElementById("ecran").appendChild(div);
}

setInterval(createMessage, 30000)


