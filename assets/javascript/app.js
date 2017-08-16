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

	// initializing function, brings up all the questions and starts clock
	function startGame() {
		countDown();
		showCountdown();
	};

	// Countdown function
	function countDown(){
		seconds = 60;
		$('#timer').html('<h3>Time Remaining: ' + seconds + '</h3>');
		//sets timer to go down
		time = setInterval(showCountdown, 1000);		
	};

	// function that shows the countdown
	function showCountdown(){
		seconds--;
		$('#timer').html('<h3>Time Remaining: ' + seconds + '</h3>');
		if(seconds == 0) {
				clearInterval(seconds);
				alert('Time is up');
			}	
	};

	// this function will show the questions
	function displayQuestions() {
		var showQuestions;
		for(var i = 0; i < showQuestions(questions[i].length()); i++) {
			$('#questionsListed').html("<div>" + questions[i] + "</div>");
		}
	};

	// 


	// reset function
	function gameReset() {
		$('#resetButton').on('click', function() {
		startGame();
		})
	};


});