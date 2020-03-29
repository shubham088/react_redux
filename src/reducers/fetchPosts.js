
const initialState = {
 isFetching : false,
 posts :  []
}


const fetchPostReducer = (state = initialState, action) => {
  console.log("fetch reducer fired ");
  switch(action.type){
    case 'START_FETCH' :
      return {
        ...state,
        isFetching : true
      }
      break;
    case 'END_FETCH':
    return {
      ...state,
      isFetching : false,
      posts : [...action.payload.data]
    }
    break;
    default :
      return state;
  }
}


export default fetchPostReducer;
