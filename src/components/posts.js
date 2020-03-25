import React from 'react'

export class Posts extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      posts : []
    }
  }

  componentWillMount(){
    //works just before render
    fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
         .then(data => {this.setState({posts : data})
          console.log()});
  }

  render(){
    return(
      <div>
      <h1>Posts</h1>
      {this.state.posts.map(function (postItem){
        return (<div key={postItem.id}>
        <h4>{postItem.title}</h4>
        <p>{postItem.body}</p>
        </div>)
      })}
      </div>
    )
  }
}
