import React from 'react'
import { connect } from "react-redux";
import {fetchPosts} from '../actions';

class Posts extends React.Component{
  constructor(props){
    super(props)
    console.log("from post");
  }

  componentWillMount(){
    this.props.fetchPosts();
  }

  render(){
    const postItems = this.props.posts.map(function(singlePost){
      return (
        <div id={singlePost.id}>
        <h3>{singlePost.title}</h3>
        <p>{singlePost.body}</p>
        </div>
      )
    })
    return(
      <div>
      <h1>Posts</h1>
      {postItems}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts : state.all_posts.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts : () =>dispatch(fetchPosts())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Posts);
