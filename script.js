function openLetter() {

    const opening = document.querySelector(".opening");
    const birthday = document.querySelector(".birthday");
    const music = document.querySelector(".music");
    const note = document.querySelector(".note");

    opening.style.display = "none";

    birthday.style.display = "flex";
    music.style.display = "flex";
    note.style.display = "flex";

    birthday.classList.add("fade-in");
    music.classList.add("fade-in");
    note.classList.add("fade-in");

}

function toggleMusic() {
    const button = document.querySelector(".play-button");
    const icon = document.querySelector(".music-icon");
    const music = document.querySelector("#birthdayMusic");

    if (music.paused) {
        music.play();
        button.textContent = "Ⅱ";
        icon.classList.add("playing");
    } else {
        music.pause();
        button.textContent = "▶";
        icon.classList.remove("playing");
    }
}

const birthdayMusic = document.querySelector("#birthdayMusic");
const playButton = document.querySelector(".play-button");
const musicIcon = document.querySelector(".music-icon");

birthdayMusic.addEventListener("ended", function() {
    playButton.textContent = "▶";
    musicIcon.classList.remove("playing");
});


function openNote() {
    const card = document.querySelector(".letter-card");
    const letter = document.querySelector("#letterContent");

    card.style.opacity = "0";
    card.style.transform = "translateY(-10px)";

    setTimeout(function() {
        card.style.display = "none";
        letter.classList.add("open");
    }, 500);
}

function closeNote() {
    const card = document.querySelector(".letter-card");
    const letter = document.querySelector("#letterContent");

    letter.classList.remove("open");

    setTimeout(function() {
        card.style.display = "block";

        setTimeout(function() {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 50);
    }, 800);
}

function openMusic() {
    window.open(
        "https://open.spotify.com/search/The%20Most%20Beautiful%20Thing%20Bruno%20Major",
        "_blank"
    );
}