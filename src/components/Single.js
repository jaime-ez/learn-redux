import React from 'react'
import Photo from './Photo'
import Comments from './Comments'

const Single = (props) => {
  let i = props.posts.findIndex((post) => post.code === props.match.params.postId)
  let post = props.posts[i]
  let postComments = props.comments[props.match.params.postId] || []

  return (
    <div className='single-photo'>
      <Photo index={i} post={post} {...props} />
      <Comments postComments={postComments} {...props} />
    </div>
  )
}

export default Single
