import React from 'react'

class EditPost extends React.Component{
    handleEdit = ()=>{
        const title = this.getTitle.value
        const content = this.getContent.value
        this.props.UpdatePost(this.props.post.id, title, content)
    }
    render() {
        let {title, content} = this.props.post
        return (
            <div>
                <form onSubmit={ this.handleEdit }>
                    <input required type="text"
                           ref={ (input) => this.getTitle = input }
                           defaultValue={ title }
                           placeholder="Enter Post Title" />
                    <br />
                    <textarea required rows="5" cols="20"
                              ref={ (input) => this.getContent = input }
                              defaultValue={ content }
                              placeholder="Enter Post Content" />
                    <br />
                    <button type="submit">
                        Edit
                    </button>
                </form>
            </div>
        )
    }
}
export default EditPost