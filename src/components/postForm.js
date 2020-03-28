import React from 'react'
import { connect } from "react-redux";
import {addPosts} from '../actions'

class PostForms extends React.Component{
  constructor(props){
    super(props)
    this.change = this.change.bind(this)
    this.submit = this.submit.bind(this)
    console.log(this.props.Title);
  }

  change(event){
  }

  submit(e){
    e.preventDefault();
    const new_post ={
      title : document.getElementById('title').value,
      body : document.getElementById('body').value
    }
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    console.log(new_post);
    this.props.addPosts(title, body);
  }

  render(){
    return(
      <div>
      <h2>Add Post</h2>
      <form >
        <div>
        Title : <input type="text" id="title" name="title"  onChange={this.change}/>
        </div>
        <br />
        <div>
        Body :<textarea type="text" id="body" name="body"  onChange={this.change} />
        </div>
        <button type="button" onClick={this.submit}>Submit</button>
      </form>

      </div>

    )
  }
}

const mapStateToProps = state => {
return {
  Title : state.recent.Title,
  Body : state.recent.Body
};
}

const mapDispatchToProps = dispatch => {
 return {
   addPosts : (title, body) => {
     dispatch(addPosts(title, body))
   },
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForms);
