// ==========================
// BMI CALCULATOR
// ==========================

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

    const sports = {

    "Basketball": 0,
    "Soccer": 0,
    "Volleyball": 0,
    "Ultimate Frisbee": 0,
    "Hockey": 0,
    "Rugby": 0,
    "Skiing": 0,
    "Baseball": 0,
    "Tennis": 0,
    "Badminton": 0,
    "Table Tennis": 0,
    "Swimming": 0,
    "Rock Climbing": 0,
    "Cycling": 0,
    "Sprinting": 0,
    "Distance Running": 0,
    "Archery": 0,
    "Boxing": 0,
    "Gym Workout": 0,
    "Rowing": 0

};

    if(goal === "Increase Speed"){

    sports["Sprinting"] += 5;
    sports["Soccer"] += 4;
    sports["Cycling"] += 4;
    sports["Badminton"] += 3;
    sports["Basketball"] += 3;

}

if(goal === "Build Strength"){

    sports["Gym Workout"] += 5;
    sports["Boxing"] += 4;
    sports["Rugby"] += 4;
    sports["Rock Climbing"] += 3;
    sports["Rowing"] += 3;

}

if(goal === "Improve Endurance"){

    sports["Distance Running"] += 5;
    sports["Swimming"] += 4;
    sports["Cycling"] += 4;
    sports["Rowing"] += 3;

}

if(goal === "Become More Explosive"){

    sports["Volleyball"] += 5;
    sports["Basketball"] += 4;
    sports["Sprinting"] += 4;
    sports["Boxing"] += 3;

}

    if(environment === "Outdoor"){

    sports["Soccer"] += 3;
    sports["Cycling"] += 3;
    sports["Distance Running"] += 3;
    sports["Ultimate Frisbee"] += 3;
    sports["Skiing"] += 3;
    sports["Rock Climbing"] += 3;

}

if(environment === "Indoor"){

    sports["Badminton"] += 3;
    sports["Table Tennis"] += 3;
    sports["Gym Workout"] += 3;
    sports["Volleyball"] += 3;
    sports["Swimming"] += 2;

}

    if(favorite === "Outdoor Adventure"){

    sports["Rock Climbing"] += 5;
    sports["Skiing"] += 5;
    sports["Cycling"] += 4;

}

if(favorite === "Strategy and Precision"){

    sports["Archery"] += 5;
    sports["Table Tennis"] += 4;
    sports["Baseball"] += 3;

}

if(favorite === "Fitness and Strength"){

    sports["Gym Workout"] += 5;
    sports["Boxing"] += 4;
    sports["Rowing"] += 3;

}

    if(fitness === "Advanced"){

    sports["Boxing"] += 2;
    sports["Rugby"] += 2;
    sports["Rowing"] += 2;

}

if(fitness === "Beginner"){

    sports["Swimming"] += 2;
    sports["Cycling"] += 2;
    sports["Gym Workout"] += 2;

}

    if(experience === "0-1 year"){

    sports["Swimming"] += 2;
    sports["Cycling"] += 2;

}

if(experience === "2-3 years"){

    sports["Basketball"] += 1;
    sports["Soccer"] += 1;

}

if(experience === "4-6 years"){

    sports["Volleyball"] += 2;
    sports["Tennis"] += 2;

}

    if(experience === "7+ years"){

    sports["Boxing"] += 2;
    sports["Rock Climbing"] += 2;
    sports["Rugby"] += 2;

}

if(hours === "1-3 hours"){

    sports["Gym Workout"] += 1;
    sports["Swimming"] += 1;

}

if(hours === "4-6 hours"){

    sports["Basketball"] += 1;
    sports["Soccer"] += 1;

}

if(hours === "7-9 hours"){

    sports["Rowing"] += 1;
    sports["Cycling"] += 1;

}
    
    if(hours === "10+ hours"){

    sports["Distance Running"] += 2;
    sports["Rowing"] += 2;
    sports["Cycling"] += 2;

}

    if(teamwork === "Team Sports"){

    sports["Basketball"] += 3;
    sports["Soccer"] += 3;
    sports["Volleyball"] += 3;
    sports["Hockey"] += 3;
    sports["Rugby"] += 3;

}
else{

    sports["Swimming"] += 3;
    sports["Boxing"] += 3;
    sports["Cycling"] += 3;
    sports["Archery"] += 3;
    sports["Rock Climbing"] += 3;

}

    // MUSCLE BONUS

if(muscle === "Legs"){

    sports["Soccer"] += 3;
    sports["Sprinting"] += 3;
    sports["Cycling"] += 3;
    sports["Distance Running"] += 2;
    sports["Volleyball"] += 2;

}

