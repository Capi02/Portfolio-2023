
document.addEventListener('DOMContentLoaded', function () {

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

    typeText();

});

