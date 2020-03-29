import axios from 'axios'
export const addPosts = (title, body) => {
  console.log("add post action fired....");
  return {
    type : 'ADD_POST',
    payload : {
      Title : title,
      Body : body
    }
  }
}

export const startFetch = () => {
  console.log("start fetching...");
  return {
    type : 'START_FETCH'
  }
}

export const endFetch = (data) => {
  console.log("end fetch..");
  return {
    type : 'END_FETCH',
    payload : {
      data : data
    }
  }
}

export const fetchPosts = () => {
  console.log("fetching...");
  let url = "https://jsonplaceholder.typicode.com/posts"
    return (dispatch) => {
        dispatch(startFetch())
        return axios.get(url).then(
            (response) => {
                dispatch(endFetch(response.data))
            },
            (err) => {
                console.log(err);
            }
        )
    }
}
