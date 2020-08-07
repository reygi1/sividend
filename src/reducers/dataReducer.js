
const dataReducer = (state = null , action) => {
    switch(action.type) {
        case 'DATACHANGE':
            return action.data;
      default:
        return state
  
    }
  
  }

  export const dataChange = (input) => {
    return async dispatch => {
        const resp = await fetch(`https://safe-tundra-92322.herokuapp.com/data/${input}`)
        const data = await resp.json()
        if(data===null || data === undefined)
        {dispatch({
          type: 'DATACHANGE',
          data: null
        })}
        else{
        dispatch({
          type: 'DATACHANGE',
          data: data
        })
        
      }}
} 

export default dataReducer