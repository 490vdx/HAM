const fieldsHTML = [
    document.querySelector("#n1"),
    document.querySelector("#n2"),
    document.querySelector("#n3"),
    document.querySelector("#n4"),
    document.querySelector("#n5"),
    document.querySelector("#n6"),
    document.querySelector("#n7"),
    document.querySelector("#n8"),
    document.querySelector("#n9")
];

const resetBtn = document.querySelector("#reset");

const cellStatus = document.querySelector("#status-content");

// 0 = none, 1 = player, 2 = bot
let fields = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];

let gameRunning = true;

function Reset() {
    fields = [0,0,0,0,0,0,0,0,0];
    UpdateFields();
    cellStatus.innerHTML = "Your turn!"

    gameRunning = true;
}

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]  
];

function UpdateFields() {
    for (field in fields) {
        if (field < 0) continue;
        switch (fields[field]){
            case 0:
                fieldsHTML[field].innerHTML = ``;
                break;
            case 1:
                fieldsHTML[field].innerHTML = `X`;
                break;
            case 2:
                fieldsHTML[field].innerHTML = `O`;
                break;
        }
    }
}

function ShowRetry() {

}

function PlayerWin() {
    cellStatus.innerHTML = "You won!";
    gameRunning = false;
}

function BotWin() {
    cellStatus.innerHTML = "You lost!";
    gameRunning = false;
}

function FieldClick(id) {
    if (!gameRunning) return;

    cellStatus.innerHTML = "Your turn!";
    if (fields[id] !== 0) {
        let ocs = cellStatus.innerHTML;
        cellStatus.innerHTML = "This field is already taken! (your turn anyway)";
        return;
    }

    fields[id] = 1;

    /*let bot = [];
    let human = [];
    for (field of fields) {
        bot.push(field == 2);
        human.push(field == 1);
    }*/
    try {
    fields[GetBotMove(fields)] = 2; // nie chce mi się bawić w delay/settimeout, to jest bot, a nie imitacja człowieka
    } catch (e) {

    }
    UpdateFields();

    for (combo of winningCombos) {
        if (winningCombos.some(
            (elem) => fields[elem[0]] == 1 
            && fields[elem[1]] == 1 
            && fields[elem[2]] == 1
        )) {
            PlayerWin();
            return;
        }
        else if (winningCombos.some(
            (elem) => fields[elem[0]] == 2 
            && fields[elem[1]] == 2
            && fields[elem[2]] == 2
        )) {
            BotWin();
            return;
        }
    }

    let fCount = 0;
    for (field of fields) {
        if (field !== 0) fCount ++;
    }

    if (fCount === 9) {
        cellStatus.innerHTML = "It's a tie!";
        gameRunning = false;
    }
}


fieldsHTML[0].addEventListener('click', function() {FieldClick(0)});
fieldsHTML[1].addEventListener('click', function() {FieldClick(1)});
fieldsHTML[2].addEventListener('click', function() {FieldClick(2)});
fieldsHTML[3].addEventListener('click', function() {FieldClick(3)});
fieldsHTML[4].addEventListener('click', function() {FieldClick(4)});
fieldsHTML[5].addEventListener('click', function() {FieldClick(5)});
fieldsHTML[6].addEventListener('click', function() {FieldClick(6)});
fieldsHTML[7].addEventListener('click', function() {FieldClick(7)});
fieldsHTML[8].addEventListener('click', function() {FieldClick(8)});