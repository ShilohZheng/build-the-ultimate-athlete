/* ===================================
   MUSCLE MAP
================================== */

function showMuscle(muscle) {

    const info = document.getElementById("muscle-info");

    switch (muscle) {

        case "chest":
            info.innerHTML = `
                <div class="info-text-side">
                    <h3>Chest (Pectoralis Major)</h3>
                    <p>Responsible for pushing movements and bringing the arms toward the body.</p>
                    <p><strong>Common Exercises:</strong> Bench Press, Push-Up</p>
                </div>
                <div class="info-image-side">
                    <img src="../images/chest.jpg" alt="Chest">
                </div>
            `;
            break;

        case "shoulders":
            info.innerHTML = `
                <div class="info-text-side">
                    <h3>Shoulders (Deltoids)</h3>
                    <p>Lift, rotate, and stabilize the arms.</p>
                    <p><strong>Common Exercises:</strong> Shoulder Press, Lateral Raise</p>
                </div>
                <div class="info-image-side">
                    <img src="../images/shoulders.jpg" alt="Shoulders">
                </div>
            `;
            break;

        case "arms":
            info.innerHTML = `
                <div class="info-text-side">
                    <h3>Arms</h3>
                    <p>Biceps flex the elbow while triceps extend it.</p>
                    <p><strong>Common Exercises:</strong> Curls, Dips</p>
                </div>
                <div class="info-image-side">
                    <img src="../images/arms.jpg" alt="Arms">
                </div>
            `;
            break;

        case "core":
            info.innerHTML = `
                <div class="info-text-side">
                    <h3>Core</h3>
                    <p>Stabilizes the torso and transfers force between the upper and lower body.</p>
                    <p><strong>Common Exercises:</strong> Plank, Crunches</p>
                </div>
                <div class="info-image-side">
                    <img src="../images/core.jpg" alt="Core">
                </div>
            `;
            break;

        case "back":
            info.innerHTML = `
                <div class="info-text-side">
                    <h3>Back</h3>
                    <p>Supports posture and controls pulling motions.</p>
                    <p><strong>Common Exercises:</strong> Pull-Ups, Rows</p>
                </div>
                <div class="info-image-side">
                    <img src="../images/back.jpg" alt="Back">
                </div>
            `;
            break;

        case "legs":
            info.innerHTML = `
                <div class="info-text-side">
                    <h3>Legs</h3>
                    <p>Generate power for running, jumping, and athletic performance.</p>
                    <p><strong>Common Exercises:</strong> Squats, Lunges</p>
                </div>
                <div class="info-image-side">
                    <img src="../images/legs.jpg" alt="Legs">
                </div>
            `;
            break;

    }

}

/* ===================================
   EXERCISE ANALYZER
=================================== */

