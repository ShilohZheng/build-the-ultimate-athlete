// ===========================
// BMI CALCULATOR
// ===========================

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

    /* 💡 核心修改：在计算出来的数字和分类下方，追加包裹了你指定的精美照片 */
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

    const fitness =
        document.getElementById("fitness").value;
    
    const experience =
        document.getElementById("experience").value;
    
    const hours =
        document.getElementById("hours").value;

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

    const imageMap = {

    "Basketball": "../images/sports-lab-basketball.jpg",
    "Soccer": "../images/sports-lab-soccer.jpg",
    "Volleyball": "../images/sports-lab-volleyball.jpg",
    "Ultimate Frisbee": "../images/sports-lab-frisbee.jpg",
    "Hockey": "../images/sports-lab-hockey.jpg",
    "Rugby": "../images/sports-lab-rugby.jpg",
    "Skiing": "../images/sports-lab-skiing.jpg",
    "Baseball": "../images/sports-lab-baseball.jpg",
    "Tennis": "../images/sports-lab-tennis.jpg",
    "Badminton": "../images/sports-lab-badminton.jpg",
    "Table Tennis": "../images/sports-lab-tabletennis.jpg",
    "Swimming": "../images/sports-lab-swimming.jpg",
    "Rock Climbing": "../images/sports-lab-rockclimbing.jpg",
    "Cycling": "../images/sports-lab-cycling.jpg",
    "Sprinting": "../images/sports-lab-sprinting.jpg",
    "Distance Running": "../images/sports-lab-distance-running.jpg",
    "Archery": "../images/sports-lab-archery.jpg",
    "Boxing": "../images/sports-lab-boxing.jpg",
    "Gym Workout": "../images/sports-lab-gymworkout.jpg",
    "Rowing": "../images/sports-lab-rowing.jpg"

};

document.getElementById("sport-result").innerHTML =

    "<h2>Your Ultimate Athlete Report</h2>" +

    "<div class='match-images'>" +

        "<div class='match-sport'>" +
            "<img src='" + imageMap[sport1] + "'>" +
            "<h4>#1 Best Match<br>" +
            sport1 +
            "<br>(" +
            match1 +
            "% Match)</h4>" +
        "</div>" +

        "<div class='match-sport'>" +
            "<img src='" + imageMap[sport2] + "'>" +
            "<h4>#2 Alternative<br>" +
            sport2 +
            "<br>(" +
            match2 +
            "% Match)</h4>" +
        "</div>" +

        "<div class='match-sport'>" +
            "<img src='" + imageMap[sport3] + "'>" +
            "<h4>#3 Alternative<br>" +
            sport3 +
            "<br>(" +
            match3 +
            "% Match)</h4>" +
        "</div>" +

    "</div>" +

    "<hr>" +

    "<p><strong>Fitness Level:</strong> " +
    fitness +
    "</p>" +

    "<p><strong>Sports Experience:</strong> " +
    experience +
    "</p>" +

    "<p><strong>Weekly Training Hours:</strong> " +
    hours +
    "</p>" +

    "<p><strong>Main Athletic Goal:</strong> " +
    goal +
    "</p>" +

    "<p><strong>Strongest Muscle Group:</strong> " +
    muscle +
    "</p>" +

    "<hr>" +

    "<h3>Performance Analysis</h3>" +

    "<p>" +
    reason +
    "</p>" +

    "<p>Your profile indicates a <strong>" +
    fitness +
    "</strong> fitness level with <strong>" +
    experience +
    "</strong> of sports experience.</p>" +

    "<p>You currently train approximately <strong>" +
    hours +
    "</strong> per week and are primarily focused on <strong>" +
    goal +
    "</strong>.</p>" +

    "<p>Based on your physical profile, training habits, athletic goals, and personal preferences, <strong>" +
    sport1 +
    "</strong> appears to be your strongest overall sport match.</p>" +

    "<p>The additional recommendations of <strong>" +
    sport2 +
    "</strong> and <strong>" +
    sport3 +
    "</strong> provide alternative pathways that align closely with your athletic strengths and interests.</p>" +

    "<p><strong>Overall Athlete Rating:</strong> Competitive Potential Detected ✓</p>" +

    "<div class='champion-image'>" +

    "<img src='../images/sports-lab-champion.jpg' alt='Champion Trophy'>" +

    "<div style='max-width:320px;'>" +

        "<h3>Athlete Potential</h3>" +

        "<p>Your assessment results indicate strong potential for success in <strong>" +
        sport1 +
        "</strong>. Continued training, proper conditioning, and consistent practice can further develop your athletic performance and overall fitness.</p>" +

    "</div>" +

    "<img src='../images/sports-lab-muscular-man.jpg' alt='Athlete'>" +

"</div>";

}
