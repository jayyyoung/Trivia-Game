	// QUESTIONs ARRAY
	var questions = [{
		question: "What DOESN'T Marcellus Wallace look like?",
		choices: ["black", "bald", "A bitch", "A man"],
		answer: 2
	}, {
		question: "What is the lock combination on the briefcase?",
		choices: ["123", "666", "456", "999"],
		answer: 1
	}, {
		question: "What do they call a Quarter Pounder with cheese in Amsterdam?",
		choices: ["Royale with cheese", "The Monster with cheese", "Megaburger with cheese", "It has a different name?"],
		answer: 0
	}, {
		question: "Say ____ again!",
		choices: ["who", "what", "where", "when"],
		answer: 1
	}, {
		question: "According to Butch, the current state of Zed is...",
		choices: ["Zed is well and financially stable.", "Zed is going through a rough patch.", "Zed is on his lunch break.", "Zed's dead baby, Zed's dead."],
		answer: 3
	}, {
		question: "What did the father tomato say to the baby tomato after stepping on him?",
		choices: ["ketchup", "hurry up", "come on", "let's go"],
		answer: 0			
	}];

	// Other Global Variables
	var time;
	var seconds;
	var questionsCorrect;

$(document).ready(function() {


	// Click the "start" button to start the game
	$('#startButton').on('click', function() {
		var seconds;
		alert('Hope you have seen the movie!');
		startGame();
		displayQuestions();	
	});

	// initializing function, brings up all the questions and starts clock.
	//it also should show all the questions as they appear, since they should not be there before the "start button" is clicked

	function startGame() {
		countDown();
		showCountdown();
		//displayQuestions();
	};

	// Countdown function
	function countDown(){
		seconds = 60;
		$('#timer').html('<h3>Time Remaining: ' + seconds + '</h3>');
		//sets timer to go down
		time = setInterval(showCountdown, 1000);		
	};

	// function that shows the countdown
	// the timer should stop running at 0 and the user would be able to hit the "reset button" to start the quiz over
	function showCountdown(){
		seconds--;
		$('#timer').html('<h3>Time Remaining: ' + seconds + '</h3>');
		if(seconds == 0) {
				clearInterval(seconds);
				alert('Time is up');
			}	
	};

	// this function will show the questions. 
	// Its supposed to grab the "question" portion of the questions array, then show them in the questionsListed div when the startGame(); is triggered. 
	// Then, it is supposed to grab the answers in the "answers" array.

	function displayQuestions() {
		var showQuestions;
		for(var i = 0; i < showQuestions(questions[i].length()); i++) {
			$('#questionsListed').html("<div>" + questions[i] + "</div>");
		}
	};

	//Here is supposed to be a function that allows the user to select an answer.
	//It the pulls the "answer" from the questions array and compares it to what answer was selected by the user.
	
	//Here is supposed to be a function that displays how many questions the user got correct out of the total number of questions.
	//this would display after the user finishes all the questions or the timer reaches 0.


	// reset function
	function gameReset() {
		$('#resetButton').on('click', function() {
		startGame();
		})
	};


});