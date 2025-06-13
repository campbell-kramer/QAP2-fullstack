/**
 * Calculates the number of consecutive positive mood entries,
 * starting from the most recent and going backwards.
 * A positive mood is either "Happy" or "Excited".
 *
 * @param {string[]} moodHistory - An array of mood entries, with the most recent first.
 * @returns {number} The count of consecutive positive moods.
 */
function getStreak(moodHistory) {
  // reverses array so that the first item is the most recent
  const reversedMoodList = moodHistory.slice().reverse();
  // const array of positive moods for reference/comparison
  const positiveMoods = ["Happy", "Excited"];

  // initializing the while loop
  let streak = 0;
  let i = 0;
  while (i < reversedMoodList.length && positiveMoods.includes(reversedMoodList[i])) {
    streak++;
    i++;
  }
  return streak;
}

// generates appropriate streak text depending on whether or not the mood array is empty
function generateStreakText(moodHistory) {
  if (moodHistory.length === 0) {
    return "No moods have been recorded yet! :(";
  }
  const streak = getStreak(moodHistory);
  return `Current happy streak: ${streak}`;
}

module.exports = { getStreak, generateStreakText };
