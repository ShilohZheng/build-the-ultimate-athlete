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

            <p>
                The pectoralis major is a large skeletal muscle located on the front of the chest.
                It attaches to the humerus (upper arm bone) and helps move the arm.
            </p>

            <p>
                Its main functions are shoulder flexion, horizontal adduction,
                and internal rotation. These movements are important during
                pushing actions such as bench presses and push-ups.
            </p>

            <p>
                During contraction, nerve impulses stimulate muscle fibers.
                Actin and myosin filaments form cross-bridges, allowing the
                muscle to generate force and move the arm.
            </p>

            <p>
                <strong>Common Exercises:</strong> Bench Press, Push-Up
            </p>

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

            <p>
                The deltoid is a large muscle covering the shoulder joint.
                It consists of anterior, lateral, and posterior sections.
            </p>

            <p>
                These sections work together to flex, extend, and abduct the arm.
                The shoulder has a large range of motion but depends heavily on muscles for stability.
            </p>

            <p>
                During movement, motor neurons activate muscle fibers,
                allowing actin and myosin cross-bridges to generate force and move the arm.
            </p>

            <p>
                <strong>Common Exercises:</strong> Shoulder Press, Lateral Raise
            </p>

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

            <p>
                The biceps brachii is located on the front of the upper arm,
                while the triceps brachii is located on the back.
            </p>

            <p>
                The biceps flex the elbow joint and assist forearm supination,
                while the triceps extend the elbow.
            </p>

            <p>
                These muscles work as an antagonistic pair, meaning one contracts
                while the other relaxes to produce smooth movement.
            </p>

            <p>
                <strong>Common Exercises:</strong> Bicep Curls, Dips
            </p>

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

            <p>
                The core includes the rectus abdominis, transverse abdominis,
                obliques, and lower back muscles.
            </p>

            <p>
                These muscles stabilize the spine and transfer force between
                the upper and lower body during movement.
            </p>

            <p>
                Strong core muscles improve posture, balance, and athletic performance
                by maintaining proper body alignment.
            </p>

            <p>
                <strong>Common Exercises:</strong> Plank, Crunches
            </p>

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

            <p>
                Major back muscles include the latissimus dorsi,
                trapezius, and erector spinae.
            </p>

            <p>
                The latissimus dorsi pulls the arm downward and backward,
                while the trapezius helps stabilize and move the shoulder girdle.
            </p>

            <p>
                The erector spinae supports the vertebral column and helps maintain posture
                during lifting and athletic activities.
            </p>

            <p>
                <strong>Common Exercises:</strong> Pull-Ups, Rows
            </p>

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

            <p>
                Major leg muscles include the quadriceps, hamstrings,
                gluteus maximus, and gastrocnemius (calf muscles).
            </p>

            <p>
                The quadriceps extend the knee, the hamstrings flex the knee,
                and the gluteus maximus produces powerful hip extension.
            </p>

            <p>
                These muscles work together to generate force for running,
                jumping, sprinting, and changing direction during sports.
            </p>

            <p>
                ATP released inside muscle fibers powers actin-myosin cross-bridge cycling,
                allowing the muscles to contract and produce movement.
            </p>

            <p>
                <strong>Common Exercises:</strong> Squats, Lunges
            </p>

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

            <p><strong>Primary Muscles:</strong>
            Pectoralis Major, Triceps Brachii, Anterior Deltoid.</p>

            <p><strong>Movement:</strong>
            Horizontal shoulder adduction and elbow extension.</p>

            <p><strong>How It Works:</strong>
            The pectoralis major pulls the arms toward the midline of the body while the triceps extend the elbows. During the upward phase, muscle fibers shorten through concentric contractions powered by ATP.</p>

            <p><strong>Fatigue:</strong>
            Repeated sets can reduce ATP availability and increase lactate accumulation, decreasing force production.</p>
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

            <p><strong>Primary Muscles:</strong>
            Quadriceps, Gluteus Maximus, Hamstrings, Core.</p>

            <p><strong>Movement:</strong>
            Hip extension and knee extension.</p>

            <p><strong>How It Works:</strong>
            The quadriceps straighten the knees while the gluteus maximus extends the hips. Core muscles stabilize the spine and maintain balance throughout the movement.</p>

            <p><strong>Fatigue:</strong>
            High ATP demand and repeated contractions can lead to oxygen debt and reduced muscular performance.</p>
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

            <p><strong>Primary Muscles:</strong>
            Hamstrings, Gluteus Maximus, Erector Spinae, Trapezius.</p>

            <p><strong>Movement:</strong>
            Hip extension while maintaining spinal stability.</p>

            <p><strong>How It Works:</strong>
            The glutes and hamstrings generate force to lift the weight while the erector spinae muscles stabilize the vertebral column and resist spinal flexion.</p>

            <p><strong>Fatigue:</strong>
            Large muscle groups consume significant ATP, causing fatigue when energy demand exceeds oxygen supply.</p>
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

            <p><strong>Primary Muscles:</strong>
            Latissimus Dorsi, Biceps Brachii, Rhomboids.</p>

            <p><strong>Movement:</strong>
            Shoulder adduction and elbow flexion.</p>

            <p><strong>How It Works:</strong>
            The latissimus dorsi pulls the upper arm downward while the biceps flex the elbow. Together they lift the body against gravity.</p>

            <p><strong>Fatigue:</strong>
            Repeated contractions increase lactate levels and reduce the efficiency of cross-bridge cycling.</p>
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

            <p><strong>Primary Muscles:</strong>
            Pectoralis Major, Triceps, Anterior Deltoids, Core.</p>

            <p><strong>Movement:</strong>
            Shoulder horizontal adduction and elbow extension.</p>

            <p><strong>How It Works:</strong>
            Similar to a bench press, the chest generates most of the force while the triceps extend the elbows. Core muscles stabilize the body throughout the exercise.</p>

            <p><strong>Fatigue:</strong>
            As ATP stores decrease, muscle contractions become weaker and endurance declines.</p>
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

            <p><strong>Primary Muscles:</strong>
            Deltoids, Triceps, Upper Pectorals.</p>

            <p><strong>Movement:</strong>
            Shoulder abduction and elbow extension.</p>

            <p><strong>How It Works:</strong>
            The deltoids lift the arms overhead while the triceps straighten the elbows. The movement requires coordinated contraction of multiple muscle groups.</p>

            <p><strong>Fatigue:</strong>
            Fast-twitch fibers are heavily recruited during heavy loads, leading to faster fatigue.</p>
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

            <p>
                Basketball relies heavily on the quadriceps, gluteus maximus,
                calf muscles, core, and deltoids.
            </p>

            <p>
                The leg muscles generate force for jumping and sprinting,
                while the core stabilizes the body during rapid changes in direction.
            </p>

            <p>
                Fast-twitch (Type II) muscle fibers are frequently recruited
                because basketball requires explosive power and quick acceleration.
            </p>

            <p>
                During repeated sprints, ATP is consumed rapidly and lactate
                accumulation may contribute to muscle fatigue.
            </p>

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

            <p>
                Soccer primarily uses the quadriceps, hamstrings,
                calves, glutes, and core muscles.
            </p>

            <p>
                The quadriceps extend the knee during kicking,
                while the hamstrings assist sprinting and sudden stops.
            </p>

            <p>
                Soccer requires both aerobic and anaerobic energy systems
                because players alternate between jogging and explosive sprints.
            </p>

            <p>
                Efficient oxygen delivery helps delay fatigue during long matches.
            </p>

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

            <p>
                Swimming uses the latissimus dorsi, pectoralis major,
                deltoids, core muscles, and leg muscles.
            </p>

            <p>
                The upper body generates propulsion while the core
                stabilizes body position in the water.
            </p>

            <p>
                Because swimming events often last several minutes,
                athletes depend heavily on aerobic respiration and oxygen delivery.
            </p>

            <p>
                Slow-twitch (Type I) fibers help resist fatigue and
                support sustained muscular contractions.
            </p>

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

            <p>
                Volleyball relies on the quadriceps, gluteus maximus,
                calves, deltoids, and triceps.
            </p>

            <p>
                Powerful leg extension generates vertical jump height,
                while the shoulder muscles produce force during serving and spiking.
            </p>

            <p>
                Fast-twitch fibers are highly active because explosive movements
                occur repeatedly throughout the game.
            </p>

            <p>
                ATP must be produced rapidly to support repeated jumps and powerful hits.
            </p>

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

            <p>
                Sprinting depends heavily on the gluteus maximus,
                hamstrings, quadriceps, and calf muscles.
            </p>

            <p>
                These muscles generate large amounts of force to accelerate
                the body and maintain high running speeds.
            </p>

            <p>
                Fast-twitch fibers dominate because they contract rapidly
                and produce powerful movements.
            </p>

            <p>
                Sprinting relies heavily on anaerobic respiration,
                causing ATP stores to decrease quickly and lactate levels to rise.
            </p>

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

            <p>
                Ultimate Frisbee requires the quadriceps, hamstrings,
                calves, deltoids, and core muscles.
            </p>

            <p>
                Athletes must sprint, jump, throw, and rapidly change direction.
            </p>

            <p>
                Both aerobic and anaerobic energy systems are important
                because play involves continuous movement and repeated bursts of speed.
            </p>

            <p>
                Strong core muscles help transfer force during throwing motions.
            </p>

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

            <p>
                Hockey relies heavily on the quadriceps, glutes,
                core muscles, and upper-body stabilizers.
            </p>

            <p>
                Powerful leg contractions generate skating speed,
                while the core helps maintain balance on the ice.
            </p>

            <p>
                Fast-twitch fibers support explosive acceleration and shooting power.
            </p>

            <p>
                Repeated high-intensity efforts increase ATP demand
                and contribute to muscular fatigue.
            </p>

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

            <p>
                Badminton uses the deltoids, forearm muscles,
                quadriceps, calves, and core.
            </p>

            <p>
                Quick directional changes require strong lower-body muscles,
                while shoulder and forearm muscles generate racket speed.
            </p>

            <p>
                Fast-twitch fibers are frequently activated due to explosive movements.
            </p>

            <p>
                Efficient neuromuscular coordination is essential for reaction time and accuracy.
            </p>

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

            <p>
                Table tennis relies on the forearm muscles,
                deltoids, core muscles, and lower-body stabilizers.
            </p>

            <p>
                Small but rapid muscle contractions generate racket speed
                and precise ball control.
            </p>

            <p>
                Quick reaction times depend on efficient communication
                between the nervous system and skeletal muscles.
            </p>

            <p>
                Although force requirements are lower than many sports,
                muscular endurance and coordination are critical.
            </p>

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
        adaptation =
