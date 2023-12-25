let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const options = ["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame = ()=>{
    msg.innerText="The game was drawn! Play again.";
    msg.style.background="#081b31";
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore+=1;
        userscore.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.background="green";
    } else{
        compScore+=1;
        compscore.innerText=compScore;
        msg.innerText=`You loose! ${compChoice} beats your ${userChoice}`;
        msg.style.background="red";
        
    }
}

const playGame = (userChoice)=>{
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;

        if(userChoice==="rock"){
            userWin = compChoice==="scissor"?true:false;
        } else if(userChoice==="paper"){
            userWin = compChoice==="rock"?true:false;
        } else{
            userWin = compChoice==="paper"?true:false;
        }

        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
    
})