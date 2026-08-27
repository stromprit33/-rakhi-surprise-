const openBtn = document.getElementById("openBtn"), 
      welcome = document.getElementById("welcome"), 
      main = document.getElementById("main"), 
      typed = document.getElementById("typed"),
      bgMusic = document.getElementById("bgMusic");

const message = `Rishton ki bheed mein,
behen ka rishta sabse khaas hota hai. ❤️
Rakhi sirf ek dhaaga nahi,
ek lifetime connection hai. 🎀
Happy Raksha Bandhan! ❤️`;

openBtn.onclick = () => {
    if (bgMusic) {
        bgMusic.play().catch(error => console.log("Audio play failed:", error));
    }
    welcome.style.display = "none";
    main.classList.remove("hidden");
    typeText();
};

function typeText() {
    let i = 0;
    typed.textContent = "";
    const t = setInterval(() => {
        typed.textContent += message[i++];
        if (i >= message.length) clearInterval(t);
    }, 35);
}

const slide = document.getElementById("slide"), 
      dots = document.getElementById("dots");
let index = 1;

for (let i = 1; i <= 6; i++) {
    const d = document.createElement("span");
    d.className = "dot" + (i === 1 ? " active" : "");
    d.onclick = () => show(i);
    dots.appendChild(d);
}

function show(i) {
    index = i;
    // Photo path fixed here
    slide.src = `${i}.jpg`;
    [...dots.children].forEach((d, n) => d.classList.toggle("active", n === i - 1));
}

document.querySelector(".prev").onclick = () => show(index === 1 ? 6 : index - 1);
document.querySelector(".next").onclick = () => show(index === 6 ? 1 : index + 1);

setInterval(() => {
    if (!main.classList.contains("hidden")) show(index === 6 ? 1 : index + 1);
}, 4500);

function petal() {
    const p = document.createElement("span");
    p.className = "petal";
    p.textContent = Math.random() > .5 ? "🌸" : "✨";
    p.style.left = Math.random() * 100 + "vw";
    p.style.fontSize = (10 + Math.random() * 14) + "px";
    p.style.animationDuration = (5 + Math.random() * 5) + "s";
    document.getElementById("petals").appendChild(p);
    setTimeout(() => p.remove(), 11000);
}
setInterval(petal, 500);

