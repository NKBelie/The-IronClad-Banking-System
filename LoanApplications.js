function processLoans(scores) {

    // filter()
    let eligible = scores.filter(score => score > 700);

    // map()
    let adjustedScores = scores.map(score => score + 20);

    // reduce()
    let totalScores = scores.reduce((sum, score) => sum + score, 0);

    // some()
    let hasPerfectScore = scores.some(score => score === 900);

    // every()
    let allAboveMinimum = scores.every(score => score >= 400);

    // find()
    let severeRisk = scores.find(score => score < 500);

    // findIndex()
    let severeRiskIndex = scores.findIndex(score => score < 500);

    console.log("Eligible Scores:", eligible);
    console.log("Adjusted Scores:", adjustedScores);
    console.log("Total Scores:", totalScores);
    console.log("Has Perfect Score:", hasPerfectScore);
    console.log("All Above Minimum:", allAboveMinimum);
    console.log("First Severe Risk Score:", severeRisk);
    console.log("Severe Risk Index:", severeRiskIndex);
}


// Test
processLoans([650, 800, 500, 720, 410, 900]);