/*These are the html div ID:s of the gameboard's buttons and they are
used for pointing the selected position where AI puts 'O'*/
var board=['ff', 'fs', 'ft', 'sf', 'ss', 'st', 'tf', 'ts', 'tt'];
const boardsize=9;
let oppchoice_num;
let oppchoice_id="";
let playerchoice;

function main(pos) {
    var buttoncontent=document.getElementById(pos).innerText;
    
    /*Check if the button that is pressed has already either
    X or O in it.*/
    if (buttoncontent!='X' && buttoncontent!='O') {
        document.getElementById(pos).innerHTML="X";
        aiselect();
    }
    
    /*If has, then it stays the same*/
    else {
        document.getElementById(pos).innerHTML=buttoncontent;
        return;
    }

}

/*The script for "AI" choice: */
function aiselect() {
    var oppchoicenum = Math.floor(Math.random() * boardsize);
    var oppchoicestring = board[oppchoicenum];
    var buttoncontent = document.getElementById(oppchoicestring).innerText;
    var allspotsfilled = true;
    
    for (let i=0; i<boardsize; i++) {
        /*condition to check if there are available spots*/
        if (document.getElementById(board[i]).innerText!=='X' &&
            document.getElementById(board[i]).innerText!=='O') {
            allspotsfilled=false;
            break;
            }
        }

        if (allspotsfilled) {
            return;
        }
    
        while (buttoncontent=='X' || buttoncontent=='O') {
            oppchoicenum = Math.floor(Math.random() * boardsize);
            oppchoicestring = board[oppchoicenum];
            buttoncontent = document.getElementById(oppchoicestring).innerText;
        }

    document.getElementById(oppchoicestring).innerHTML = 'O';

}

function AIbrain() {
    /*Arrays for storing the X and O:s in the
    first, second and third row in their or-
    der from left to right*/
    var frow=[''];
    var srow=[''];
    var trow=[''];

    /*Arrays for storing the X and O:s in the
    first, second and third column in their or-
    der from left to right*/
    var fcol=[''];
    var scol=[''];
    var tcol=[''];

    /*Variable to hold info of how many filled spots in
    the rows and columns*/
    var frow_filled_spots=0;
    var srow_filled_spots=0;
    var trow_filled_spots=0;
    var fcol_filled_spots=0;
    var scol_filled_spots=0;
    var tcol_filled_spots=0;

    /*Variable for storing the board arrays (gameboard)
    element*/
    var pos;

    /*Looping the first row*/
    for (let i=0; i<boardsize/3; i++) {
        pos=board[i];
        frow[i]=document.getElementById(pos).innerText;

        if (frow[i]=='X' || frow[i]=='O') {
            frow_filled_spots++;
        }
    }

    /*Looping the second row*/
    for (let i=3; i<boardsize-3; i++) {
        pos=board[i];
        srow[i-3]=document.getElementById(pos).innerText;

        if (srow[i]=='X' || srow[i]=='O') {
            srow_filled_spots++;
        }
    }

    /*Looping the third row*/
    for (let i=6; i<boardsize; i++) {
        pos=board[i];
        trow[i-6]=document.getElementById(pos).innerText;

        if (trow[i]=='X' || trow[i]=='O') {
            trow_filled_spots++;
        }
    }

/////////////////////////////////////////////////////////

    let beginofarray=0;
    /*Looping the first column*/
    for (let i=0; i<boardsize-2; i+=3) {
        pos=board[i];
        fcol[beginofarray]=document.getElementById(pos).innerText;
        beginofarray++;

        if (fcol[i]=='X' || fcol[i]=='O') {
            fcol_filled_spots++;
        }
    }

    beginofarray=0;
    /*Looping the second column*/
    for (let i=1; i<boardsize-1; i+=3) {
        pos=board[i];
        scol[beginofarray]=document.getElementById(pos).innerText;
        beginofarray++;

        if (scol[i]=='X' || scol[i]=='O') {
            scol_filled_spots++;
        }
    }

    beginofarray=0;
    /*Looping the third column*/
    for (let i=2; i<boardsize; i+=3) {
        pos=board[i];
        tcol[beginofarray]=document.getElementById(pos).innerText;
        beginofarray++;

        if (tcol[i]=='X' || tcol[i]=='O') {
            tcol_filled_spots++;
        }
    }

    /*The logic for this AI is to choose first those places
    where there are 2 X's next to each other in a row or a col
    if there are 2 O's for example, then it chooses to put there
    and then if there are 2 X's, but if there are 1 X and 1 O, then
    random. And if not, then random select*/

    

    /*for (i=0; i<boarsize/3; i++) {

    }*/

    /*Eli sillon kun löytyy joku paikka, johon laittaa O
    kun on rivissä tai pystyrivissä 2 merkkiä, palautetaan
    sen paikan indexi mainiin, muuten 0.*/

    /*Tee myös vielä for loopit jokasen perään, jossa löydetään
    indexiarvo sille paikalle, johon olisi kannattavaa laittaa O
    eli esim jos on ekalla rivillä X,X,null, niin silloin palautetaan
    arvo 3*/

    /*Ja sit pitää tehä myös tarkastelu vinoriveille*/

    console.log(frow); //debug
    console.log(frow_filled_spots); //debug

    console.log(srow); //debug
    console.log(srow_filled_spots); //debug

    console.log(trow); //debug
    console.log(trow_filled_spots); //debug

    console.log(fcol); //debug
    console.log(fcol_filled_spots); //debug

    console.log(scol); //debug
    console.log(scol_filled_spots); //debug

    console.log(tcol); //debug
    console.log(tcol_filled_spots); //debug

}

function clearBoard() {
    for (let i=0; i<boardsize; i++) {
        document.getElementById(board[i]).innerHTML="";
    }
}