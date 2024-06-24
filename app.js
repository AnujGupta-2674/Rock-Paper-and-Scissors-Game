let userScore = 0;
let compScore = 0;

let options = ["rock", "paper", "scissors"];

let choices = document.querySelectorAll(".choice");

let msg=document.querySelector("#msg");

const generateRandomChoice = () => {
    let randomIdx = Math.floor(Math.random() * 3);
    let compChoice = options[randomIdx];
    return compChoice;
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        let userScorePara=document.querySelector("#user-score");
        userScorePara.innerText=userScore;
        msg.innerText=`You win!${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="limeGreen";
        winBodyBgChange();

    }else{
        compScore++;
        let compScorePara=document.querySelector("#comp-score");
        compScorePara.innerText=compScore;
        msg.innerText=`You lost!${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        bodyBgChange();
    }
}

function draw() {
    console.log("Draw Match");
}

const playGame = (userChoice) => {
    // console.log(userChoice);

    //Generating Computer Choice
    let compChoice = generateRandomChoice();
    // console.log("Comp Choice", compChoice);

    //Deciding Winner and Looser
    if (userChoice === compChoice) {
        draw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //Paper and Scissors for Computer
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock and scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // userChoice is equal to Scissors
            //So compChoices are rock and paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

//Getting User Choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

//After losing turning body bgColor red for a while
const bodyBgChange=()=>{
    let body=document.querySelector("body");
    body.classList.add("lost");
    setTimeout(()=>{
        body.classList.remove("lost");
    },750);
}

//After Winning changes
function winBodyBgChange(){
    let body=document.querySelector("body");
    body.classList.add("win");
    setTimeout(()=>{
        body.classList.remove("win");
    },750);
}