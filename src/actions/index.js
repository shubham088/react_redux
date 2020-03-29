export const fetchPosts = (json) =>{
  console.log("fetching.....from action");
  console.log(json);
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(function(json){
    console.log('this is it');
    console.log(json);
    return {
      type : 'FETCH_POSTS',
      payload : {
        data : json
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
