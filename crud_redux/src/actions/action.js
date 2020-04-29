export const addPost = (title, content)=> ({
    type: 'ADD_POST',
    title,
    content
})

export const editPost = (id)=> ({
    type: 'EDIT_POST',
    id
})

export const deletePost = (id)=> ({
    type: 'DELETE_POST',
    id
})

export const updatePost = (id, title, content)=> ({
    type: 'UPDATE_POST',
    id,
    title,
    content
})