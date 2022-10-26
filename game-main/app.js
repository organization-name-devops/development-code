'use strict';



document.querySelector('.q'); 
document.querySelector('.guess');
document.querySelector('.startgame');
document.querySelector('.score');
document.querySelector('.highscore');

let SecertNo = Math.floor(Math.random()*10);
        
//document.querySelector('.q').textContent = SecertNo;  hide number
   
document.querySelector('.guess'); 

// document.querySelector('.startgame').textContent = 'welcome';

// document.querySelector('.score').textContent = 10;

// document.querySelector('.highscore').textContent = 100;
let score = 5;
let highscore=0;

document.querySelector('.tak').addEventListener('click',function(){
    let d =Number(document.querySelector('.guess').value);

    if(!d)
    {
        document.querySelector('.startgame').textContent = 'Enter a No....!!! ';
    }
    else if( d === SecertNo)
    {
                
        document.querySelector('.q').textContent = SecertNo; 
        document.querySelector('.startgame').textContent = 'Awesome....!!! ';
        document.querySelector('.headd').textContent = 'Bingo...!!!! You Guessed it Right';
        //  document.querySelector('body').style.backgroundImage = "URL(bg1.jpeg)";
         document.querySelector('body').style.color= 'white';
         
         document.querySelector('body').style.backgroundImage = "URL(cel.gif)";

         if(score > highscore)
         {
             highscore = score;
             document.querySelector('.highscore').textContent = highscore;
         }

    }
    else if( d > SecertNo)
    {
        if(score> 1)
        {
        document.querySelector('.startgame').textContent = 'Guess is high!!! ';
        score = score - 1;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.startgame').textContent = 'LOST.....!!! ';
        
        document.querySelector('.score').textContent = 0;
            
        }
    }
    else if( d < SecertNo)
    {
        if(score > 1)
        {
        document.querySelector('.startgame').textContent = 'Guess is low!!! ';
        score = score - 1;
        document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.startgame').textContent = 'LOST.....!!! ';
             document.querySelector('.score').textContent = 0;

              
        }
    }
})
const resetGame =  function(){

    document.querySelector('body').style.backgroundImage = "URL(bg.jpeg)";
    score = 5;
    SecertNo = SecertNo = Math.floor(Math.random()*10);
    document.querySelector('.q').textContent = '?'; 
    document.querySelector('.headd').textContent = 'Guess My Number';
    document.querySelector('.startgame').textContent = 'Start Guessing!!!';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    
}

document.querySelector('.again').addEventListener('click', resetGame);