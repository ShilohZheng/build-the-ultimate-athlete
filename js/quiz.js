/* ===================================
   GLOBAL SCORE
=================================== */

let score = 0;
let answeredQuestions = 0;

/* ===================================
   FLASHCARDS
=================================== */

const flashcards = document.querySelectorAll(".flashcard");

flashcards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("flipped");

    });

});

/* ===================================
   MULTIPLE CHOICE
=================================== */

function checkAnswer(button, isCorrect, explanation) {

    const question =
        button.parentElement;

    const feedback =
        question.querySelector(".feedback");

    if (question.dataset.answered === "true") {

        return;

    }

    question.dataset.answered = "true";

    answeredQuestions++;

    if (isCorrect) {

        score++;

        feedback.classList.remove("incorrect");
        feedback.classList.add("correct");

        feedback.innerHTML =
            "✅ Correct!<br><br>" +
            explanation;

    }

    else {

        feedback.classList.remove("correct");
        feedback.classList.add("incorrect");

        feedback.innerHTML =
            "❌ Incorrect<br><br>" +
            explanation;

    }

    const buttons =
        question.querySelectorAll("button");

    buttons.forEach(btn => {

        btn.disabled = true;

    });

}

/* ===================================
   MATCHING CHALLENGE
=================================== */

let matchingScore = 0;

function checkMatching() {

    matchingScore = 0;

    const answer1 =
        document.getElementById("match1").value;

    const answer2 =
        document.getElementById("match2").value;

    const answer3 =
        document.getElementById("match3").value;

    if (answer1 === "front-thigh") {

        matchingScore++;

    }

    if (answer2 === "back-thigh") {

        matchingScore++;

    }

    if (answer3 === "shoulder") {

        matchingScore++;

    }

    const result =
        document.getElementById("matching-result");

    result.innerHTML =
        "You matched " +
        matchingScore +
        " / 3 correctly.";

}

/* ===================================
   FINAL SCORE
=================================== */

function showFinalScore() {

    let totalScore =
        score + matchingScore;

    let finalMessage = "";

    if (totalScore <= 2) {

        finalMessage =
            `
            <div class="rank beginner">
                🏃 Beginner Athlete<br><br>
                Score: ${totalScore}/8
            </div>
            `;

    }

    else if (totalScore <= 4) {

        finalMessage =
            `
            <div class="rank school">
                ⚽ School Athlete<br><br>
                Score: ${totalScore}/8
            </div>
            `;

    }

    else if (totalScore <= 6) {

        finalMessage =
            `
            <div class="rank elite">
                🏅 Elite Athlete<br><br>
                Score: ${totalScore}/8
            </div>
            `;

    }

    else {

        finalMessage =
            `
            <div class="rank ultimate">
                🏆 Ultimate Athlete!<br><br>
                Score: ${totalScore}/8
            </div>
            `;

    }

    document.getElementById("final-score")
    .innerHTML = finalMessage;

   const certificate =
       document.getElementById("certificate");
   
   if (totalScore >= 7) {
   
       certificate.innerHTML = `
           <div class="certificate">
               <h2>🏆 Ultimate Athlete Certificate</h2>
   
               <p>
                   Congratulations! You have demonstrated
                   an excellent understanding of the muscular system.
               </p>
   
               <h3>Build the Ultimate Athlete</h3>
   
               <p>
                   Awarded to a future champion of anatomy and physiology.
               </p>
           </div>
       `;
   
   }
   
   else {
   
       certificate.innerHTML = "";
   
   }

   }
