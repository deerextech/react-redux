import React, { Component } from 'react';


export default class CommentBox extends Component{

  render() {
    return (
      <form className="comment_box">
        <h4>Add Comment</h4>
        <textarea />
        <div><button >Submit Comment</button></div>
      </form>
    )
  }
}
