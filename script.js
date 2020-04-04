let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'rock.png';

imgArray[1] = new Image();
imgArray[1].src = 'paper.png';

imgArray[2] = new Image();
imgArray[2].src = 'scissors.png';

imgArray[3] = new Image();
imgArray[3].src = 'spock.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'lizard.jpg';

function computerChoice(){
  let temp = Math.floor((Math.random()*5)+1);
  return temp;
}

function displayChoices(userChoice,computerChoice){
  $('#playerChoice').attr('src',((imgArray[userChoice - 1]).src));

  
  $('#computerChoice').attr('src',((imgArray[computerChoice - 1]).src));
}

function checkResult(userChoice){
	let compChoice = computerChoice();
	
	//Win
  displayChoices(userChoice, compChoice);
	if(  (userChoice == 1 && ((compChoice == 3) || (compChoice == 5 )))                      
    || (userChoice == 2 && ((compChoice == 1) || (compChoice == 4 ))) 
    || (userChoice == 3 && ((compChoice == 2) || (compChoice == 5 )))  
    || (userChoice == 4 && ((compChoice == 1) || (compChoice == 3 ))) 
    || (userChoice == 5 && ((compChoice == 2) || (compChoice == 4 )))
    ){
    $(".result").css("color","green");
    $(".result").text("You Win!");

	}
	//Lose
	else if((userChoice == 1 && ((compChoice == 2) || (compChoice == 4 )))                      
    || (userChoice == 2 && ((compChoice == 3) || (compChoice == 5 )) )
    || (userChoice == 3 && ((compChoice == 1) || (compChoice == 4 ))  )
    || (userChoice == 4 && ((compChoice == 2) || (compChoice == 5 )) )
    || (userChoice == 5 && ((compChoice == 3) || (compChoice == 1 )))
    ){
    $(".result").css("color","red");
		$(".result").text("You Lose!");
	}
	//Tie
	else{
    $(".result").css("color","blue");
		$(".result").text("Tie!");
	}
	console.log(userChoice, compChoice);
}