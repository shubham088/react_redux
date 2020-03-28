const initialState = {
  Title : 'hello_guys',
  Body : ''
}

const addPostReducer = (state=initialState, action) => {
  switch(action.type){
    case 'ADD_POST':
      return {
        ...state,
        Title : action.payload.Title,
        Body : action.payload.Body
      }
    default:
      return state;
  }
}

export default addPostReducer;
