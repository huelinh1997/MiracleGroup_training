import React from 'react'

class PostForm extends React.Component{
    handlerSubmit = (e)=> {
        e.preventDefault()
        let title = this.getTitle.value;
        let content = this.getContent.value
        this.props.addPost(title, content)
        this.getTitle.value = ''
        this.getContent.value = ''
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handlerSubmit}>
                    <input required type="text"
                           placeholder="Enter Post Title"
                           ref={ (input) => this.getTitle = input } />
                    <br />
                    <textarea required rows="5" cols="20"
                              placeholder="Enter Post"
                              ref={ (input) => this.getContent = input } />
                    <br />
                    <button type="submit">
                        Create
                    </button>
                </form>
            </div>
        )
    }
}

export default PostForm