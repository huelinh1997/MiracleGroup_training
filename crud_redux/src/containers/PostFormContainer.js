import React from 'react'
import PostForm from '../components/AddPost'
import {addPost} from '../actions/action'
import {connect} from "react-redux";

class PostFormContainer extends React.Component{
    render() {
        return (
            <PostForm addPost={this.props.addPosts}/>
        )
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        addPosts: (title, content) => {
            dispatch(addPost(title, content))
        }
    }
}
export default connect(null, mapDispatchToProps)(PostFormContainer)