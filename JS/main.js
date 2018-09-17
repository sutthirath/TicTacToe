console.log("Javascript is running!");

/*---------- Requirements -----------*/
// Display an empty tic-tac-toe board when the page is initially displayed.
// A player can click on the nine cells to make a move.
// Every click will alternate between marking an X and O.
// Once occupied with an X or O, the cell cannot be played again.
// Provide a Reset Game button that will clear the contents of the board.

/*---------- Bonus -----------*/
// Display whose turn it is ("X" or "O").
// Provide win logic and display a winning message.
// Provide logic for a cat's game (tie), also displaying a message.
// Add your personal touch with unique styling.
    

/*----------------------------------------------------------------------------------------------*/

// Initialize Game!

/*------Select if one or two players------*/
function turnSelector() {
    let yourTurn = 0;
    yourTurn = Math.round(Math.random());
    if (yourTurn === 0) {
        //player1
        console.log("Player 1 goes first!");
    } else {
        //player2
        console.log("Player 2 goes first!");
    }
};

const player1 = 1;
const player2 = -1;
let currentPlayer = player1;

/*------ Hide the player buttons ------*/
function toggleBtns() {
    const btns = document.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.visibility = (btns[i].style.visibility !== "hidden") ? "hidden" : "visible"
    }
};

/*------ Displaying who goes first ------*/
function toggleUsers() {
    const users = document.getElementsByClassName("users")
    for (let i = 0; i < users.length; i++) {
        users[i].style.visibility = (users[i].style.visibility === "hidden") ? "visible" : "hidden"
    }
};


let player1btn = document.getElementById("player1btn");
//player1btn.style.visibility === "visible"
player1btn.addEventListener("click", function() {
    turnSelector();
    toggleBtns();
});

let player2btn = document.getElementById("player2btn");
player2btn.addEventListener("click", function() {
    turnSelector();
    toggleBtns();
});


/*------Game in play------*/
const gamePieces = [   
    [0,0,0],
    [0,0,0],
    [0,0,0]
];


function check(row, col) {
    //
    if (gamePieces[row][col] !== 0) {
        console.log("Spot is already taken")
        return
    }
    // check the cell
    gamePieces[row][col] = currentPlayer;

    // check if current player has won or it is draw
    // horizontal win
    const targetRow = gamePieces[row];
    for (let i = 0; i < gamePieces[row].length; i++) {
        if () 
    }

    // update current player
    if (currentPlayer === player1) {
        currentPlayer = player2;
    }  else {
        currentPlayer = player1;
    }
};

function checkDraw(row, col) {
    
};

// let playerOne = document.getElementById("player1btn");
// playerOne.addEventListener("click", turnSelector());

// let playerTwo = document.getElementById("player2btn");

// One player game

/*------Two player game------*/
// Random selector function






// class Game {
//     constructor() {
//         this.inGame = false
//     }

//     select(row, col) {
//         console.log('row, col', row, col)
//     }

//     toggle() {
//         const el = document.getElementById("reset");
//         el.style.visibility = (!this.inGame) ? "visible" : "hidden"
//         this.inGame = !this.inGame
//     }
// }







