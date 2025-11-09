const levelElement = document.querySelector('.level + p');
const healthElement = document.querySelector('.health + p');

const attackButton = document.querySelector('.attacked');
const levelUpButton = document.querySelector('.levelUp');

let level = 5;
let health = 100;

levelElement.textContent = level;
healthElement.textContent = health;

attackButton.addEventListener('click', () => {
    health -= 20;
    if (health < 0) health = 0;
    healthElement.textContent = health;
    
    if (health === 0) {
        alert("You are dead!");
    }
});

levelUpButton.addEventListener('click', () => {
    health += 10;
    level++;
    healthElement.textContent = health;
    levelElement.textContent = level;
});
