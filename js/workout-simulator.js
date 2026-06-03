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

/* ===================================================
   MUSCLE FATIGUE SIMULATOR LOGIC (AUTO-INITIALIZED)
=================================================== */

let muscleEnergy = 100;
let repCount = 0;
let fatigueInterval = null;
let isSimulating = false;

// 🌟 新增：专门用来实时切换图片的函数
function updateFatigueImage() {
    const exercise = document.getElementById("fatigue-exercise").value;
    const gearImg = document.getElementById("fatigue-gear-img");

    if (exercise === "arms") {
        gearImg.src = "https://cdn-icons-png.flaticon.com/512/3043/3043232.png"; // 哑铃
    } else if (exercise === "chest") {
        gearImg.src = "https://cdn-icons-png.flaticon.com/512/2548/2548537.png"; // 杠铃
    } else if (exercise === "legs") {
        gearImg.src = "https://cdn-icons-png.flaticon.com/512/4813/4813354.png"; // 深蹲
    }
}

// 1. 初始化并启动模拟器
function startFatigueSim() {
    // 启动时确信图片是最新的
    updateFatigueImage();

    // 重置核心数值状态
    muscleEnergy = 100;
    repCount = 0;
    isSimulating = true;
    
    document.getElementById("rep-count").innerText = repCount;
    document.getElementById("energy-text").innerText = "100%";
    
    const energyFill = document.getElementById("energy-fill");
    energyFill.style.width = "100%";
    energyFill.style.background = "#00b894";
    document.getElementById("energy-text").style.color = "#00b894";
    
    // 隐藏上一次生成的报告
    const report = document.getElementById("fatigue-report");
    report.classList.remove("show");
    report.innerHTML = "";

    // 激活 LIFT 按钮，并修改重置按钮文本
    document.getElementById("lift-btn").disabled = false;
    document.getElementById("start-fatigue-btn").innerText = "Restart Simulator";

    // 清除上一次的计时器，开启全新的自主恢复循环
    if (fatigueInterval) clearInterval(fatigueInterval);
    
    fatigueInterval = setInterval(function() {
        if (!isSimulating) return;

        const weight = document.getElementById("fatigue-weight").value;
        
        let recoveryRate = 0;
        if (weight === "light") recoveryRate = 2.2;
        else if (weight === "medium") recoveryRate = 1.0;
        else if (weight === "heavy") recoveryRate = 0.3;

        if (muscleEnergy < 100) {
            muscleEnergy = Math.min(100, muscleEnergy + recoveryRate);
            updateEnergyUI();
        }
    }, 300);
}

// 2. 每次点击 LIFT! 按钮
function performRep() {
    if (!isSimulating || muscleEnergy <= 0) return;

    const weight = document.getElementById("fatigue-weight").value;
    
    let energyCost = 0;
    if (weight === "light") energyCost = 7;
    else if (weight === "medium") energyCost = 14;
    else if (weight === "heavy") energyCost = 26;

    muscleEnergy = Math.max(0, muscleEnergy - energyCost);
    repCount++;
    
    document.getElementById("rep-count").innerText = repCount;
    updateEnergyUI();

    if (muscleEnergy <= 0) {
        triggerMuscleFailure();
    }
}

// 3. UI 状态条刷新
function updateEnergyUI() {
    const energyFill = document.getElementById("energy-fill");
    const energyText = document.getElementById("energy-text");
    
    energyFill.style.width = muscleEnergy + "%";
    energyText.innerText = Math.round(muscleEnergy) + "%";

    if (muscleEnergy > 50) {
        energyFill.style.background = "#00b894";
        energyText.style.color = "#00b894";
    } else if (muscleEnergy > 20) {
        energyFill.style.background = "#f1c40f";
        energyText.style.color = "#f1c40f";
    } else {
        energyFill.style.background = "#e74c3c";
        energyText.style.color = "#e74c3c";
    }
}

// 4. 触发力竭
function triggerMuscleFailure() {
    isSimulating = false;
    document.getElementById("lift-btn").disabled = true;
    if (fatigueInterval) clearInterval(fatigueInterval);

    const exercise = document.getElementById("fatigue-exercise").value;
    const weight = document.getElementById("fatigue-weight").value;
    const report = document.getElementById("fatigue-report");

    let evaluation = "";
    if (repCount >= 15) {
        evaluation = "🏆 Outstanding Muscular Endurance! Your slow-twitch muscle fibers handled that load like a true professional athlete.";
    } else if (repCount >= 8) {
        evaluation = "💪 Great Hypertrophy Range! This combination perfectly triggers muscle protein synthesis and strength growth.";
    } else {
        evaluation = "⚠️ Rapid Neuromuscular Fatigue! Heavy intensity causes high central nervous system strain. Rest up completely before your next set!";
    }

    report.innerHTML = `
        <h4>🚨 TOTAL MUSCLE FAILURE HIT!</h4>
        <p>You completed <strong>${repCount} reps</strong> before complete exhaustion on the <strong>${exercise}</strong> simulation at <strong>${weight} intensity</strong>. ${evaluation}</p>
    `;
    
    report.classList.add("show");
}

// 🌟 新增：让页面一加载完就先跑一次图片匹配，防止初始图裂开
window.addEventListener('DOMContentLoaded', updateFatigueImage);
