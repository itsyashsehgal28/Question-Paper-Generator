const { questions } = require("./data.json");

const maxMarks = 100;

// Configurations and Input Processing
function initialize() {
  let [total_marks, percent1, level1, percent2, level2, percent3, level3] =
    process.argv.slice(2);
  percent1 = parseInt(percent1, 10);
  percent2 = parseInt(percent2, 10);
  percent3 = parseInt(percent3, 10);

  if (total_marks > maxMarks || total_marks <= 10) {
    console.error("Max marks should be greater than 10 and less than 100");
    process.exit(1);
  }

  if (percent1 + percent2 + percent3 !== 100) {
    console.error("Total question percentage should be 100");
    process.exit(1);
  }

  return { total_marks, percent1, level1, percent2, level2, percent3, level3 };
}

// Calculate marks based on percentage
function calcMarks(totalMarks, percentage) {
  return Math.floor((totalMarks * percentage) / 100);
}

// Select questions for a specific level
function selectQuestionsByLevel(level, marksForThisLevel) {
  if (!Array.isArray(questions)) {
    console.error("Questions dataset is not available or is invalid.");
    process.exit(1);
  }

  let thisLevelQuestions = questions.filter((x) => x.difficulty === level);
  let tempMarks = 0;
  let idArray = new Set();

  while (tempMarks !== marksForThisLevel) {
    if (
      (level === "Medium" && marksForThisLevel - tempMarks < 3) ||
      (level === "Hard" && marksForThisLevel - tempMarks < 5)
    ) {
      break;
    }

    const availableQuestions = thisLevelQuestions.filter(
      (q) => !idArray.has(q.id)
    );
    if (availableQuestions.length === 0) {
      console.error("Not enough questions available for this level.");
      break;
    }

    const randomIdx = Math.floor(Math.random() * availableQuestions.length);
    const question = availableQuestions[randomIdx];
    if (tempMarks + question.marks <= marksForThisLevel) {
      idArray.add(question.id);
      finalPaper.push(question);
      tempMarks += question.marks;
    }
  }

  return tempMarks;
}

// Main Function
let finalPaper = [];
function generatePaper() {
  const { total_marks, percent1, level1, percent2, level2, percent3, level3 } =
    initialize();

  let totalTillNow = 0;

  let marksForThisLevel = calcMarks(total_marks, percent3);
  totalTillNow += selectQuestionsByLevel(level3, marksForThisLevel);

  marksForThisLevel = calcMarks(total_marks, percent2);
  totalTillNow += selectQuestionsByLevel(level2, marksForThisLevel);

  marksForThisLevel = calcMarks(total_marks, percent1);
  let extraMarks = total_marks - totalTillNow - marksForThisLevel;
  marksForThisLevel += extraMarks;

  totalTillNow += selectQuestionsByLevel(level1, marksForThisLevel);

  return { totalTillNow };
}

total = generatePaper();
console.log(finalPaper);
console.log(total);
