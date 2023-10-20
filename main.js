// const questions = [
//   {
//     question: "1. HTML merupkan singkatan dari...",
//     answers: [
//       { text: "A. Hyper Link Markup Leaguage", correct: false },
//       { text: "B. Hyper Team Markup Laguage", correct: false },
//       { text: "C. Hyper Tool Markup Laguage", correct: false },
//       { text: "D. Hyper Test Markup Laguage", correct: true },
//     ],
//   },
//   {
//     question: "2. HTML dibuat oleh Tim Berners-Lee, seorang ahli...",
//     answers: [
//       { text: "A. Fisika", correct: True },
//       { text: "B. Budaya", correct: false },
//       { text: "C. IT", correct: false },
//       { text: "D. Networking", correct: false },
//     ],
//   },
//   {
//     question: "3.Berikut ini yang menjadi standarisasi Web adalah...",
//     answers: [
//       { text: "A. Https", correct: false },
//       { text: "B. W3C (Word Wide Web Consortium)", correct: true },
//       { text: "C. Linux", correct: false },
//       { text: "D. Google", correct: false },
//     ],
//   },
// ];
const questions = [
  {
    question: "Question 1, Apa Kepanjangan HTML",
    answers: [
      { text: "Answer 1 ,Hyper Link Markup Leaguage", correct: false },
      { text: "Answer 2 ,Hyper Text Markup Laguage", correct: true },
      { text: "Answer 3 ,Hyper Tool Markup Laguage", correct: false },
      { text: "Answer 4 ,Hyper Test Markup Laguage", correct: false },
    ],
  },
  {
    question: "Question 1, HTML dibuat oleh Tim Berners-Lee, seorang ahli...",
    answers: [
      { text: "Answer 1 ,Matematika", correct: false },
      { text: "Answer 2 ,Fisika", correct: true },
      { text: "Answer 3 ,Bom", correct: false },
      { text: "Answer 4 ,Networking", correct: false },
    ],
  },
  {
    question: "Question 1, Berikut ini yang menjadi standarisasi Web adalah...",
    answers: [
      { text: "Answer 1 ,Https", correct: false },
      { text: "Answer 2 ,W3C", correct: true },
      { text: "Answer 3 ,Linux", correct: false },
      { text: "Answer 4 ,Google", correct: false },
    ],
  },
];

let questionIndex = 0;
let score = 0;

function loadQuestion() {
  const question = questions[questionIndex];
  const answers = question.answers;

  document.querySelector(".question").textContent = question.question;

  const answerList = document.querySelector(".answers");
  answerList.innerHTML = "";

  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    const answerButton = document.createElement("button");
    answerButton.classList.add("btn");
    answerButton.textContent = answer.text;
    answerButton.addEventListener("click", () => checkAnswer(answer));
    answerList.appendChild(answerButton);
  }
}

function checkAnswer(answer) {
  if (answer.correct) {
    score++;
  }

  questionIndex++;

  if (questionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function nextQuestion() {
  questionIndex++;

  if (questionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.querySelector(".question").textContent = "Your final score is:";
  document.querySelector(".answers").innerHTML = "";
  document.querySelector(".result").textContent =
    score + " out of " + questions.length;
}

loadQuestion();
