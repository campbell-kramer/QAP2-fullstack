/**
 * Calculates the number of consecutive positive mood entries,
 * starting from the most recent and going backwards.
 * A positive mood is either "Happy" or "Excited".
 *
 * @param {string[]} moodHistory - An array of mood entries, with the most recent first.
 * @returns {number} The count of consecutive positive moods.
 */
function getStreak(moodHistory) {
  const reversedMoodList = moodHistory.slice().reverse();
  const positiveMoods = ["Happy", "Excited"];
  let streak = 0;
  let i = 0;
  while (i < reversedMoodList.length && positiveMoods.includes(reversedMoodList[i])) {
    streak++;
    i++;
  }
  return streak;
}

module.exports = { getStreak };
