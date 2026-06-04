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
    if (!box) return;

    box.addEventListener("click", function() {
        if (!reactionReady) return;

        const time = Date.now() - reactionStart;
        const result = document.getElementById("reaction-result");
        let rating = "";

        if (time < 250) {
            rating = "🏆 Elite Athlete Reflexes";
        } else if (time < 400) {
            rating = "🔥 Excellent Reaction Time";
        } else {
            rating = "👍 Average Human Reaction Time";
        }

        result.innerHTML = `Reaction Time: ${time} ms<br>${rating}`;
        reactionReady = false;
        box.style.background = "#cccccc";
        box.innerHTML = "Start Again";
    });
});

/* ===================================
   MUSCLE DEVELOPMENT SIMULATOR
=================================== */

function generateAdaptation() {
    const training = document.getElementById("training-type").value;
    const muscle = document.getElementById("target-muscle").value;
    const result = document.getElementById("adaptation-result");

    let title = "";
    let image = "";
    let adaptation = "";
    let fibers = "";
    let contraction = "";
    let recovery = "";
    let sports = "";
    let athleteType = "";

    if (training === "strength") {
        title = "Strength Training Report";
        image = "../images/workout-strength.jpg";
        adaptation = "Heavy resistance training increases force production through neural adaptation.";
        fibers = "Primarily Type II fast-twitch fibers.";
        contraction = "Heavy concentric + eccentric contractions.";
        recovery = "48–72 hours recovery recommended.";
        sports = "Football, rugby, powerlifting.";
        athleteType = "Power Athlete";
    } else if (training === "hypertrophy") {
        title = "Muscle Growth (Hypertrophy) Report";
        image = "../images/workout-strength.jpg";
        adaptation = "Muscle fibers grow through micro-tears and repair.";
        fibers = "Type I and Type II fibers both increase in size.";
        contraction = "Controlled tension-based contractions.";
        recovery = "Sleep and protein are essential.";
        sports = "Bodybuilding and aesthetic sports.";
        athleteType = "Muscle Builder";
    } else if (training === "endurance") {
        title = "Muscular Endurance Report";
        image = "../images/workout-endurance.jpg";
        adaptation = "Improves long-duration muscle performance.";
        fibers = "Mainly Type I slow-twitch fibers.";
        contraction = "Low-force repeated contractions.";
        recovery = "Fast recovery due to low damage.";
        sports = "Running, cycling, swimming.";
        athleteType = "Endurance Athlete";
    } else if (training === "power") {
        title = "Explosive Power Report";
        image = "../images/workout-speed.jpg";
        adaptation = "Increases speed of force production.";
        fibers = "Strong Type II activation.";
        contraction = "Explosive concentric movements.";
        recovery = "High rest demand.";
        sports = "Basketball, sprinting, volleyball.";
        athleteType = "Explosive Athlete";
    }

    const muscleName = muscle.charAt(0).toUpperCase() + muscle.slice(1);
    let muscleFunction = "";

    if (muscle === "chest") muscleFunction = "Chest helps pushing movements.";
    if (muscle === "back") muscleFunction = "Back supports pulling and posture.";
    if (muscle === "legs") muscleFunction = "Legs generate movement and power.";
    if (muscle === "core") muscleFunction = "Core stabilizes body.";
    if (muscle === "shoulders") muscleFunction = "Shoulders control arm movement.";
    if (muscle === "arms") muscleFunction = "Arms assist pushing and pulling.";

    result.innerHTML = `
        <div class="report-title">
            <h2>${title}</h2>
            <p class="adaptation-intro">Scientific analysis of how ${muscleName} muscles respond.</p>
        </div>
        <div class="report-image-container">
            <img src="${image}" class="adaptation-image">
        </div>
        <div class="adaptation-cards">
            <div class="adapt-card">
                <h4>Target Muscle Group</h4>
                <p>${muscleName}</p>
            </div>
            <div class="adapt-card">
                <h4>Muscle Function</h4>
                <p>${muscleFunction}</p>
            </div>
            <div class="adapt-card">
                <h4>Training Adaptation</h4>
                <p>${adaptation}</p>
            </div>
            <div class="adapt-card">
                <h4>Muscle Fiber Response</h4>
                <p>${fibers}</p>
            </div>
            <div class="adapt-card">
                <h4>Contraction Type</h4>
                <p>${contraction}</p>
            </div>
            <div class="adapt-card">
                <h4>Recovery</h4>
                <p>${recovery}</p>
            </div>
            <div class="adapt-card">
                <h4>Sports Application</h4>
                <p>${sports}</p>
            </div>
            <div class="adapt-card">
                <h4>Athlete Type</h4>
                <p>${athleteType}</p>
            </div>
        </div>
    `;
}

