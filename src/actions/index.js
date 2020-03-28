
export const fetchPosts = () =>{
  console.log("im  here");
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(function(json){
    console.log("json");
    return {
      type : 'FETCH_POSTS',
      payload : {
        posts : json,
      }
    }
  })

}

export const addPosts = (title, body) => {
  console.log("Adding....");
  return {
    type : 'ADD_POST',
    payload : {
      Title : title,
      Body : body
    }
  }
}
