const adviceId = document.querySelector(".container__p > span");
const advice = document.querySelector(".container__quote");
const adviceBtn = document.querySelector(".dice");

const wait = function () {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
};
const fetchAdvice = async function () {
  try {
    adviceBtn.style.opacity = 0;
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const { slip: data } = await response.json();
    adviceId.textContent = data.id;
    advice.textContent = `"${data.advice}"`;
    await wait();
    adviceBtn.style.opacity = 1;
  } catch (err) {
    adviceId.textContent = "Error";
    advice.textContent = `${err.message} Try again!`;
  }
};
adviceBtn.addEventListener("click", fetchAdvice);
