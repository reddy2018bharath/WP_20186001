var quiz = {
	"questions" : [{
		"question" : "Each Computer has a built-in instruction set that it knows how to execute by design.",
		"choices" : [{
			option : "True",
			iscorrect : true,
			feedback : "Correct"
		},
		{
			option : "False",
			iscorrect : false,
			feedback : "Incorrect"
		}
		],
		"hint" : "Recall that we use the term computation to mean 'the execution of a sequence of instructions by a computer with the intention of solving a given problem'",
	},
	{
	"question" : "The Computer uses intelligence to execute instructions.",
	"choices" : [{
		option : "True",
		iscorrect : false,
		feedback : "Incorrect"
	},
	{
		option : "False",
		iscorrect : true,
		feedback : "Correct"
	}
	],
	"hint" : "Recall that we said a computer executes the instructions given to it mechanically",

}
]	
}


var i = 0
var j = 0
function display() {
	document.getElementById('question1').innerHTML = quiz.questions[i].question
	document.getElementById('hint1').innerHTML = quiz.questions[i].hint
	document.getElementById('radio1').innerHTML = '<input type = "radio" name = "q1" value = "choices 1" onclick = "radioclick('+i+', '+j+')">' +
	 quiz.questions[i].choices[j].option + '<br>'
		+ '<input type = "radio" name = "q1" value = "choices 2" onclick = "radioclick('+i+', '+j+1+')">' + quiz.questions[i].choices[j + 1].option + '<br>'
		i = i + 1
	document.getElementById('question2').innerHTML = quiz.questions[i].question
	document.getElementById('hint2').innerHTML = quiz.questions[i].hint
	document.getElementById('radio2').innerHTML = '<input type = "radio" name = "q2" value = "choices 1" onclick = "radioclick1('+i+', '+j+')">' + 
	quiz.questions[i].choices[j].option + '<br>'
		+ '<input type = "radio" name = "q2" value = "choices 2" onclick = "radioclick1('+i+', '+j+1+')">' + quiz.questions[i].choices[j + 1].option + '<br>'

		hideButton('Previous')

}

function radioclick(i, j) {
	
	if ( quiz.questions[i].choices[j].iscorrect==true) {
		string = ''
		string += '<div class = "alert alert-success alert-dismissible">'
		string += '<a href = "#" class = "close" data-dismiss = "alert" aria-label = "close">&times;</a>'
		string += '<span class = "glyphicon glyphicon-ok"></span>' + '<strong>' + quiz.questions[i].choices[j].feedback + '</strong>'
		
		document.getElementById('feedback1').innerHTML = string
	} else {
		string = ''
		string += '<div class = "alert alert-warning alert-dismissible">'
		string += '<a href = "#" class = "close" data-dismiss = "alert" aria-label = "close">&times;</a>'
		string += '<span class = "glyphicon glyphicon-ok"></span>' + '<strong>' + quiz.questions[i].choices[j].feedback + '</strong>'
		document.getElementById('feedback1').innerHTML = string
	}
}

function radioclick1(i, j) {
	if (quiz.questions[i].choices[j].iscorrect==true) {
		string = ''
		string += '<div class = "alert alert-success alert-dismissible">'
		string += '<a href = "#" class = "close" data-dismiss = "alert" aria-label = "close">&times;</a>'
		string += '<span class = "glyphicon glyphicon-ok"></span>' + '<strong>' + quiz.questions[i].choices[j].feedback + '</strong>'
		document.getElementById('feedback2').innerHTML = string
	} else {
		string = ''
		string += '<div class = "alert alert-warning alert-dismissible">'
		string += '<a href = "#" class = "close" data-dismiss = "alert" aria-label = "close">&times;</a>'
		string += '<span class = "glyphicon glyphicon-ok"></span>' + '<strong>' + quiz.questions[i].choices[j].feedback + '</strong>'
		document.getElementById('feedback2').innerHTML = string
	}
}

function Previous() {
	i = i - 2;
	if (i < 0) {
		i = 0;
		hideButton('Previous')
		return;
	}
	showButton('Previous')
	showButton('Next')
	document.getElementById('question1').innerHTML = quiz.questions[i].question
	document.getElementById('hint1').innerHTML = quiz.questions[i].hint
	document.getElementById('radio1').innerHTML = '<input type = "radio" name = "q1" value = "choices 1"onclick = radioclick('+i+', '+j+')">' + quiz.questions[i].choices[j].option + '<br>'
		+ '<input type = "radio" name = "q1" value = "choices 2" onclick = "radioclick('+i+ ',' +4+')">' + quiz.questions[i].choices[j + 1].option + '<br>'

	document.getElementById('question2').innerHTML = quiz.questions[i + 1].question
	document.getElementById('hint2').innerHTML = quiz.questions[i + 1].hint
	document.getElementById('radio2').innerHTML = '<input type = "radio" name = "q2" value = "choices 1" onclick = "radioclick1('+i+1+', '+j+')">' + quiz.questions[i + 1].choices[j].option + '<br>'
		+ '<input type = "radio" name = "q2" value = "choices 2" onclick = "radioclick1('+2+ ',' + 2 +')">' + quiz.questions[i + 1].choices[j + 1].option + '<br>'

		if (i==0) hideButton('Previous')
}

function Next() {
	i = i + 2
	if ( i > quiz.questions.length - 1) {
		i = quiz.questions.length - 1
		hideButton('Next')
		return
	}
	showButton('Next')
	showButton('Previous')
	document.getElementById('question1').innerHTML = quiz.questions[i].question
	document.getElementById('hint1').innerHTML = quiz.questions[i].hint
	document.getElementById('radio1').innerHTML = '<input type = "radio" name = "q1" value = "choices 1"onclick = radioclick('+i+', '+j+')">' + quiz.questions[i].choices[j].option + '<br>'
		+ '<input type = "radio" name = "q1" value = "choices 2" onclick = "radioclick('+i+', '+j+1+')">' + quiz.questions[i].choices[j + 1].option + '<br>'

	document.getElementById('question2').innerHTML = quiz.questions[i + 1].question
	document.getElementById('hint2').innerHTML = quiz.questions[i + 1].hint
	document.getElementById('radio2').innerHTML = '<input type = "radio" name = "q2" value = "choices 1" onclick = "radioclick1('+i+1+', '+j+')">' + quiz.questions[i + 1].choices[j].option + '<br>'
		+ '<input type = "radio" name = "q2" value = "choices 2" onclick = "radioclick1('+i+1+', '+j+1+')">' + quiz.questions[i + 1].choices[j + 1].option + '<br>'

		if (i == quiz.questions.length - 2) hideButton('Next')
}

function showButton(id) {
	console.log(document.getElementById(id).style.visibility)
	document.getElementById(id).style.visibility = 'visible'
}

function hideButton(id) {
	console.log(document.getElementById(id).style.visibility)
	document.getElementById(id).style.visibility = 'hidden'
}

function reset() {
	location.reload()
}