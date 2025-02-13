// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Heart animation
    const heart = document.querySelector('.heart');
    heart.addEventListener('click', () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });

    // Kiss game
    let score = 0;
    const gameArea = document.getElementById('gameArea');
    const scoreDisplay = document.getElementById('score');

    function createKiss() {
        const kiss = document.createElement('div');
        kiss.innerHTML = '💋';
        kiss.style.position = 'absolute';
        kiss.style.left = Math.random() * 90 + '%';
        kiss.style.top = Math.random() * 90 + '%';
        kiss.style.fontSize = '30px';
        kiss.style.cursor = 'pointer';
        
        kiss.addEventListener('click', () => {
            score++;
            scoreDisplay.textContent = score;
            kiss.remove();
            if(score % 10 === 0) {
                confetti();
            }
        });

        gameArea.appendChild(kiss);
    }

    setInterval(createKiss, 1500);

    // Secret message
    const messages = [
        "Can't awit to kiss you fr!",
        "Your lips my lips, Apocalypes 💋",
        "I cherish every moment with you",
        "You make my heart skip a beat ❤️",
        "I love you more than words can say",
        "I love you from the day we met",
        "You're my 11:11 wish ",
        "Still cannot belive you're mine",
        "The girl with the perfect eyes",
        "And voice as sweet her wine",
        "I'm yours, will you be mine",
    ];

    const revealBtn = document.getElementById('revealBtn');
    const hiddenMessage = document.getElementById('hiddenMessage');

    revealBtn.addEventListener('click', () => {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        hiddenMessage.textContent = randomMessage;
        hiddenMessage.style.display = 'block';
        hiddenMessage.classList.add('fade-in');
    });
});