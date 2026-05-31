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

    const match1 =
        document.getElementById("match1").value;

    const match2 =
        document.getElementById("match2").value;

    const match3 =
        document.getElementById("match3").value;

    if (match1 === "front-thigh") {

        matchingScore++;

    }

    if (match2 === "back-thigh") {

        matchingScore++;

    }

    if (match3 === "shoulder") {

        matchingScore++;

    }

    document.getElementById(
        "matching-result"
    ).innerHTML =
        "✅ You matched " +
        matchingScore +
        " out of 3 correctly.";

}

/* ===================================
   FINAL SCORE
=================================== */

function showFinalScore() {

    const totalScore =
        score + matchingScore;

    let rank = "";
    let emoji = "";

    if (totalScore <= 2) {

        rank = "Beginner Athlete";
        emoji = "🏃";

    }

    else if (totalScore <= 4) {

        rank = "School Athlete";
        emoji = "⚽";

    }

    else if (totalScore <= 6) {

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
            <p>Your Score: ${totalScore}/8</p>
        </div>`;

    const certificate =
        document.getElementById(
            "certificate"
        );

    if (totalScore >= 7) {

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
