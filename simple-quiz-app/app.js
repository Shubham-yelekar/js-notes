const scoreSpan = document.getElementById("score");
const quesSpan = document.getElementById("quest");
const questionBox = document.getElementById("question-box");
const optionBox = document.getElementById("option-box");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");

const QUESTION_BANK = [
  {
    question: "What is the output of typeof null?",
    options: ["'null'", "'object'", "'undefined'", "'number'"],
    answer: "'object'",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["# comment", "<!-- comment -->", "// comment", "** comment **"],
    answer: "// comment",
  },
  {
    question: "What will console.log(2 + '2') print?",
    options: ["4", "22", "'4'", "undefined"],
    answer: "22",
  },
  {
    question: "Which keyword is used to declare a constant variable?",
    options: ["let", "var", "const", "final"],
    answer: "const",
  },
  {
    question: "What does isNaN('Hello') return?",
    options: ["true", "false", "'NaN'", "undefined"],
    answer: "true",
  },
  {
    question: "What is the correct way to write an array?",
    options: [
      "let arr = (1,2,3)",
      "let arr = [1,2,3]",
      "let arr = {1,2,3}",
      "let arr = <1,2,3>",
    ],
    answer: "let arr = [1,2,3]",
  },
  {
    question: "Which function converts JSON text to a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.toObject()",
      "JSON.convert()",
    ],
    answer: "JSON.parse()",
  },
  {
    question: "What will console.log(0 == false) output?",
    options: ["true", "false", "undefined", "error"],
    answer: "true",
  },
  {
    question: "How do you write an arrow function that returns 5?",
    options: [
      "() => 5",
      "() => { return 5 }",
      "Both A and B",
      "None of the above",
    ],
    answer: "Both A and B",
  },
  {
    question: "What is the default value of an uninitialized variable?",
    options: ["null", "0", "undefined", "false"],
    answer: "undefined",
  },
];
