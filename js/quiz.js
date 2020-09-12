'use strict';

// we will asign all the QA object that we will need for the quiz
var quiz = [];

// keep track of the number of point that the user got for every question
var count = 0;

// Keep track of the current question being rendered
var currentQuestionIdx = 0;

// QA constructor
var QA = function (question, answerArray, idQuestion, idAnswer) {
  this.question = question;
  this.answerArray = answerArray;
  this.selectedAnswer = -1;
  this.idQuestion = idQuestion;
  this.idAnswer = idAnswer;
  quiz.push(this);
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

// This is where we create our questions
new QA('what is your age ?', [new Answer('I\'m 24', 1), new Answer('I won\'t give you my age', 2), new Answer('I\'m 30', 3), new Answer('I\'m 40', 4)], 'question1', 'answer1');
new QA('egg sandwich', [new Answer('1', 1), new Answer('2', 2), new Answer('3', 3), new Answer('4', 4)], 'question2', 'answer2');
new QA('soup', [new Answer('1', 1), new Answer('2', 2), new Answer('3', 3), new Answer('4', 4)], 'question3', 'answer3');
new QA('tea', [new Answer('1', 1), new Answer('2', 2), new Answer('3', 3), new Answer('4', 4)], 'question4', 'answer4');
new QA('yogurt', [new Answer('1', 1), new Answer('2', 2), new Answer('3', 3), new Answer('4', 4)], 'question5', 'answer5');

function renderQuiz() {
  for (var i = 0; i < quiz.length; i++) {
    var buttomEl = document.getElementById(quiz[i].idAnswer);
    var questionEl = document.getElementById(quiz[i].idQuestion);
    questionEl.textContent = quiz[i].question;
    for (var j = 0; j < quiz[i].answerArray.length; j++) {
      quiz[i].selectedAnswer ++;
      var answerEl = document.createElement('option');
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

function Quiz(questions) {
  this.score = 0;
  this.questios = questions;
  this.questionIndex = 0;
}

function Question(text, choices) {
  this.text = text;
  this.choices = choices;
}

function showQuestion() {
var element = document.getElementById('question');
}