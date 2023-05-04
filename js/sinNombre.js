
document.addEventListener('DOMContentLoaded', function () {
    typeText();
    screeSize();
    embla();
});

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


function screeSize() {
    const screenWidth = window.innerWidth; // lee el tamaño de la pantalla
    const desktopIcons = document.querySelector("#desktop_icons")

    console.log(screenWidth);

    if(screenWidth < 600){ // revisa si es menor al tamaño especificado
        desktopIcons.remove(); // lo elimina
    }else{
        return;
    }
}
