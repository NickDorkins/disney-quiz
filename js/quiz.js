'use strict';
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