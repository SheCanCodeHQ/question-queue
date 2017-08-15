// export const addQuestion = (questionsFromServer) => {
//   return {
//     type: 'ADD_QUESTION',
//     //details from server
//   }
// }

export const answerQuestion = (questionId, answerId) => {
  return {
    type: 'ANSWER_QUESTION',
    questionId,
    answerId
  }
}

export const skipQuestion = id => {
  return {
    type: 'SKIP_QUESTION',
    id
  }
}

export const toggleWidget = () => {
  return {
    type: 'TOGGLE',
  }
}
