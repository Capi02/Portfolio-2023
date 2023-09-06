
document.addEventListener('DOMContentLoaded', function () {
    initApp();
});

function initApp(){
    spinner();
    typeText();
    scrollNav();
    
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

const enlaces = document.querySelectorAll("a");

for (let i = 0; i < enlaces.length; i++) {
  enlaces[i].addEventListener("click", function() {
    spinner();
  });
}

// Función spinner
function spinner() {
 
}

