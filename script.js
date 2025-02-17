const container = document.querySelector(".container");
const card = document.querySelector("#card");

let startX = 0;
let startY = 0;

function handleMouseMove(e) {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 40; // Aumenta la velocidad de movimiento
    const rotateY = ((x / rect.width) - 0.5) * -40; // Aumenta la velocidad de movimiento

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function handleTouchMove(e) {
    const touch = e.touches[0]; // Captura el primer dedo en la pantalla
    const rect = container.getBoundingClientRect();

    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 40; // Aumenta la velocidad de movimiento
    const rotateY = ((x / rect.width) - 0.5) * -40; // Aumenta la velocidad de movimiento

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

// Agrega el evento para el mouse
container.addEventListener("mousemove", handleMouseMove);

// Agrega el evento para el toque en pantalla táctil
container.addEventListener("touchmove", handleTouchMove);

// Restablece la rotación cuando el mouse se mueve fuera o el toque se acaba
container.addEventListener("mouseleave", () => {
    card.style.transition = "transform 0.3s ease";
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
});

container.addEventListener("touchend", () => {
    card.style.transition = "transform 0.3s ease";
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
});
