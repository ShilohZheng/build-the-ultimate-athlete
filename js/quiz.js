/* ===================================
   BUILD THE ULTIMATE ATHLETE
   QUIZ SCRIPT
=================================== */

let score = 0;
let matchingScore = 0;

/* ===================================
   WAIT FOR PAGE TO LOAD
=================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Quiz Loaded");

    /* ===================================
       FLASHCARDS
    =================================== */

    const flashcards =
        document.querySelectorAll(".flashcard");

    flashcards.forEach(function(card) {

        card.addEventListener("click", function() {

            card.classList.toggle("flipped");

        });

    });

});

/* ===================================
   MULTIPLE CHOICE QUESTIONS
=================================== */

function checkAnswer(button, isCorrect, explanation) {

    const question =
        button.closest(".question");

    const feedback =
        question.querySelector(".feedback");

    if (question.dataset.answered === "true") {

        return;

    }

    question.dataset.answered = "true";

    const buttons =
        question.querySelectorAll("button");

    buttons.forEach(function(btn) {

        btn.disabled = true;

    });

    if (isCorrect) {

        score++;

        feedback.className =
            "feedback correct";

        feedback.innerHTML =
            "✅ Correct!<br><br>" +
            explanation;

    }

    else {

        feedback.className =
            "feedback incorrect";

        feedback.innerHTML =
            "❌ Incorrect<br><br>" +
            explanation;

    }

}

/* ===================================
   MATCHING CHALLENGE
=================================== */

function checkMatching() {

    matchingScore = 0;

    if (
        document.getElementById("match1").value
        === "front-thigh"
    ) {
        matchingScore++;
    }

    if (
        document.getElementById("match2").value
        === "back-thigh"
    ) {
        matchingScore++;
    }

    if (
        document.getElementById("match3").value
        === "shoulder"
    ) {
        matchingScore++;
    }

    if (
        document.getElementById("match4").value
        === "chest"
    ) {
        matchingScore++;
    }

    if (
        document.getElementById("match5").value
        === "upper-back"
    ) {
        matchingScore++;
    }

    if (
        document.getElementById("match6").value
        === "calf"
    ) {
        matchingScore++;
    }

    if (
        document.getElementById("match7").value
        === "upper-arm"
    ) {
        matchingScore++;
    }

    if (
        document.getElementById("match8").value
        === "abdomen"
    ) {
        matchingScore++;
    }

    document.getElementById(
        "matching-result"
    ).innerHTML =
        "✅ You matched " +
        matchingScore +
        " out of 8 correctly.";

}

/* ===================================
   FINAL SCORE
=================================== */

function showFinalScore() {

    const totalScore =
        score + matchingScore;

    let rank = "";
    let emoji = "";

    if (totalScore <= 4) {

        rank = "Beginner Athlete";
        emoji = "🏃";

    }

    else if (totalScore <= 8) {

        rank = "School Athlete";
        emoji = "⚽";

    }

    else if (totalScore <= 12) {

        rank = "Elite Athlete";
        emoji = "🏅";

    }

    else {

        rank = "Ultimate Athlete";
        emoji = "🏆";

    }

    document.getElementById(
        "final-score"
    ).innerHTML =

        `<div class="rank">
            <h3>${emoji} ${rank}</h3>
            <p>Your Score: ${totalScore}/16</p>
        </div>`;

    const certificate =
        document.getElementById(
            "certificate"
        );

    if (totalScore >= 14) {

        certificate.innerHTML =

        `<div class="certificate">

            <h2>
                🏆 Ultimate Athlete Certificate
            </h2>

            <p>
                Congratulations!
            </p>

            <p>
                You demonstrated an excellent
                understanding of the muscular system.
            </p>

            <h3>
                Build the Ultimate Athlete
            </h3>

            <p>
                Awarded for outstanding anatomy knowledge.
            </p>

        </div>`;

    }

    else {

        certificate.innerHTML = "";

    }

}