function showExercise(exercise) {

    const info = document.getElementById("exercise-info");

    switch (exercise) {

        case "bench":
            info.innerHTML = `
                <div class="info-text-side">
                    <h3>Bench Press</h3>
                    <p><strong>Primary Muscles Involved:</strong></p>
                    <p>Chest (Pectoralis Major), Triceps, Front Deltoids (Shoulders)</p>
                </div>
                <div class="info-image-side">
                    <img src="../images/bench-press.jpg" alt="Bench Press">
                </div>
            `;
            break;

        case "squat":
            info.innerHTML = `
                <div class="info-text-side">
                    <h3>Squat</h3>
                    <p><strong>Primary Muscles Involved:</strong></p>
                    <p>Quadriceps, Glutes (Buttocks), Hamstrings, and Core</p>
                </div>
                <div class="info-image-side">
                    <img src="../images/squat.jpg" alt="Squat">
                </div>
            `;
            break;

        case "deadlift":
            info.innerHTML = `
                <div class="info-text-side">
                    <h3>Deadlift</h3>
                    <p><strong>Primary Muscles Involved:</strong></p>
                    <p>Hamstrings, Glutes, Lower Back, Erector Spinae, and Trapezius</p>
                </div>
                <div class="info-image-side">
                    <img src="../images/deadlift.jpg" alt="Deadlift">
                </div>
            `;
            break;

        case "pullup":
            info.innerHTML = `
                <div class="info-text-side">
                    <h3>Pull-Up</h3>
                    <p><strong>Primary Muscles Involved:</strong></p>
                    <p>Latissimus Dorsi (Lats/Back), Biceps, Upper Back</p>
                </div>
                <div class="info-image-side">
                    <img src="../images/pull-up.jpg" alt="Pull-Up">
                </div>
            `;
            break;

        case "pushup":
            info.innerHTML = `
                <div class="info-text-side">
                    <h3>Push-Up</h3>
                    <p><strong>Primary Muscles Involved:</strong></p>
                    <p>Chest, Triceps, Anterior Deltoids, and Core Stability</p>
                </div>
                <div class="info-image-side">
                    <img src="../images/push-up.jpg" alt="Push-Up">
                </div>
            `;
            break;

        case "shoulderpress":
            info.innerHTML = `
                <div class="info-text-side">
                    <h3>Shoulder Press</h3>
                    <p><strong>Primary Muscles Involved:</strong></p>
                    <p>Deltoids (Shoulders), Triceps, Upper Chest</p>
                </div>
                <div class="info-image-side">
                    <img src="../images/shoulder-press.jpg" alt="Shoulder Press">
                </div>
            `;
            break;

    }

}

/* ===================================
   SPORTS LAB
=================================== */

function showSport(sport) {

    const info = document.getElementById("sport-info");

    switch (sport) {

        case "basketball":
            info.innerHTML = `
                <div class="info-text-side">
                    <h3>Basketball</h3>
                    <p>Relies heavily on legs, core, shoulders, and arms for jumping, shooting, and sprinting.</p>
                </div>
                <div class="info-image-side">
                    <img src="../images/basketball.jpg" alt="Basketball">
                </div>
            `;
            break;

        case "soccer":
            info.innerHTML = `
                <div class="info-text-side">
                    <h3>Soccer</h3>
                    <p>Uses quadriceps, hamstrings, calves, and core muscles for explosive kicking, cutting, and running.</p>
                </div>
                <div class="info-image-side">
                    <img src="../images/soccer.jpg" alt="Soccer">
                </div>
            `;
            break;

        case "swimming":
            info.innerHTML = `
                <div class="info-text-side">
                    <h3>Swimming</h3>
                    <p>A full-body sport requiring intense coordination of the shoulders, back, core, and legs.</p>
                </div>
                <div class="info-image-side">
                    <img src="../images/swimming.jpg" alt="Swimming">
                </div>
            `;
            break;

        case "volleyball":
            info.innerHTML = `
                <div class="info-text-side">
                    <h3>Volleyball</h3>
                    <p>Requires explosive leg power for vertical jumps, strong shoulders for spiking, and quick reaction speed.</p>
                </div>
                <div class="info-image-side">
                    <img src="../images/volleyball.jpg" alt="Volleyball">
                </div>
            `;
            break;

        case "track":
            info.innerHTML = `
                <div class="info-text-side">
                    <h3>Sprinting</h3>
                    <p>Depends on rapid, powerful contractions of the glutes, hamstrings, quadriceps, and calves.</p>
                </div>
                <div class="info-image-side">
                    <img src="../images/sprinting.jpg" alt="Sprinting">
                </div>
            `;
            break;

        case "frisbee":
            info.innerHTML = `
                <div class="info-text-side">
                    <h3>Ultimate Frisbee</h3>
                    <p>Requires speed, agility, endurance, and quick changes of direction.</p>
                    <p><strong>Primary Muscles:</strong> Quadriceps, Hamstrings, Calves</p>
                </div>
                <div class="info-image-side">
                    <img src="../images/frisbee.jpg" alt="Frisbee">
                </div>
            `;
            break;

        case "hockey":
            info.innerHTML = `
                <div class="info-text-side">
                    <h3>Hockey</h3>
                    <p>Relies on explosive leg power, balance, and upper-body strength for skating and shooting.</p>
                    <p><strong>Primary Muscles:</strong> Quadriceps, Glutes, Core</p>
                </div>
                <div class="info-image-side">
                    <img src="../images/hockey.jpg" alt="Hockey">
                </div>
            `;
            break;

        case "badminton":
            info.innerHTML = `
                <div class="info-text-side">
                    <h3>Badminton</h3>
                    <p>Requires quick reactions, agility, balance, and explosive movement.</p>
                    <p><strong>Primary Muscles:</strong> Deltoids, Quadriceps, Calves</p>
                </div>
                <div class="info-image-side">
                    <img src="../images/badminton.jpg" alt="Badminton">
                </div>
            `;
            break;

        case "tabletennis":
            info.innerHTML = `
                <div class="info-text-side">
                    <h3>Table Tennis</h3>
                    <p>Requires lightning-fast reflexes, hand-eye coordination, precision, and agility.</p>
                    <p><strong>Primary Muscles:</strong> Forearms, Deltoids, Core</p>
                </div>
                <div class="info-image-side">
                    <img src="../images/table-tennis.jpg" alt="Table Tennis">
                </div>
            `;
            break;

    }

}

