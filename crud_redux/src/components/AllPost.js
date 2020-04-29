import React from 'react'
import Post from '../components/Post'
import EditPost from  '../components/EditPost'

class AllPost extends React.Component{
    render() {
        return (
            <div>
                <hr/>
                <h1>All Posts</h1>
                <p>---------------------</p>
                {
                    this.props.posts.map((post) => (
                        <div key={post.id}>
                            {
                                post.isEdit ?
                                    <EditPost post={post}
                                              UpdatePost={this.props.UpdatePost}/> :
                                    <Post post={post}
                                          editPost={this.props.editPost}
                                          deletePost={this.props.deletePost}/>
                            }
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default AllPost