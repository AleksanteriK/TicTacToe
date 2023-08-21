/*These are the html div ID:s of the gameboard's buttons and they are
used for pointing the selected position where AI puts 'O'*/
var board=['ff', 'fs', 'ft', 'sf', 'ss', 'st', 'tf', 'ts', 'tt'];
const boardsize=9;
let oppchoice_num;
let oppchoice_id="";
let playerchoice;

function playerselect(pos) {
    //let x_amount=0;
    //let o_amount=0;
    var buttoncontent=document.getElementById(pos).innerText;
    
    /*Check if the button that is pressed has already either
    X or O in it.*/

    if (buttoncontent!='X' && buttoncontent!='O') {
        document.getElementById(pos).innerHTML="X";
        /*The script for "AI" choice: */
        oppchoice_num=Math.floor(Math.random() * boardsize);
        oppchoice_id=board[oppchoice_num];
        document.getElementById(oppchoice_id).innerHTML="O";
        //o_amount++;
    }
    
    /*If has, then it stays the same*/
    else {
        document.getElementById(pos).innerHTML=buttoncontent;
        return;
    }

}

function clearBoard() {
    for (let i=0; i<boardsize; i++) {
        document.getElementById(board[i]).innerHTML="";
    }
}

/*The script for "AI" choice:
function aiselect() {
    let o_amount=0;
    oppchoicenum=Math.floor(Math.random() * boardsize);
    oppchoicestring=board[oppchoicenum];
    document.getElementById(oppchoicestring).innerHTML="O";
    o_amount++;
}*/

/*while (i<9) {
    oppchoice=Math.floor(Math.random() * 9);
}*/

//for (let i=0; i<9; i++) {