/* =========================
   MUSCLE MAP
========================= */

function showMuscle(muscle) {

    const box =
        document.getElementById("muscle-info");

    if (muscle === "chest") {

        box.innerHTML = `
            <h3>Pectoralis Major & Chest Muscles</h3>

            <p>
                The chest muscles help move the arms toward the body
                and generate pushing force.
            </p>

            <ul>
                <li><strong>Main Muscles:</strong> Pectoralis Major, Pectoralis Minor</li>
                <li><strong>Exercises:</strong> Bench Press, Push-Ups, Chest Fly</li>
                <li><strong>Sports:</strong> Basketball, Volleyball, Swimming</li>
            </ul>
        `;
    }

    else if (muscle === "shoulders") {

        box.innerHTML = `
            <h3>Deltoids & Shoulder Muscles</h3>

            <p>
                The shoulders allow the arms to lift, rotate,
                and stabilize during movement.
            </p>

            <ul>
                <li><strong>Main Muscles:</strong> Anterior, Lateral, Posterior Deltoid</li>
                <li><strong>Exercises:</strong> Shoulder Press, Lateral Raise</li>
                <li><strong>Sports:</strong> Volleyball, Tennis, Baseball</li>
            </ul>
        `;
    }

    else if (muscle === "arms") {

        box.innerHTML = `
            <h3>Arm Muscles</h3>

            <p>
                Arm muscles control elbow movement and gripping strength.
            </p>

            <ul>
                <li><strong>Main Muscles:</strong> Biceps, Triceps, Brachialis</li>
                <li><strong>Exercises:</strong> Bicep Curl, Tricep Pushdown</li>
                <li><strong>Sports:</strong> Rock Climbing, Basketball, Baseball</li>
            </ul>
        `;
    }

    else if (muscle === "core") {

        box.innerHTML = `
            <h3>Core Muscles</h3>

            <p>
                The core stabilizes the body and transfers force
                between the upper and lower body.
            </p>

            <ul>
                <li><strong>Main Muscles:</strong> Rectus Abdominis, Obliques, Transverse Abdominis</li>
                <li><strong>Exercises:</strong> Planks, Sit-Ups, Russian Twists</li>
                <li><strong>Sports:</strong> Nearly Every Sport</li>
            </ul>
        `;
    }

    else if (muscle === "back") {

        box.innerHTML = `
            <h3>Back Muscles</h3>

            <p>
                Back muscles support posture and generate pulling power.
            </p>

            <ul>
                <li><strong>Main Muscles:</strong> Latissimus Dorsi, Trapezius, Rhomboids</li>
                <li><strong>Exercises:</strong> Pull-Ups, Rows, Deadlifts</li>
                <li><strong>Sports:</strong> Swimming, Rowing, Wrestling</li>
            </ul>
        `;
    }

    else if (muscle === "legs") {

        box.innerHTML = `
            <h3>Leg Muscles</h3>

            <p>
                Leg muscles produce speed, power, jumping,
                and running performance.
            </p>

            <ul>
                <li><strong>Main Muscles:</strong> Quadriceps, Hamstrings, Gluteus Maximus, Calves</li>
                <li><strong>Exercises:</strong> Squats, Lunges, Leg Press</li>
                <li><strong>Sports:</strong> Soccer, Basketball, Track & Field</li>
            </ul>
        `;
    }

}

/* =========================
   EXERCISE ANALYZER
========================= */

function showExercise(exercise) {

    const box =
        document.getElementById("exercise-info");

    if (exercise === "bench") {

        box.innerHTML = `
            <h3>Bench Press</h3>

            <ul>
                <li><strong>Primary Muscles:</strong> Pectoralis Major, Triceps, Front Deltoids</li>
                <li><strong>Movement Type:</strong> Push</li>
                <li><strong>Athletic Benefit:</strong> Upper-body strength and power</li>
            </ul>
        `;
    }

    else if (exercise === "squat") {

        box.innerHTML = `
            <h3>Squat</h3>

            <ul>
                <li><strong>Primary Muscles:</strong> Quadriceps, Glutes, Hamstrings</li>
                <li><strong>Movement Type:</strong> Lower Body Push</li>
                <li><strong>Athletic Benefit:</strong> Jumping, sprinting, power</li>
            </ul>
        `;
    }

    else if (exercise === "deadlift") {

        box.innerHTML = `
            <h3>Deadlift</h3>

            <ul>
                <li><strong>Primary Muscles:</strong> Hamstrings, Glutes, Back</li>
                <li><strong>Movement Type:</strong> Hip Hinge</li>
                <li><strong>Athletic Benefit:</strong> Full-body strength</li>
            </ul>
        `;
    }

    else if (exercise === "pullup") {

        box.innerHTML = `
            <h3>Pull-Up</h3>

            <ul>
                <li><strong>Primary Muscles:</strong> Lats, Biceps, Trapezius</li>
                <li><strong>Movement Type:</strong> Pull</li>
                <li><strong>Athletic Benefit:</strong> Upper-body pulling strength</li>
            </ul>
        `;
    }

    else if (exercise === "pushup") {

        box.innerHTML = `
            <h3>Push-Up</h3>

            <ul>
                <li><strong>Primary Muscles:</strong> Chest, Triceps, Shoulders</li>
                <li><strong>Movement Type:</strong> Push</li>
                <li><strong>Athletic Benefit:</strong> Muscular endurance</li>
            </ul>
        `;
    }

    else if (exercise === "shoulderpress") {

        box.innerHTML = `
            <h3>Shoulder Press</h3>

            <ul>
                <li><strong>Primary Muscles:</strong> Deltoids, Triceps</li>
                <li><strong>Movement Type:</strong> Vertical Push</li>
                <li><strong>Athletic Benefit:</strong> Shoulder stability and power</li>
            </ul>
        `;
    }

}

