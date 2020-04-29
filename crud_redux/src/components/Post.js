import React from 'react'

class Post extends React.Component{
    render() {
        console.log('post:',this.props.post)
        let {id, title, content} = this.props.post
        return (
            <div>
                <h2>
                    {title}
                </h2>
                <p>
                    {content}
                </p>
                <button onClick={()=> this.props.editPost(id)}>
                    Edit
                </button>
                <button onClick={()=> this.props.deletePost(id)}>
                    Delete
                </button>
            </div>
        )
    }
}
export default Post