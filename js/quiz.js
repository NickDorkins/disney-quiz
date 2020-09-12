'use strict';

// keep track of the number of point that the user got for every question
var count = 0;

// Keep track of the current question being rendered
var currentQuestionIdx = 0;

// QA constructor
var QA = function (question, answerArray) {
  this.question = question;
  this.answerArray = answerArray;
  this.selectedAnswer = -1;
};

// this instance method will create a new Answer and then add it to this.answerArray (I do not think i need this anymore because of line 29...)
QA.prototype.addAnswer = function (answer, point) {
  this.answerArray.push(new Answer(answer, point));
};

// Answer constructor
var Answer = function (answer, point) {
  this.answer = answer;
  this.point = point;
};

// we will asign all the QA object that we will need for the quiz
var quiz = [
  new QA('what is your age ?', [new Answer('I\'m 24', 1), new Answer('I won\'t give you my age', 2), new Answer('I\'m 30', 3), new Answer('I\'m 40', 4)])
  
];

function renderQuiz() {
  for (var i = 0; i < quiz.length; i++) {
    var buttomEl = document.getElementById('button');
    var questionEl = document.getElementById('question');
    questionEl.textContent = quiz[i].question;
    for (var j = 0; j < quiz[i].answerArray.length; j++) {
      quiz[i].selectedAnswer ++;
      var answerEl = document.createElement('button');
      answerEl.textContent = quiz[i].answerArray[j].answer;
      buttomEl.appendChild(answerEl);
    }
  }
}

function processAnswer() {

  if (quiz.selectedAnswer !== -1) {
    var question = quiz[currentQuestionIdx];
    var answer = question.answerArray[question.selectedAnswer];
    count += answer.point;
  }
}

renderQuiz();


// for(var i = 0 ; i < quiz.length; i++){
  //   count += quiz.QA.answerArray[this.selectedAnswer].this.point;
  // }
  // quiz[currentQuestionIdx]

