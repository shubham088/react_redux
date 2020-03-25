import React from 'react'

export class PostForms extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title : '',
      body : ''
    }
    this.change = this.change.bind(this)
    this.submit = this.submit.bind(this)
  }

  change(event){
    this.setState({
      [event.target.name] : event.target.value
      }
    )
  }

  submit(event){
    event.preventDefault();
    const post = {
      title : this.state.title,
      body : this.state.body
    }
    //add this post to url
    fetch('https://jsonplaceholder.typicode.com/posts',
    {
      method : 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render(){
    return(
      <div>
      <h2>Add Post</h2>
      <form onSubmit={this.subimt}>
        <div>
        Title : <input type="text" name="title" value={this.state.title} onChange={this.change}/>
        </div>
        <br />
        <div>
        Body : <textarea type="text" name="body" value={this.state.body} onChange={this.change} />
        </div>
        <button>Submit</button>
      </form>
      <p>{this.state.title}</p>
      </div>

    )
  }
}
