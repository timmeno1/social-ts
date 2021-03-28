const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_POST_TEXTAREA = 'UPDATE-POST-TEXTAREA'


export type PostType = {
    id: number
    postText: string
    postLikes: number
}
export type PostDataType = Array<PostType>

export type ProfilePageType = {
    PostsData: PostDataType
    newPostText:string
}

const initialState:ProfilePageType = {
    PostsData: [
        {
            id: 1,
            postText: "Клевый пост",
            postLikes: 10
        },
        {
            id: 2,
            postText: "Hello, how are you?",
            postLikes: 8
        },
        {
            id: 3,
            postText: "Somebody loves me",
            postLikes: 24
        },
        {
            id: 4,
            postText: "It's my first post",
            postLikes: 3
        }
    ],
    newPostText : ""
}

const profileReducer = (state:ProfilePageType= initialState, action:any) => {


    switch (action.type) {
        case ADD_NEW_POST: {
            let newPost = {
                id: 5,
                postText: state.newPostText,
                postLikes: 0
            }
            return {
                ...state,
                newPostText: "",
                PostsData : [...state.PostsData, newPost]
            }
        }
        case UPDATE_POST_TEXTAREA: {

            return {
                ...state,
                newPostText : action.newText
            }
        }
        default:
            return state

    }
}

export const AddPostActionCreator = () => {
    return {
        type: ADD_NEW_POST
    }
}

export const UpdatePostActionCreator = (text:string) => {

    return {
        type: UPDATE_POST_TEXTAREA, newText:text
    }
}

export default profileReducer;