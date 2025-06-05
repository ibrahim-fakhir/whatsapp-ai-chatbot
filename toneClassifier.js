function detectTone(message) {
  const msg = message.toLowerCase();

  if (msg.includes("sad") || msg.includes("depressed") || msg.includes("not feeling")) {
    return "sad";
  } else if (msg.includes("angry") || msg.includes("hate") || msg.includes("trash")) {
    return "angry";
  } else if (msg.includes("happy") || msg.includes("great") || msg.includes("awesome")) {
    return "happy";
  } else {
    return "neutral";
  }
}

module.exports = detectTone;