/* ===================================
   MUSCLE FATIGUE SCIENCE LAB
=================================== */

let atp = 100;
let oxygen = 100;
let lactate = 0;

function updateScienceFatigue() {
    // 确保这些元素存在后再更新，防止控制台报错
    const atpFill = document.getElementById("atp-fill");
    const oxyFill = document.getElementById("oxygen-fill");
    const lacFill = document.getElementById("lactate-fill");
    const report = document.getElementById("fatigue-science-report");

    if (atpFill) atpFill.style.width = atp + "%";
    if (oxyFill) oxyFill.style.width = oxygen + "%";
    if (lacFill) lacFill.style.width = lactate + "%";
    if (!report) return;

    if (lactate < 30) {
        report.innerHTML = `
            <h4>Normal Muscle Function</h4>
            <p>ATP is readily available.</p>
            <p>Oxygen supply meets energy demand.</p>
            <p>Cross-bridge cycling occurs efficiently.</p>
            <p>Aerobic respiration provides most ATP.</p>
        `;
    } else if (lactate < 60) {
        report.innerHTML = `
            <h4>Increasing Intensity</h4>
            <p>ATP is being consumed rapidly.</p>
            <p>Oxygen demand exceeds supply.</p>
            <p>Anaerobic respiration begins.</p>
            <p>Lactate starts accumulating.</p>
        `;
    } else if (lactate < 85) {
        report.innerHTML = `
            <h4>Muscle Fatigue Developing</h4>
            <p>Significant lactate build-up occurs.</p>
            <p>Oxygen debt increases.</p>
            <p>ATP production becomes less efficient.</p>
            <p>Cross-bridge formation slows.</p>
        `;
    } else {
        report.innerHTML = `
            <h4>Severe Fatigue</h4>
            <p>Glucose stores are becoming depleted.</p>
            <p>ATP availability is reduced.</p>
            <p>Lactate interferes with contraction.</p>
            <p>Force production decreases.</p>
            <p>Exercise should stop before muscle cells are damaged.</p>
        `;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("science-fatigue-btn");
    const reset = document.getElementById("reset-fatigue-btn");

    // 页面初次加载时初始化一次条形图数据状态
    updateScienceFatigue();

    if (btn) {
        btn.addEventListener("click", function() {
            const activity = document.getElementById("activity-select").value;

            if (activity === "sprint") {
                atp -= 8;
                oxygen -= 6;
                lactate += 12;
            } else if (activity === "marathon") {
                atp -= 3;
                oxygen -= 8;
                lactate += 3;
            } else if (activity === "bench") {
                atp -= 6;
                oxygen -= 4;
                lactate += 7;
            } else if (activity === "plank") {
                atp -= 4;
                oxygen -= 7;
                lactate += 5;
            }

            atp = Math.max(atp, 0);
            oxygen = Math.max(oxygen, 0);
            lactate = Math.min(lactate, 100);

            updateScienceFatigue();
        });
    }

    if (reset) {
        reset.addEventListener("click", function() {
            atp = 100;
            oxygen = 100;
            lactate = 0;
            updateScienceFatigue();
        });
    }
});
