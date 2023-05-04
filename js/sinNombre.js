
document.addEventListener('DOMContentLoaded', function () {
    initApp();
});

function initApp(){
    spinner();
    typeText();
    scrollNav();
    embla();
    
}

function scrollNav(){
    const links = document.querySelectorAll(".navegation a");
    links.forEach( link => {
        link.addEventListener("click",function(e){
            e.preventDefault();
            
            const section = document.querySelector(e.target.attributes.href.value);
            section.scrollIntoView({ behavior: "smooth"});
        })
    })
}

let letter = 0;
const text = "I'm a student halfway to becoming a software engineer, who loves coding.";
function typeText() {

    if (letter < text.length) {
        document.getElementById("demo").innerHTML += text.charAt(letter);
        letter++;
        let speed = 50;
        setTimeout(typeText, speed);
    }
}

function embla() {
    var emblaNode = document.querySelector(".embla");
    var options = {
        loop: true,
        jump: true,
        rootNode: (emblaNode) => emblaNode.parentElement(),
        stopOnMouseEnter: true,
    };

    var plugins = [EmblaCarouselAutoplay()]; // Plugins

    var embla = EmblaCarousel(emblaNode, options, plugins);
}

// Agregar spinner al hacer clic en los enlaces
const enlaces = document.querySelectorAll("a");

for (let i = 0; i < enlaces.length; i++) {
  enlaces[i].addEventListener("click", function() {
    spinner();
  });
}

// Función spinner
function spinner() {
 
}