let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let btnclick = 0;

let turnO = true; //playerX, playerO
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turnO === true) { //playerO
            box.innerText = 'O';
            box.style.color = "green"
            btnclick++;
            turnO = false;
        }
        else { //plalyerX
            box.innerText = 'X';
            box.style.color = "red"
            btnclick++;
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText; //0  0
        let pos2Val = boxes[pattern[1]].innerText; //3  0
        let pos3Val = boxes[pattern[2]].innerText; //6  0

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
        if (btnclick == 9 && pos1Val !== pos2Val && pos2Val !== pos3Val) {
            alert("Match is draw")
        }
    }
}

let showWinner = winner => {
    msg.innerText = `Congratulations!!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
let disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
let enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        msgContainer.classList.add("hide");

    }
}
let resetGame = () => {
    turnO = true;
    enableBoxes();
}
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame)