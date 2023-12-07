window.alert("Welcome to tic tac toe")
// console.log("Welcome to tic tac toe")

let buttonSound = new Audio("./assets/smb_bump.wav");
let gameMusic = new Audio("./assets/8-bit-arcade-138828.mp3");
let turnSound = new Audio("./assets/smb_fireball.wav")
// music.play();

let turn = "X";
let gameover = false;
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}
var stepsPlayed = 0;


const checkWin = () => {

    let boxesText = document.getElementsByClassName("boxtext");

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach(e => {
        if ((boxesText[e[0]].innerText === boxesText[e[1]].innerText) && (boxesText[e[2]].innerText === boxesText[e[1]].innerText) && (boxesText[e[0]].innerText !== "")) {
            document.getElementsByClassName("info")[0].innerText = boxesText[e[0]].innerText + " is the winner";
            gameover = true;
            // document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width = "20vw";
            $("#win").css("width", "20vw");
        }
    })
}

checkDraw = () => {
    $(".info").text("Draw");
    $("#draw").css("width", "20vw");
}



let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        turnSound.play();
        if (boxText.innerText === '') {
            stepsPlayed++;
            boxText.innerText = turn;
            turn = changeTurn();

            checkWin();

            // Draw game
            if (stepsPlayed === 9 && !gameover) {
                checkDraw();
                return;
            }
            else if (!gameover && stepsPlayed < 9) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            else {
                return;
            }
        }
    })
})

// Reset function
reset.addEventListener('click', () => {
    // document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width = "0";
    $(".resultImg").css("width", "0");
    buttonSound.play()
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(e => {
        e.innerText = "";
    })

    turn = "X";
    stepsPlayed = 0;
    gameover = false;
    if (!gameover) {
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    }
})


// gameMusic.play();
let counter = 1;
music.addEventListener('click', () => {
    counter++;
    if (counter % 2 != 0) {
        gameMusic.pause();
        document.querySelector('#music').innerText = "🔇";
    }
    else {
        gameMusic.play();
        document.querySelector('#music').innerText = "🔊";
    }
})


