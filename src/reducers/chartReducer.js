
const chartReducer = (state = null , action) => {
    switch(action.type) {
        case 'CHANGE':
            return action.data;
      default:
        return state
  
    }
  
  }

  export const chartChange = (input) => {
    return ({
        type: 'CHANGE',
        data: input
    })
} 

export default chartReducer