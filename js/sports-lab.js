// ===========================
// BMI CALCULATOR
// ===========================
const sportImages = {

    "Basketball": "sports-lab-basketball.jpg",
    "Soccer": "sports-lab-soccer.jpg",
    "Volleyball": "sports-lab-volleyball.jpg",
    "Ultimate Frisbee": "sports-lab-frisbee.jpg",
    "Hockey": "sports-lab-hockey.jpg",
    "Rugby": "sports-lab-rugby.jpg",
    "Skiing": "sports-lab-skiing.jpg",
    "Baseball": "sports-lab-baseball.jpg",

    "Tennis": "sports-lab-tennis.jpg",
    "Badminton": "sports-lab-badminton.jpg",
    "Table Tennis": "sports-lab-tabletennis.jpg",

    "Swimming": "sports-lab-swimming.jpg",
    "Rock Climbing": "sports-lab-rockclimbing.jpg",
    "Cycling": "sports-lab-cycling.jpg",

    "Sprinting": "sports-lab-sprinting.jpg",
    "Distance Running": "sports-lab-distance-running.jpg",
    "Archery": "sports-lab-archery.jpg",

    "Boxing": "sports-lab-boxing.jpg",
    "Gym Workout": "sports-lab-gymworkout.jpg",

    "Rowing": "sports-lab-rowing.jpg"

};

const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");

if (heightInput && weightInput) {

    heightInput.addEventListener("input", calculateBMI);
    weightInput.addEventListener("input", calculateBMI);

}

function calculateBMI() {

    const height =
        parseFloat(heightInput.value);

    const weight =
        parseFloat(weightInput.value);

    const bmiResult =
        document.getElementById("bmi-result");

    if (!height || !weight) {

        bmiResult.innerHTML =
            "Enter height and weight";

        return;
    }

    const bmi =
        weight /
        Math.pow(height / 100, 2);

    let category = "";

    if (bmi < 18.5) {

        category = "Underweight";

    } else if (bmi < 25) {

        category = "Healthy";

    } else if (bmi < 30) {

        category = "Overweight";

    } else {

        category = "Obese";

    }

    bmiResult.innerHTML =
        bmi.toFixed(1) +
        " (" +
        category +
        ")";
}

// ===========================
// SPORT MATCHMAKER
// ===========================

function findMySport() {

    const goal =
        document.getElementById("goal").value;

    const favorite =
        document.getElementById("favorite").value;

    const muscle =
        document.getElementById("muscle").value;

    const style =
        document.getElementById("style").value;

    const teamwork =
        document.getElementById("teamwork").value;

    const environment =
        document.getElementById("environment").value;

    const motivation =
        document.getElementById("motivation").value;

    let sport1 = "";
    let sport2 = "";
    let sport3 = "";

    let reason = "";

    // ===========================
    // TEAM SPORTS
    // ===========================

    if (teamwork === "Team Sports") {

        if (goal === "Increase Speed") {

            sport1 = "Soccer";
            sport2 = "Ultimate Frisbee";
            sport3 = "Basketball";

        }

        else if (goal === "Become More Explosive") {

            sport1 = "Volleyball";
            sport2 = "Basketball";
            sport3 = "Rugby";

        }

        else if (goal === "Build Strength") {

            sport1 = "Rugby";
            sport2 = "Hockey";
            sport3 = "Rowing";

        }

        else {

            sport1 = "Soccer";
            sport2 = "Hockey";
            sport3 = "Distance Running";

        }

    }

    // ===========================
    // INDIVIDUAL SPORTS
    // ===========================

    else {

        if (goal === "Build Strength") {

            sport1 = "Gym Workout";
            sport2 = "Boxing";
            sport3 = "Rock Climbing";

        }

        else if (goal === "Increase Speed") {

            sport1 = "Sprinting";
            sport2 = "Cycling";
            sport3 = "Badminton";

        }

        else if (goal === "Improve Endurance") {

            sport1 = "Distance Running";
            sport2 = "Swimming";
            sport3 = "Cycling";

        }

        else {

            sport1 = "Sprinting";
            sport2 = "Boxing";
            sport3 = "Tennis";

        }

    }

    // ===========================
    // MUSCLE BONUS
    // ===========================

    if (muscle === "Legs") {

        reason =
            "Your strong leg muscles support sports requiring speed, jumping, and endurance.";

    }

    else if (muscle === "Core") {

        reason =
            "A strong core improves balance, power transfer, and athletic stability.";

    }

    else if (muscle === "Arms") {

        reason =
            "Your upper-body strength is valuable for striking, throwing, and racket sports.";

    }

    else if (muscle === "Back") {

        reason =
            "Back strength supports pulling power and overall athletic performance.";

    }

    else if (muscle === "Shoulders") {

        reason =
            "Strong shoulders help with overhead movements and explosive actions.";

    }

    else {

        reason =
            "Your upper-body strength contributes to athletic power and control.";

    }

    // ===========================
    // MATCH %
    // ===========================

    const match1 =
        Math.floor(Math.random() * 6) + 95;

    const match2 =
        Math.floor(Math.random() * 6) + 89;

    const match3 =
        Math.floor(Math.random() * 6) + 84;

    document.getElementById("sport-result").innerHTML =

`
<h3>Your Ultimate Athlete Report</h3>

<div class="sport-match">

    <img src="../images/${sportImages[sport1]}">

    <div>

        <h4>🏆 #1 Best Match</h4>

        <p>${sport1}</p>

        <p>${match1}% Match</p>

    </div>

</div>

<div class="sport-match">

    <img src="../images/${sportImages[sport1]}">

    <div>

        <h4>🥈 Alternative Match</h4>

        <p>${sport2}</p>

        <p>${match2}% Match</p>

    </div>

</div>

<div class="sport-match">

    <img src="../images/${sportImages[sport1]}">

    <div>

        <h4>🥉 Alternative Match</h4>

        <p>${sport3}</p>

        <p>${match3}% Match</p>

    </div>

</div>

<p>
${reason}
</p>

<p>
Your athletic goal is <strong>${goal}</strong>.
These sports match your physical profile,
training goals, and athletic preferences.
</p>
`;
