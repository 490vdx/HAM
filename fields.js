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

const cellStatus = document.querySelector("#status");

// 0 = none, 1 = player, 2 = bot
const fields = [
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

function UpdateFields() {
    for (field in fields) {
        switch (fields[field]){
            case 0:
                fieldsHTML[field].innerHTML = `<img class="field-img" src=""></img>`;
                break;
            case 1:
                fieldsHTML[field].innerHTML = `<img class="field-img" src="./Assets/circle.svg"></img>`;
                break;
            case 2:
                fieldsHTML[field].innerHTML = `<img class="field-img" src="./Assets/cross.svg"></img>`;
                break;
        }
    }
}

function FieldClick(id) {
    if (fields[id] !== 0) {
        let ocs = cellStatus.innerHTML;
        cellStatus.innerHTML = "Ty debilu";
        setTimeout(() => {cellStatus.innerHTML = ocs; }, 2000);
        return;
    }

    fields[id] = 1;

    let bot = [];
    let human = [];
    for (field of fields) {
        bot.push(field == 2);
        human.push(field == 1);
    }

    fields[GetBotMove(bot, human)] = 2; // nie chce mi się bawić w delay/settimeout, to jest bot, a nie imitacja człowieka

    UpdateFields();
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