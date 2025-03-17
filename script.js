let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");



const compChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rdmIndx = Math.floor(Math.random() * 3);
    return options[rdmIndx];
}
const showWinner = (userWin) => {
    if (userWin == true) {
        userScore++;
        userScorePara.innerText = userScore;
        user.innerText = userScore;
        console.log("user Won!!");
        msg.innerText = "You Won!!";
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("Comp Won!!!");
        msg.innerText = "You Lost!!";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log(`user choice = ${userChoice}`);
    const computChoice = compChoice();
    console.log(`Comp choice = ${computChoice}`);

    if (userChoice === computChoice) {
        console.log("Whoo!! It's Draw");
        msg.innerText = "Whoo!! It's Draw";
        msg.style.backgroundColor = "#081b31";
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // comput Choice = paper/ scissor
            userWin = computChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // comput choice = rock/ scissor
            userWin = computChoice === "scissor" ? false : true;
        } else {
            // comput Choice = rock/ paper
            userWin = computChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

