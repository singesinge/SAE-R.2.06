let lmessage = [
    "Je ne veux plus te voir",
    "Disparait !",
    "Tu fais pitié !",
    "T'es moche !",
    "Comment c'est possible d'etre comme toi ?",
    "Tu devrais songer à changer d'identité !",
    "Personne veut de toi !",
    "Très claqué !",
    "Laly parait plus heureuse que toi !",
    "On va capturer ton chat !",
    "R - 95",
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



