
export default (state = [], action) => {
  let updatedState;

  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      updatedState = state.filter(quote => quote.id !== action.quoteId)

      return updatedState

      // idx = state.findIndex(quote => quote.id === action.quoteId)
      // return [...state.slice(0, idx), ...state.slice(idx+1)];
    
    case 'UPVOTE_QUOTE':
      updatedState = state.map(quote => {
        return quote.id === action.quoteId ? {...quote, votes: quote.votes += 1} : quote
      })
    
      return updatedState

    case 'DOWNVOTE_QUOTE':
      updatedState = state.map(quote => {
        return (quote.id === action.quoteId) && quote.votes > 0 ? {...quote, votes: quote.votes -= 1} : quote
      })
      return updatedState
  
    default:
      return state;
  }
}
