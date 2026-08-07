/*
🚀 Project: Army Candidate Selection System

🎯 Goal

You are creating software for the Army Recruitment Office.

There are multiple candidates.

Each candidate has:
- name
- age
- runningTime (minutes)
- medicalFit (true/false)

Create an array of objects containing at least 5 candidates.

Example:

{
    name: "Ashish",
    age: 20,
    runningTime: 14,
    medicalFit: true
}

-----------------------------------------------------

Selection Rules

A candidate is selected only if:

✔ age is between 18 and 23 (inclusive)
✔ runningTime is 15 minutes or less
✔ medicalFit is true

-----------------------------------------------------

Using ONE for loop:

Go through every candidate.

Print something like:

-------------------------
Candidate: Ashish
Status: Selected
-------------------------

OR

-------------------------
Candidate: Rahul
Status: Rejected
-------------------------

-----------------------------------------------------

🏆 BONUS (Don't skip this)

At the end print:

Total Candidates:
Selected Candidates:
Rejected Candidates:

-----------------------------------------------------

🏅 SUPER BONUS

After the loop finishes, print ONLY the names of the selected candidates.

Example:

Selected Candidates

Komal
Ashish


-----------------------------------------------------

Rules
❌ Don't Google.
❌ Don't ask me for syntax.
✅ Think.
If you get stuck for 20 minutes, then ask me for ONE hint only.
*/

const candidate = [
    {
        name: "Ashish",
        age: 20,
        runningTime: 14,
        medicalFit: true
    },
    {
        name: "komu",
        age: 21,
        runningTime: 10,
        medicalFit: true
    },
        {
        name: "spiderMan",
        age: 21,
        runningTime: 10,
        medicalFit: true
    },
        {
        name: "IronMan",
        age: 30,
        runningTime: 10,
        medicalFit: true
    },
        {
        name: "Captain America",
        age: 21,
        runningTime: 10,
        medicalFit: true
    }
]

for (let i = 0; i < candidate.length; i++) {
    const c = candidate[i];
    if (c.age >= 18 && c.age <= 23 && c.runningTime <= 15 && c.medicalFit === true) {
        console.log(`-------------------------`);
        console.log(`Candidate: ${c.name}`);
        console.log(`Status: Selected`);
        console.log(`-------------------------`);
    } else {
        console.log(`-------------------------`);
        console.log(`Candidate: ${c.name}`);
        console.log(`Status: Rejected`);
        console.log(`-------------------------`);
    }

    console.log(`Total Candidates: ${candidate.length}`);
    console.log(`Selected candidates: ${candidate.length}`);
}