"Heavy resistance training increases strength through neural adaptation and muscle fiber recruitment. The nervous system becomes more efficient at activating motor units, allowing more muscle fibers to contract at the same time.";

fibers =
"Primarily Type II fast-twitch fibers. These fibers generate large amounts of force but fatigue quickly because they rely more on anaerobic energy systems.";

contraction =
"Strength exercises involve both concentric contractions (lifting the weight) and eccentric contractions (lowering the weight). Eccentric contractions create high mechanical tension and contribute to strength gains.";

recovery =
"Recovery requires 48–72 hours because microscopic damage occurs within muscle fibers. During recovery, protein synthesis repairs the fibers and makes them stronger.";

sports =
"Important for football, rugby, wrestling, and powerlifting where maximum force production is required.";
        athleteType = "Power Athlete";
    } else if (training === "hypertrophy") {
        title = "Muscle Growth (Hypertrophy) Report";
        image = "../images/workout-strength.jpg";
        adaptation =
"Repeated resistance training creates microscopic damage within muscle fibers. During recovery, protein synthesis repairs the fibers and increases their cross-sectional area, causing hypertrophy.";

fibers =
"Both Type I and Type II fibers can increase in size, although Type II fibers generally show greater growth because they produce more force.";

contraction =
"Moderate loads with controlled repetitions increase time under tension, which stimulates muscle protein synthesis and growth.";

recovery =
"Adequate sleep, protein intake, and recovery time are essential because muscle growth occurs after training rather than during exercise.";

sports =
"Useful in bodybuilding, fitness training, and sports where increased muscle size contributes to performance.";
        athleteType = "Muscle Builder";
    } else if (training === "endurance") {
        title = "Muscular Endurance Report";
        image = "../images/workout-endurance.jpg";
        adaptation =
"Endurance training improves the muscle's ability to produce ATP through aerobic respiration. Muscles develop more mitochondria, capillaries, and oxygen-delivering blood vessels.";

fibers =
"Primarily Type I slow-twitch fibers. These fibers contain many mitochondria and myoglobin, allowing efficient oxygen use and fatigue resistance.";

contraction =
"Muscles perform repeated low-force contractions for long periods while maintaining a continuous oxygen supply.";

recovery =
"Recovery is generally faster because endurance exercise causes less structural muscle damage than heavy resistance training.";

sports =
"Essential for marathon running, cycling, swimming, rowing, and other long-duration activities.";
        athleteType = "Endurance Athlete";
    } else if (training === "power") {
        title = "Explosive Power Report";
        image = "../images/workout-speed.jpg";
        adaptation =
"Power training increases the rate of force development, allowing muscles to generate maximum force in a very short period of time.";

fibers =
"Strong activation of Type II fast-twitch fibers. These fibers contract rapidly and generate high force but fatigue quickly.";

contraction =
"Explosive concentric contractions occur during jumping, sprinting, throwing, and rapid acceleration movements.";

recovery =
"Longer recovery periods are needed because the nervous system and fast-twitch fibers experience significant stress.";

sports =
"Critical for basketball, volleyball, sprinting, Olympic lifting, and many explosive athletic movements.";
        athleteType = "Explosive Athlete";
    }

    const muscleName = muscle.charAt(0).toUpperCase() + muscle.slice(1);
    let muscleFunction = "";

    if (muscle === "legs")
muscleFunction =
"The quadriceps, hamstrings, gluteal muscles, and calves work together to produce force for walking, running, jumping, and acceleration.";

if (muscle === "chest")
muscleFunction =
"The pectoralis major performs horizontal adduction and pushing movements such as pressing, throwing, and pushing.";

if (muscle === "back")
muscleFunction =
"The latissimus dorsi, trapezius, and other back muscles stabilize the spine and generate pulling movements.";

if (muscle === "core")
muscleFunction =
"The abdominal and lower back muscles stabilize the trunk, maintain posture, and transfer force between the upper and lower body.";

if (muscle === "shoulders")
muscleFunction =
"The deltoid muscles move the arm in multiple directions and stabilize the shoulder joint during movement.";

if (muscle === "arms")
muscleFunction =
"The biceps brachii and triceps brachii control elbow flexion and extension, assisting in pushing and pulling movements.";

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
