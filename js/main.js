const cyberColors = [
    "#00f5ff", // cyan
    "#00bfff", // blue
    "#8a2be2", // purple
    "#ff00ff"  // pink
];

let colorIndex = 0;

document.addEventListener("mousemove", (e) => {

    const trail = document.createElement("div");

    trail.classList.add("trail");

    trail.style.left = e.clientX + "px";
    trail.style.top = e.clientY + "px";

    const color = cyberColors[colorIndex];

    trail.style.background = color;

    trail.style.boxShadow = `
        0 0 10px ${color},
        0 0 20px ${color},
        0 0 40px ${color}
    `;

    document.body.appendChild(trail);

    colorIndex =
        (colorIndex + 1) % cyberColors.length;

    setTimeout(() => {
        trail.remove();
    }, 800);

});