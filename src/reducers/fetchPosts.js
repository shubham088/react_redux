
const initialState = {
 isFetching : false,
 posts :  []
}
// {
//    "userId": 1,
//    "id": 1,
//    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//  }

// const fetchPostReducer = (state=initialState, action) => {
//   console.log("fetch reducer fired..");
//   switch(action.type){
//     case 'FETCH_POSTS' :
//     console.log("payload : ",action.payload.data);
//       return {
//         ...state,
//          posts : [...state.posts, ...action.payload.data]
//       }
//     default :
//      return initialState;
//   }
// }

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
      posts : [...state, ...action.payload.data]
    }
    break;
    default :
      return state;
  }
}


export default fetchPostReducer;
