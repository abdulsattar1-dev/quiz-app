# 🧠 Quiz App

A web development quiz. Every game picks 5 random questions about HTML, CSS, JavaScript and React.

**🔗 Live demo:** _add your Vercel link here_

## ✨ Features
- 15 questions in the question bank — 5 random ones each game
- Answers are shuffled every time
- Green for the right answer, red for a wrong one
- Only one answer per question
- Score screen at the end with a message
- **Play Again** starts a brand-new quiz

## 🧠 What I learned
- Managing several states at once (question, score, selected answer, result)
- Shuffling an array (Fisher–Yates)
- Lazy initial state: `useState(() => getNewQuiz())`
- Conditional rendering for two screens (question / result)
- Dynamic CSS classes

## 🛠️ Run it on your computer
```bash
git clone https://github.com/abdulsattarnangri7-desktoop/quiz-app.git
cd quiz-app
npm install
npm run dev
```
Then open http://localhost:5173

## 📦 Built with
React 19 · Vite · CSS

## 👤 Author
**Abdul Sattar** — WordPress & React Developer
[GitHub](https://github.com/abdulsattarnangri7-desktoop) · [Portfolio](http://abdulsattarportfolio.free.nf)
