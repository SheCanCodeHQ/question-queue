import { combineReducers } from 'redux'


const stubQuestions = [
  {
    id: 1,
    text: 'What\'s your favourite color?',
    answers: [
      {
        id: 0,
        text: 'blue',
      },
      {
        id: 1,
        text: 'green',
      },
    ],
    selectedAnswer: undefined,
    skipped: false,
  },
  {
    id: 2,
    text: 'Are you a student?',
    answers: [
      {
        id: 0,
        text: 'yes',
      },
      {
        id: 1,
        text: 'no',
      },
    ],
    selectedAnswer: undefined,
    skipped: false,
  },
  {
    id: 3,
    text: 'How would you describe yourself?',
    answers: [
      {
        id: 0,
        text: 'Coder',
      },
      {
        id: 1,
        text: 'Creative',
      },
      {
        id: 2,
        text: 'Sales Person',
      },
    ],
    selectedAnswer: undefined,
    skipped: false,
  }
];


const questions = (state = stubQuestions, action) => {
  switch (action.type) {
    case 'ANSWER_QUESTION':
      return state.map(question =>
        (question.id === action.questionId)
          ? {
            ...question,
            selectedAnswer: action.answerId,
          }
          : question
      )
    // case 'ADD_QUESTION': // complete when service added
    //   return [
    //     ...state,
    //     {
    //       id: action.id,
    //       text: action.text,
    //       answers: action.answers,
    //       selectedAnswer: undefined,
    //       skipped: false,
    //     }
    //   ]
    case 'SKIP_QUESTION':
      return state.map(question =>
        (question.id === action.id)
          ? {
            ...question,
            skipped: true,
          }
          : question
      )
    default:
      return state
  }
}

// widget is minimized by default
const minimized = (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return !state
    default:
      return state
  }
}

const reducers = combineReducers({
  questions,
  minimized
})

export default reducers
