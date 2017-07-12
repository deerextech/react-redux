import React, { Component } from 'react';


export default class CommentBox extends Component{
  constructor(props){
    super(props);
    this.state = {comment: ''};
  }
  onHandleChange(event){
    this.setState({comment: event.target.value});
    //controlled value.
  }
  handleSubmit(event){
    event.preventDefault();
    this.setState({comment:''})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment_box">
        <h4>Add Comment</h4>
        <textarea value={this.state.comment} onChange={this.onHandleChange.bind(this)}/>
        <div><button action="submit">Submit Comment</button></div>
      </form>
    )
  }
}