/* ===================================
   WORKOUT GENERATOR
=================================== */

function generateWorkout() {

    const goal = document.getElementById("workout-goal").value;
    const result = document.getElementById("workout-result");
    let workout = "";

    switch(goal) {

        case "strength":
            workout = `
                <h3>Strength Workout</h3>
                <p>Squat: 4 × 6</p>
                <p>Bench Press: 4 × 6</p>
                <p>Deadlift: 3 × 5</p>
                <p>Estimated Calories Burned: 500 kcal</p>
            `;
            break;

        case "speed":
            workout = `
                <h3>Speed Workout</h3>
                <p>40m Sprint × 8</p>
                <p>Hill Sprint × 6</p>
                <p>Bounding Drill × 3</p>
                <p>Estimated Calories Burned: 450 kcal</p>
            `;
            break;

        case "endurance":
            workout = `
                <h3>Endurance Workout</h3>
                <p>5 km Run</p>
                <p>Bike: 20 min</p>
                <p>Jump Rope: 10 min</p>
                <p>Estimated Calories Burned: 600 kcal</p>
            `;
            break;

        case "jump":
            workout = `
                <h3>Vertical Jump Workout</h3>
                <p>Box Jumps × 12</p>
                <p>Jump Squats × 15</p>
                <p>Broad Jumps × 10</p>
                <p>Estimated Calories Burned: 420 kcal</p>
            `;
            break;

    }

    result.innerHTML = workout;

}

/* ===================================
   REACTION TEST
=================================== */

let reactionStart;
let reactionReady = false;

function startReactionTest() {

    const box = document.getElementById("reaction-box");
    const result = document.getElementById("reaction-result");

    reactionReady = false;
    result.innerHTML = "";
    box.style.background = "#e74c3c";
    box.innerHTML = "Wait...";

    const delay = Math.random() * 3000 + 2000;

    setTimeout(function() {
        reactionReady = true;
        reactionStart = Date.now();
        box.style.background = "#2ecc71";
        box.innerHTML = "CLICK NOW!";
    }, delay);

}

document.addEventListener("DOMContentLoaded", function() {

    const box = document.getElementById("reaction-box");

    box.addEventListener("click", function() {

        if (!reactionReady) {
            return;
        }

        const time = Date.now() - reactionStart;
        const result = document.getElementById("reaction-result");
        let rating = "";

        if (time < 250) {
            rating = "🏆 Elite Athlete Reflexes";
        }
        else if (time < 400) {
            rating = "🔥 Excellent Reaction Time";
        }
        else {
            rating = "👍 Average Human Reaction Time";
        }

        result.innerHTML = `Reaction Time: ${time} ms<br>${rating}`;
        reactionReady = false;
        box.style.background = "#cccccc";
        box.innerHTML = "Start Again";

    });

});
