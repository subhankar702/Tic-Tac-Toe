let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0=true;
let winingPattern = 
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>
{
    let turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) =>
{
    box.addEventListener("click",() => 
    {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else
        {
            box.innerText = "x";
            turn0= true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const disabledBoxes = () =>
{
    for (let box of boxes) {
        box.disabled = true;
        
    }
}

const enableBoxes = () =>
    {
        for (let box of boxes) {
            box.disabled = false;
            box.innerText = "";
        }
    }

const showWinner = (Winner) =>
{
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const checkWinner = () =>
{
    for(let pattern of winingPattern)
    {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 === posval2 && posval2 === posval3) { 
                showWinner(posval1);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
