let lmessage = [
    "msg"
]

function createMessage(){
    var div = document.createElement("div");
    var p = document.createElement("p")
    div.appendChild(p)
    p.innerHTML = lmessage[Math.floor(Math.random() * lmessage.length)]
    div.onclick = div.remove
    div.classList.add("spam-pop-up")
    div.style.zIndex = 2;hj
    div.style.top = Math.floor(Math.random() * 40) + 5 + "%";
    div.style.left = Math.floor(Math.random() * 65) + 5 + "%";
    document.getElementById("ecran").appendChild(div);
}

setInterval(createMessage, 30000)


