import { connect } from 'react-redux'
import { answerQuestion, skipQuestion } from '../actions'
import QuestionCard from '../components/QuestionCard'

const mapStateToProps = (state) => {
  // what if there are no more questions?
  console.log(state);
  return Object.assign(
    {},
    state.questions.find(({
      selectedAnswer,
      skipped,
    }) => (
      // current question is the first one
      // that is not answered or skipped
      skipped === false &&
      selectedAnswer === undefined
    ))
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAnswerQuestion: (questionId, answerId) => {
      dispatch(answerQuestion(questionId, answerId))
    },
    onSkipQuestion: (questionId) => {
      dispatch(skipQuestion(questionId))
    }
  }
}

const QuestionQueue = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionCard)

export default QuestionQueue