if(muscle === "Arms"){

    sports["Boxing"] += 3;
    sports["Tennis"] += 3;
    sports["Badminton"] += 3;
    sports["Baseball"] += 2;

}

if(muscle === "Core"){

    sports["Swimming"] += 3;
    sports["Rock Climbing"] += 3;
    sports["Rowing"] += 2;

}

if(muscle === "Back"){

    sports["Rowing"] += 4;
    sports["Rock Climbing"] += 3;
    sports["Swimming"] += 2;

}

if(muscle === "Shoulders"){

    sports["Volleyball"] += 3;
    sports["Boxing"] += 2;
    sports["Swimming"] += 2;

}

if(muscle === "Chest"){

    sports["Gym Workout"] += 3;
    sports["Boxing"] += 2;
    sports["Rugby"] += 2;

}

    // MOTIVATION BONUS

if(motivation === "Winning"){

    sports["Basketball"] += 2;
    sports["Soccer"] += 2;
    sports["Volleyball"] += 2;
    sports["Boxing"] += 2;

}

if(motivation === "Personal Improvement"){

    sports["Swimming"] += 2;
    sports["Cycling"] += 2;
    sports["Gym Workout"] += 2;

}

if(motivation === "Adventure"){

    sports["Rock Climbing"] += 3;
    sports["Skiing"] += 3;
    sports["Ultimate Frisbee"] += 2;

}

if(motivation === "Fitness"){

    sports["Gym Workout"] += 3;
    sports["Swimming"] += 2;
    sports["Cycling"] += 2;

}

    // STYLE BONUS

if(style === "Competitive"){

    sports["Basketball"] += 2;
    sports["Soccer"] += 2;
    sports["Boxing"] += 2;

}

if(style === "Adventurous"){

    sports["Rock Climbing"] += 3;
    sports["Skiing"] += 3;

}

if(style === "Patient"){

    sports["Archery"] += 3;
    sports["Baseball"] += 2;
    sports["Table Tennis"] += 2;

}

if(style === "Fast-Paced"){

    sports["Sprinting"] += 3;
    sports["Badminton"] += 2;
    sports["Basketball"] += 2;

}

if(style === "Disciplined"){

    sports["Swimming"] += 3;
    sports["Rowing"] += 2;
    sports["Gym Workout"] += 2;

}

   const rankedSports =
Object.entries(sports)
.sort((a,b) => b[1] - a[1]);

sport1 = rankedSports[0][0];
sport2 = rankedSports[1][0];
sport3 = rankedSports[2][0];

const maxScore = rankedSports[0][1];

const match1 = 98;

let match2 =
Math.round(
rankedSports[1][1] / maxScore * 92
);

let match3 =
Math.round(
rankedSports[2][1] / maxScore * 85
);

if(match2 >= match1){

    match2 = match1 - 3;

}

if(match3 >= match2){

    match3 = match2 - 3;

}
    
let reason =

    "Your " +
    fitness +
    " fitness level, preference for " +
    environment +
    " activities, and focus on " +
    goal +
    " indicate strong compatibility with sports that align with your athletic profile. Your " +
    style +
    " personality and motivation for " +
    motivation +
    " further support these recommendations.";
    
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

    "<p><strong>Preferred Environment:</strong> " +
environment +
"</p>" +

"<p><strong>Motivation:</strong> " +
motivation +
"</p>" +

"<p><strong>Athletic Style:</strong> " +
style +
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

    "<p><strong>Why " +
sport1 +
"?</strong> This recommendation was strongly influenced by your preference for " +
environment +
" activities, your motivation for " +
motivation +
", and your goal of " +
goal +
".</p>" +

    "<p>The additional recommendations of <strong>" +
    sport2 +
    "</strong> and <strong>" +
    sport3 +
    "</strong> provide alternative pathways that align closely with your athletic strengths and interests.</p>" +

    "<p><strong>Overall Athlete Rating:</strong> Competitive Potential Detected ✓</p>" +

    "<h3>Match Factors Considered</h3>" +

"<p>✓ Athletic Goal</p>" +
"<p>✓ Fitness Level</p>" +
"<p>✓ Sports Experience</p>" +
"<p>✓ Training Hours</p>" +
"<p>✓ Preferred Environment</p>" +
"<p>✓ Athletic Style</p>" +
"<p>✓ Motivation</p>" +
"<p>✓ Muscle Strength Profile</p>" +
"<p>✓ Team vs Individual Preference</p>" +

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
