//access of game board 
const board = document.getElementById('Board');

// access images
const img1=document.getElementById('imgbox1');
const img2=document.getElementById('imgbox2');

const message = document.getElementById('winningMessage');

let turn = "X";
let totalTurn =0;

// winning Conditions 
const winner=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [2,4,6],[0,4,8]
];

let boardArray=new Array(9).fill("E");

// check winner 
function checkWinner(){
    for(let [index0,index1,index2] of winner)
    {
        if(boardArray[index0]!="E" && boardArray[index0]===boardArray[index1] && boardArray[index1]===boardArray[index2]){
            return 1;
        }
    }
    return 0;
}

const print = (event)=>{
    const palce=event.target;
    
    if(boardArray[palce.id]==="E"){
        totalTurn++;
    if(turn==='X'){
        palce.innerHTML = "X";
        boardArray[palce.id]="X";
        img1.style.height= "290px";
        img1.style.width= "290px";
        img2.style.height= "220px";
        img2.style.width= "220px";
        if(checkWinner()){
           message.innerHTML = "Winner is Player 1";
           board.removeEventListener('click',print);
           return;
        }
        turn = "O";
    }
    else{
        palce.innerHTML = "O";
        boardArray[palce.id]="O";
        img2.style.height= "290px";
        img2.style.width= "290px";
        img1.style.height= "220px";
        img1.style.width= "220px";
        if(checkWinner()){
            message.innerHTML = "Winner is Player 2";
            board.removeEventListener('click',print);
            return;
        }
        turn = "X";
    }
    if(totalTurn==9){
        message.innerHTML = "Match is Draw !!!";
    }
  }
  else{
    alert("Section is already Filled !!!"); 
  }
}

board.addEventListener('click',print);


// restart implemeentation 
const Restart = document.getElementById('restartButton');

Restart.addEventListener('click',()=>{
    const cell = document.getElementsByClassName('cell');
    Array.from(cell).forEach((val)=>{
        val.innerHTML="";
    })
    message.innerHTML = "";
    turn = "X";
    totalTurn=0;
    boardArray=new Array(9).fill("E");
    img2.style.height= "220px";
    img2.style.width= "220px";
    img1.style.height= "220px";
    img1.style.width= "220px";
    board.addEventListener('click',print);
})