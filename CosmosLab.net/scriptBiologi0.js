const questions = [
    { question: "Apa ibukota Indonesia?", answer: "Jakarta" },
    { question: "Berapa hasil dari 2 + 2?", answer: "4" },
    { question: "Apa nama planet ketujuh dari matahari?", answer: "Uranus" }
];

let currentQuestionIndex = 0;

function checkAnswer() {
    const answerInput = document.getElementById('answer');
    const resultDisplay = document.getElementById('result');
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();
    
    if (userAnswer === correctAnswer) {
        resultDisplay.textContent = "Jawaban Benar!";
    } else {
        resultDisplay.textContent = "Jawaban Salah. Coba lagi.";
    }
    
    answerInput.value = '';
    
    // Pindah ke pertanyaan berikutnya atau akhiri permainan
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        document.getElementById('question').textContent = questions[currentQuestionIndex].question;
    } else {
        document.getElementById('question').textContent = "Permainan Selesai. Terima kasih!";
        document.getElementById('answer').style.display = 'none';
        document.querySelector('button').style.display = 'none';
    }
}
