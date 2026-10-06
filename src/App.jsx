import { useState } from "react";
import "./App.css";

// All questions (the app picks 5 random ones each game)
const allQuestions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink Text Making Language"],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "Python", "Java"],
    answer: "CSS",
  },
  {
    question: "Which React hook is used to add state?",
    options: ["useEffect", "useState", "useFetch", "useStyle"],
    answer: "useState",
  },
  {
    question: "Which company created React?",
    options: ["Google", "Microsoft", "Meta (Facebook)", "Apple"],
    answer: "Meta (Facebook)",
  },
  {
    question: "How do you write a one-line comment in JavaScript?",
    options: ["<!-- comment -->", "# comment", "// comment", "** comment"],
    answer: "// comment",
  },
  {
    question: "Which HTML tag is used for the biggest heading?",
    options: ["<h6>", "<head>", "<h1>", "<heading>"],
    answer: "<h1>",
  },
  {
    question: "Which CSS property changes the text color?",
    options: ["font-color", "color", "text-color", "background"],
    answer: "color",
  },
  {
    question: "Which method adds an item to the end of an array?",
    options: ["push()", "pop()", "shift()", "add()"],
    answer: "push()",
  },
  {
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which hook runs code after the component shows on the screen?",
    options: ["useState", "useEffect", "useRef", "useMemo"],
    answer: "useEffect",
  },
  {
    question: "Which keyword creates a variable that cannot be changed?",
    options: ["var", "let", "const", "fixed"],
    answer: "const",
  },
  {
    question: "Which array method makes a new list with only some items?",
    options: ["map()", "filter()", "push()", "join()"],
    answer: "filter()",
  },
  {
    question: "What is the correct file extension for a React component?",
    options: [".jsx", ".html", ".css", ".txt"],
    answer: ".jsx",
  },
  {
    question: "Which CSS value makes a flex container?",
    options: ["display: block", "display: flex", "position: flex", "flex: true"],
    answer: "display: flex",
  },
  {
    question: "Which symbol means 'not equal' in JavaScript?",
    options: ["==", "=", "!==", "<>"],
    answer: "!==",
  },
];

// Mix the items of a list in a random order
function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Make a new quiz: 5 random questions, with mixed answers
function getNewQuiz() {
  return shuffle(allQuestions)
    .slice(0, 5)
    .map((q) => ({ ...q, options: shuffle(q.options) }));
}

function App() {
  const [questions, setQuestions] = useState(() => getNewQuiz());
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const q = questions[current];

  // When the user clicks an answer
  function handleAnswer(option) {
    if (selected !== null) return; // Only one answer per question

    setSelected(option);
    if (option === q.answer) {
      setScore(score + 1);
    }
  }

  // Go to the next question, or show the result
  function handleNext() {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  }

  // Start a NEW quiz
  function restartQuiz() {
    setQuestions(getNewQuiz());
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
  }

  // Choose the color of each answer button
  function getButtonClass(option) {
    if (selected === null) return "option";
    if (option === q.answer) return "option correct";
    if (option === selected) return "option wrong";
    return "option";
  }

  // Result screen
  if (showResult) {
    return (
      <div className="app">
        <h1>Quiz Finished! 🎉</h1>
        <p className="result">
          You got {score} out of {questions.length}
        </p>
        <p className="message">
          {score === questions.length
            ? "Perfect score! 🏆"
            : score >= 3
            ? "Good job! 👍"
            : "Keep practicing! 💪"}
        </p>
        <button className="next-btn" onClick={restartQuiz}>
          Play Again
        </button>
      </div>
    );
  }

  // Question screen
  return (
    <div className="app">
      <h1>Quiz App 🧠</h1>
      <p className="counter">
        Question {current + 1} of {questions.length}
      </p>

      <h2>{q.question}</h2>

      <div className="options">
        {q.options.map((option) => (
          <button
            key={option}
            className={getButtonClass(option)}
            onClick={() => handleAnswer(option)}
            disabled={selected !== null}
          >
            {option}
          </button>
        ))}
      </div>

      {selected !== null && (
        <button className="next-btn" onClick={handleNext}>
          {current + 1 < questions.length ? "Next →" : "See Result"}
        </button>
      )}
    </div>
  );
}

export default App;