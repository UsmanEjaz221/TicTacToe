let boxes = document.querySelectorAll(".btn");
let winningPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7],
                      [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let turnX = true;
let newGame = document.querySelector("#newGame");
let resetGamebutton = document.querySelector("#resetGame");
let winMsg = document.querySelector(".winnerMsg");
let msg = document.querySelector("#msg");
let totalTurns = 0;

boxes.forEach((box) => // accessing each box from the array of boxes
{
    box.addEventListener("click", () =>     // Event Listener on each box
    {
        console.log("clicked");

        if (turnX)
        {
            box.innerText = "X";
            box.style.color = "#52141c";
            turnX = false;
        }
        else
        {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;          // so that the mark is not overridden

        // check win and draw
        totalTurns ++; 
        checkDraw(totalTurns);
        checkWin(); 
        console.log(totalTurns)      ;
    });
});

const checkDraw = (tTurns) =>
{
    if (tTurns >= 9)
    {
        msg.innerText = `Oops\nIt's is draw !`;
        winMsg.classList.remove("hide");
    }
}

const resetGame = () =>
{
    totalTurns = 0;
    turnX = true;
    enableAll();
    winMsg.classList.add("hide");
}

const disableAll = () =>
{
    for (let box of boxes)
    {
        box.disabled = true;
    }
}

const enableAll = () =>
    {
        for (let box of boxes)
        {
            box.disabled = false;
            box.innerText = "";
        }
    }

const showWinner = (winner) =>
{
    msg.innerText = `Congratulations\n The winner is ${winner}`;
    winMsg.classList.remove("hide");
    disableAll();
}

const checkWin = () =>
{
    for (let pat of winningPattern)
    {
        let val1 = boxes[pat[0]].innerText; // accessed the value at the respective index
        let val2 = boxes[pat[1]].innerText;
        let val3 = boxes[pat[2]].innerText;
        
        if (val1 != "" && val2 != "" && val3 != "")
        {
            if (val1 == val2 && val2 == val3)
            {
                console.log("Winner !!!", val1);
                showWinner(val1);
            }
                
        }
    }

}

newGame.addEventListener("click", resetGame);       
resetGamebutton.addEventListener("click", resetGame);