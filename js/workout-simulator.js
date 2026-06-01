/* ===================================
   MUSCLE MAP
=================================== */

function showMuscle(muscle) {

    const info =
        document.getElementById("muscle-info");

    switch (muscle) {

        case "chest":

            info.innerHTML = `
                <img src="../images/chest.jpg" alt="Chest">
                <h3>Chest (Pectoralis Major)</h3>
                <p>
                    Responsible for pushing movements and bringing
                    the arms toward the body.
                </p>
                <p>
                    Common Exercises: Bench Press, Push-Up
                </p>
            `;
            break;

        case "shoulders":

            info.innerHTML = `
                <img src="../images/shoulders.jpg" alt="Shoulders">
                <h3>Shoulders (Deltoids)</h3>
                <p>
                    Lift, rotate, and stabilize the arms.
                </p>
                <p>
                    Common Exercises: Shoulder Press, Lateral Raise
                </p>
            `;
            break;

        case "arms":

            info.innerHTML = `
                <img src="../images/arms.jpg" alt="Arms">
                <h3>Arms</h3>
                <p>
                    Biceps flex the elbow while triceps extend it.
                </p>
                <p>
                    Common Exercises: Curls, Dips
                </p>
            `;
            break;

        case "core":

            info.innerHTML = `
                <img src="../images/core.jpg" alt="Core">
                <h3>Core</h3>
                <p>
                    Stabilizes the torso and transfers force
                    between the upper and lower body.
                </p>
                <p>
                    Common Exercises: Plank, Crunches
                </p>
            `;
            break;

        case "back":

            info.innerHTML = `
                <img src="../images/back.jpg" alt="Back">
                <h3>Back</h3>
                <p>
                    Supports posture and controls pulling motions.
                </p>
                <p>
                    Common Exercises: Pull-Ups, Rows
                </p>
            `;
            break;

        case "legs":

            info.innerHTML = `
                <img src="../images/legs.jpg" alt="Legs">
                <h3>Legs</h3>
                <p>
                    Generate power for running, jumping,
                    and athletic performance.
                </p>
                <p>
                    Common Exercises: Squats, Lunges
                </p>
            `;
            break;

    }

}

/* ===================================
   EXERCISE ANALYZER
=================================== */

function showExercise(exercise) {

    const info =
        document.getElementById("exercise-info");

    switch (exercise) {

        case "bench":

            info.innerHTML = `
                <img src="../images/bench-press.jpg" alt="Bench Press">
                <h3>Bench Press</h3>
                <p>
                    Primary Muscles:
                    Chest, Triceps, Front Deltoids
                </p>
            `;
            break;

        case "squat":

            info.innerHTML = `
                <img src="../images/squat.jpg" alt="Squat">
                <h3>Squat</h3>
                <p>
                    Primary Muscles:
                    Quadriceps, Glutes, Hamstrings
                </p>
            `;
            break;

        case "deadlift":

            info.innerHTML = `
                <img src="../images/deadlift.jpg" alt="Deadlift">
                <h3>Deadlift</h3>
                <p>
                    Primary Muscles:
                    Hamstrings, Glutes, Back
                </p>
            `;
            break;

        case "pullup":

            info.innerHTML = `
                <img src="../images/pull-up.jpg" alt="Pull-Up">
                <h3>Pull-Up</h3>
                <p>
                    Primary Muscles:
                    Latissimus Dorsi, Biceps
                </p>
            `;
            break;

        case "pushup":

            info.innerHTML = `
                <img src="../images/push-up.jpg" alt="Push-Up">
                <h3>Push-Up</h3>
                <p>
                    Primary Muscles:
                    Chest, Triceps, Core
                </p>
            `;
            break;

        case "shoulderpress":

            info.innerHTML = `
                <img src="../images/shoulder-press.jpg" alt="Shoulder Press">
                <h3>Shoulder Press</h3>
                <p>
                    Primary Muscles:
                    Deltoids and Triceps
                </p>
            `;
            break;

    }

}

/* ===================================
   SPORTS LAB
=================================== */

function showSport(sport) {

    const info =
        document.getElementById("sport-info");

    switch (sport) {

        case "basketball":

            info.innerHTML = `
                <img src="../images/basketball.jpg" alt="Basketball">
                <h3>Basketball</h3>
                <p>
                    Relies heavily on legs, core,
                    shoulders, and arms for jumping,
                    shooting, and sprinting.
                </p>
            `;
            break;

        case "soccer":

            info.innerHTML = `
                <img src="../images/soccer.jpg" alt="Soccer">
                <h3>Soccer</h3>
                <p>
                    Uses quadriceps, hamstrings,
                    calves, and core muscles for
                    kicking and running.
                </p>
            `;
            break;

        case "swimming":

            info.innerHTML = `
                <img src="../images/swimming.jpg" alt="Swimming">
                <h3>Swimming</h3>
                <p>
                    A full-body sport requiring
                    strong shoulders, back, core,
                    and legs.
                </p>
            `;
            break;

        case "volleyball":

            info.innerHTML = `
                <img src="../images/volleyball.jpg" alt="Volleyball">
                <h3>Volleyball</h3>
                <p>
                    Requires explosive leg power,
                    strong shoulders, and quick
                    reaction speed.
                </p>
            `;
            break;

        case "track":

            info.innerHTML = `
                <img src="../images/sprinting.jpg" alt="Sprinting">
                <h3>Sprinting</h3>
                <p>
                    Depends on powerful glutes,
                    hamstrings, quadriceps, and calves.
                </p>
            `;
            break;

    }

}

/* ===================================
   BUILD YOUR ATHLETE
=================================== */

function buildAthlete(goal) {

    const info =
        document.getElementById("goal-info");

    switch (goal) {

        case "strength":

            info.innerHTML = `
                <h3>Strength Athlete</h3>
                <p>
                    Focus on Squats, Bench Press,
                    Deadlifts, and progressive overload.
                </p>
            `;
            break;

        case "speed":

            info.innerHTML = `
                <h3>Speed Athlete</h3>
                <p>
                    Focus on sprint training,
                    plyometrics, and explosive exercises.
                </p>
            `;
            break;

        case "endurance":

            info.innerHTML = `
                <h3>Endurance Athlete</h3>
                <p>
                    Focus on aerobic conditioning,
                    long-distance training, and recovery.
                </p>
            `;
            break;

        case "jump":

            info.innerHTML = `
                <h3>Vertical Jump Athlete</h3>
                <p>
                    Focus on squats, lunges,
                    box jumps, and plyometric drills.
                </p>
            `;
            break;

    }

}
