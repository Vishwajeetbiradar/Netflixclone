function clickAnswer(answerId, plusId) {
  var answer = document.getElementById(answerId);
  var plus = document.getElementById(plusId);

  if (answer.style.display === "none") {
    answer.style.display = "block";
    plus.style.transform = "rotateZ(135deg)";
  } else {
    answer.style.display = "none";
    plus.style.transform = "rotate(0deg)";
  }
}