/* =========================
   SPORTS LAB
========================= */

function showSport(sport) {

    const box =
        document.getElementById("sport-info");

    if (sport === "basketball") {

        box.innerHTML = `
            <h3>Basketball</h3>

            <ul>
                <li>Quadriceps</li>
                <li>Calves</li>
                <li>Glutes</li>
                <li>Core</li>
                <li>Deltoids</li>
            </ul>

            <p>
                These muscles support jumping, sprinting,
                rebounding, and shooting.
            </p>
        `;
    }

    else if (sport === "soccer") {

        box.innerHTML = `
            <h3>Soccer</h3>

            <ul>
                <li>Quadriceps</li>
                <li>Hamstrings</li>
                <li>Calves</li>
                <li>Hip Flexors</li>
            </ul>

            <p>
                These muscles support running, kicking,
                acceleration, and endurance.
            </p>
        `;
    }

    else if (sport === "swimming") {

        box.innerHTML = `
            <h3>Swimming</h3>

            <ul>
                <li>Latissimus Dorsi</li>
                <li>Shoulders</li>
                <li>Core</li>
                <li>Chest</li>
            </ul>

            <p>
                Swimming requires coordination and strength
                across the entire body.
            </p>
        `;
    }

    else if (sport === "volleyball") {

        box.innerHTML = `
            <h3>Volleyball</h3>

            <ul>
                <li>Quadriceps</li>
                <li>Calves</li>
                <li>Deltoids</li>
                <li>Core</li>
            </ul>

            <p>
                Important for jumping, blocking,
                serving, and spiking.
            </p>
        `;
    }

    else if (sport === "track") {

        box.innerHTML = `
            <h3>Sprinting</h3>

            <ul>
                <li>Hamstrings</li>
                <li>Glutes</li>
                <li>Quadriceps</li>
                <li>Calves</li>
            </ul>

            <p>
                Sprinting depends on explosive power
                and rapid force production.
            </p>
        `;
    }

}

/* =========================
   BUILD YOUR ATHLETE
========================= */

function buildAthlete(goal) {

    const box =
        document.getElementById("goal-info");

    if (goal === "strength") {

        box.innerHTML = `
            <h3>Build Strength</h3>

            <ul>
                <li>Focus Muscles: Chest, Back, Legs</li>
                <li>Exercises: Squat, Bench Press, Deadlift</li>
                <li>Goal: Increase force production</li>
            </ul>
        `;
    }

    else if (goal === "speed") {

        box.innerHTML = `
            <h3>Increase Speed</h3>

            <ul>
                <li>Focus Muscles: Hamstrings, Glutes, Calves</li>
                <li>Exercises: Sprinting, Lunges, Box Jumps</li>
                <li>Goal: Improve acceleration</li>
            </ul>
        `;
    }

    else if (goal === "endurance") {

        box.innerHTML = `
            <h3>Improve Endurance</h3>

            <ul>
                <li>Focus Muscles: Entire Body</li>
                <li>Exercises: Running, Swimming, Cycling</li>
                <li>Goal: Delay fatigue</li>
            </ul>
        `;
    }

    else if (goal === "jump") {

        box.innerHTML = `
            <h3>Improve Vertical Jump</h3>

            <ul>
                <li>Focus Muscles: Quadriceps, Glutes, Calves</li>
                <li>Exercises: Squats, Jump Squats, Box Jumps</li>
                <li>Goal: Generate explosive power</li>
            </ul>
        `;
    }

}
