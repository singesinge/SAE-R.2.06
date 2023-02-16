  /*==Pour animerle texte de la premiere page==*/
const txtAnim = document.querySelector('h1');
new Typewriter(txtAnim, {
	loop: false,
	deleteSpeed: 100
})
.changeDelay(100)
.typeString('<em class="blanc2">ESCAPE THE HACK</em>')
.pauseFor(200)
.typeString('<em class="blanc3"><br>by:<br>Mathias BAMAS<br>Alexandre BERGERON<br>Ayoub BIHI<br>Thomas BOUT<br>Léo GINER <br></em>')
.pauseFor(7000)
.start()

/*==boutton et menu apparition==*/
const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")
hamburgerButton.addEventListener("click", toggleNav)
function toggleNav(){
	hamburgerButton.classList.toggle("active")
	navigation.classList.toggle("active")
  }
  

  /*==Pour l'apparition de la classe reveal lors du scroll de la page==*/
const ratio = .1
const options = {
	root: null,
	rootMargin: '0px',
	threshold: ratio
}
const handleIntersect = function (entries,observer){
	entries.forEach(function (entry){
		if (entry.intersectionRatio > ratio) {
			entry.target.classList.add("reveal-visible")
			observer.unobserve(entry.target)	
		}
	})
}
const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll("[class*='reveal-']").forEach(function(r){
	observer.observe(r)
})