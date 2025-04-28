const startBtn = document.getElementById('startBtn');
const gameArea = document.getElementById('gameArea');
let score = 0;

startBtn.onclick = function() {
    startBtn.style.display = 'none';
    spawnHeart();
};

function spawnHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.top = Math.random() * 350 + 'px';
    heart.style.left = Math.random() * 550 + 'px';

    heart.onclick = function() {
        heart.remove();
        score++;
        if (score >= 10) {
            gameArea.innerHTML = '<h2>mor feliz aniversario meu amor queria mt ta ai do seu lado hj te abraçar te levar pra jantar passar o dia todo com vcmas msm de longe quero q vc sinta o qnt eu te amo e o qnt vc e especial pra mimespero q goste do sushi q mandei foi so uma forma de mostrar um pouquinho do q sintovc e a melhor parte da minha vida a pessoa q me faz sorrir todo diaespero ta do seu lado em todos os seus aniversarios e em todos os momentos da sua vida te amo mt 🎉❤️</h2>';
        } else {
            spawnHeart();
        }
    };

    gameArea.appendChild(heart);
}
