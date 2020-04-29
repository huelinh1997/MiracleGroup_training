import React from 'react'
import AllPost from "../components/AllPost";
import {connect} from "react-redux";
import {editPost, deletePost, updatePost} from "../actions/action"

class AllPostContainer extends React.Component{
    render() {
        return (
            <AllPost posts={this.props.posts}
                     editPost={this.props.editPost}
                     deletePost={this.props.deletePost}
                     UpdatePost={this.props.updatePost}/>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        posts: state
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        editPost: (id)=> dispatch(editPost(id)),
        deletePost: (id) => dispatch(deletePost(id)),
        updatePost: (id, title, content) => dispatch(updatePost(id, title, content))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllPostContainer)