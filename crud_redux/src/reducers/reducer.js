const stateDefault=[
    {id: 2, title: 'go to school', content: 'Go to school to learn English', isEdit: false},
    {id: 1, title: 'go out', content: 'Go out with girlfriends', isEdit: false}
]
const postReducer = (state=stateDefault, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [
                {
                    id: state.length === 0 ? 1 : state[0].id + 1,
                    title: action.title,
                    content: action.content,
                    isEdit: false
                },
                ...state
            ]
        case 'EDIT_POST':
            return state.map(item => item.id === action.id ? {...item, isEdit: !item.isEdit} : item)
        case 'DELETE_POST':
            return state.filter(item => item.id !== action.id)
        case 'UPDATE_POST':
           return state.map(item => {
               if(item.id === action.id) {
                   return {
                       ...item,
                       title: action.title,
                       content: action.content,
                       isEdit: !item.isEdit
                   }
               } else return item
           })
        default: return state

    }
}

export default postReducer;