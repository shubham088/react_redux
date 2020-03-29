import React from 'react'
import { connect } from "react-redux";
import {fetchPosts} from '../actions';

class Posts extends React.Component{
  constructor(props){
    super(props)
    console.log("from post");
    console.log(this.props.posts);
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render(){
    return(
      <div>
      <h1>Posts</h1>
      <p></p>
      <button onClick={this.props.fetchPosts}>Fetch Posts</button>
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
