const express = require("express");
const path = require("path");
const { getStreak } = require("./utils/utilities");

const app = express();
const PORT = process.env.PORT || 3000;

const moodHistory = [];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//Some routes required for full functionality are missing here. Only get routes should be required
app.get("/", (req, res) => {
  let streakText = "";
  if (moodHistory.length > 0) {
    const streak = getStreak(moodHistory);
    streakText = `Current happy streak: ${streak}`;
  } else {
    streakText = "No moods have been recorded yet! :(";
  }
  res.render("index", { streakText: streakText });
});

app.get("/mood", (req, res) => {
  res.render("mood");
});

app.get("/mood-summary", (req, res) => {
  const recentMoods = moodHistory.slice(-5);
  let streakText = "";
  if (moodHistory.length > 0) {
    const streak = getStreak(moodHistory);
    streakText = `Current happy streak: ${streak}`;
  } else {
    streakText = "No moods have been recorded yet! :(";
  }
  res.render("mood-summary", {
    moods: recentMoods,
    streakText: streakText,
  });
});

// Mood Entry Submission (POST)
app.post("/mood", (req, res) => {
  const mood = req.body.mood;
  console.log(`Current mood: ${mood}`);
  moodHistory.push(mood);
  res.redirect("/mood-summary");
});

app.listen(PORT, () => {
  console.log(`Mood Tracker running at http://localhost:${PORT}`);
});
