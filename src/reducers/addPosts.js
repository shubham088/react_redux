const initialState = {
  Title : '',
  Body : ''
}

const addPostReducer = (state=initialState, action) => {
  console.log("add post reducer fired...");
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
