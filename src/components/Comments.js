import React, {Component} from 'react'

class Comments extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    let author = this.refs.author.value
    let comment = this.refs.comment.value
    let postId = this.props.match.params.postId

    console.log('props', this.props);
    this.props.addComment(postId, author, comment)
    this.refs.commentForm.reset()
  }
  removeComment = (index) => {
    let postId = this.props.match.params.postId
    this.props.removeComment(postId, index)
  }
  render () {
    return (
      <div className='comments'>
        {this.props.postComments.map((comment, index) => {
          return (
            <div className='comment' key={index}>
              <p>
                <strong>{comment.user}</strong>
                {comment.text}
                <button className='remove-comment' onClick={() => this.removeComment(index)}>&times;</button>
              </p>
            </div>
          )
        })}
        <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit}>
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='comment' placeholder='comment' />
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
}

export default Comments
