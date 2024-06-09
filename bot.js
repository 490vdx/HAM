/*
fields:
 0 1 2
 3 4 5
 6 7 8

 (bool array, indexes starting from 0)
*/

/*function RandomInt(minInc, maxInc) {
    let min = Math.round(minInc);
    let max = Math.round(maxInc) + 1;

    return Math.floor(Math.random() * (max - min)) + min;
}

function RandomChoice(arr) {
    return arr[RandomInt(0, arr.length - 1)];
}

function BestMove(fields) {
    if (
        ((fields[0] && fields[1])
        || (fields[8] && fields[5])
        || (fields[4] && fields[6])
    ) && !fields[2]) 
        return 2; // topright

    else if (
        ((fields[1] && fields[2])
        || (fields[3] && fields[6])
        || (fields[4] && fields[8])
    ) && !fields[0]) 
        return 0; // topleft
    
    else if (
        ((fields[0] && fields[2])
        || (fields[4] && fields[7])
    ) && !fields[1]) 
        return 1; // topmid

    else if (
        ((fields[3] && fields[5])
        || (fields[1] && fields[7])
        || (fields[0] && fields[8])
        || (fields[2] && fields[6])
    ) && !fields[4])
        return 4; // midcen
    
    return -1; // if nothing found
}

// Zwraca indeks wybranego pola
function GetBotMove(botFields, playerfields) 
{
    let b = BestMove(botFields); // attack instead of defending
    if (b != -1) return b;

    let p = BestMove(playerFields);
    if (p != -1) return p;

    if (!botFields[4] && !playerfields[4]) return 4;

    if (!botFields[Math.random()])
}*/ // Walić to, wracam do losowania pozycji, a nuż dobrze trafi

function GetBotMove(fields) {
    let fCount = 0;
    for (field of fields) {
        if (field !== 0) fCount ++;
    }

    if (fCount == 9) return -1;
    let r = 0;
    do {
        r = Math.floor(Math.random() * 9);
    } while (fields[r] != 0);

    return r;
}