const express = require("express");
const path = require("path");
const { getStreak, generateStreakText } = require("./utils/utilities");

const app = express();
const PORT = process.env.PORT || 3000;

const moodHistory = [];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// get routes for home page
app.get("/", (req, res) => {
  const streakText = generateStreakText(moodHistory);
  res.render("index", { streakText });
});

// get route for mood entry page
app.get("/mood", (req, res) => {
  res.render("mood");
});

// get route for mood summary page
app.get("/mood-summary", (req, res) => {
  const recentMoods = moodHistory.slice(-5);
  const streakText = generateStreakText(moodHistory);
  res.render("mood-summary", {
    moods: recentMoods,
    streakText,
  });
});

// for data entered in mood entry page
app.post("/mood", (req, res) => {
  const mood = req.body.mood;
  console.log(`Current mood: ${mood}`);
  moodHistory.push(mood); // adds moods to moodHistory array
  res.redirect("/mood-summary");
});

app.listen(PORT, () => {
  console.log(`Mood Tracker running at http://localhost:${PORT}`);
});
