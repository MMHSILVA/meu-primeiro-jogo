let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = document.getElementById('guessInput').value;
    let feedback = document.getElementById('feedback');
    let attemptsDisplay = document.getElementById('attempts');

    attempts++;

    if (userGuess < randomNumber) {
        feedback.textContent = 'Muito baixo! Tente novamente.';
    } else if (userGuess > randomNumber) {
        feedback.textContent = 'Muito alto! Tente novamente.';
    } else {
        feedback.textContent = `Parabéns! Você adivinhou o número em ${attempts} tentativas.`;
        document.getElementById('guessInput').disabled = true;
    }

    attemptsDisplay.textContent = `Tentativas: ${attempts}`;
}
