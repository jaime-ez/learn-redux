// a reducer takes in 2 things:
// 1. the action (info about what happened)
// 2. a copy of current state

const comments = (state = {}, action) => {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state
}

const postComments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          text: action.comment,
          user: action.author
        }
      ]
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.commentId),
        ...state.slice(action.commentId + 1)
      ]
    default:
      return state
  }
}
export default comments
