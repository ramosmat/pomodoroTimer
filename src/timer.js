let timer;
let remainingTime = 25 * 60; //Tempo inicial
const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const bell1 = new Audio("/src/Bell-1.wav");
const bell2 = new Audio("/src/Bell-2.wav");

//Função para dar start no timer
function startTimer() {
  startButton.disabled = true;

  timer = setInterval(() => {
    remainingTime--;
    updateTimerDisplay();

    if (remainingTime <= 0) {
      clearInterval(timer);
      startButton.disabled = false;
      bell2.play();
    }
  }, 1000);

  bell1.play();
}

//Função para dar reset no timer
function resetTimer(time) {
  clearInterval(timer);
  remainingTime = time;
  updateTimerDisplay();
  startButton.disabled = false;
}

//Função update timerDisplay
function updateTimerDisplay() {
  const minutes = Math.floor(remainingTime / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (remainingTime % 60).toString().padStart(2, "0");
  timerDisplay.innerText = `${minutes}:${seconds}`;
}

startButton.addEventListener("click", startTimer);

const pomodoroButton = document.querySelector(".buttons:nth-child(1)");
const shortBreakButton = document.querySelector(".buttons:nth-child(2)");
const longBreakButton = document.querySelector(".buttons:nth-child(3)");

//Chamar a função utilizando uma arrow function é util quando precisamos passar um valor para um parâmetro
pomodoroButton.addEventListener("click", () => {
  resetTimer(25 * 60); //setando 25 minutos para o parâmetro 'time' da função
});

shortBreakButton.addEventListener("click", () => {
  resetTimer(5 * 60);
});

longBreakButton.addEventListener("click", () => {
  resetTimer(15 * 60);
});
