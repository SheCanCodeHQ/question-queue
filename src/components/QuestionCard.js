import React from 'react';
import PropTypes from 'prop-types';
import './QuestionCard.css';

const Question = ({
  id,
  text,
  answers,
  onAnswerQuestion,
  onSkipQuestion,
}) => (
  <div className="QuestionCard">
    <div className="Question">
      {text}
    </div>
    <div className="Answers">
      {answers.map(
        (answer) =>(
          <Answer
            {...answer}
            key={'answer'+answer.id}
            onAnswerClicked={
              (answerId) => onAnswerQuestion(id, answerId)
            }
          />
        )
      )}
    </div>
    <a
      href="#"
      className="Skip"
      onClick={(e) => {
        e.preventDefault();
        onSkipQuestion(id);
      }}
    >
      Skip this question
    </a>
  </div>
);

const Answer = ({
  id,
  text,
  onAnswerClicked,
}) => (
  <a
    className="Answer"
    href="#"
    onClick={(e) => {
      e.preventDefault();
      onAnswerClicked(id);
    }}
  >
    {text}
  </a>
);

Answer.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onAnswerClicked: PropTypes.func.isRequired,
};

Question.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onAnswerQuestion: PropTypes.func.isRequired,
  onSkipQuestion: PropTypes.func.isRequired,
};

const QuestionCard = (optionalQuestion) => (
  // if there is no question left unanswered, then
  optionalQuestion.id ?
  <Question {...optionalQuestion} /> :
  <div className="QuestionCard">
    {'Sorry, no more questions at the moment.'}
  </div>
);

export default QuestionCard;
