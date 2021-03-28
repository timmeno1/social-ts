
import {v1} from 'uuid'

export type MessageType = {
    id: string
    message: string
    own : boolean
}

export type DialogType = {
    id: string
    name: string
}

 type PostType = {
    id: number
    postText: string
    postLikes: number
}
 type PostDataType = Array<PostType>

export type ProfilePageType = {
    PostsData: PostDataType
    addPost:(postText:string) => void
}
export type DialogPageType = {
    DialogsData: Array<DialogType>
    MessagesData: Array<MessageType>
}
type SideBarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SideBarType
}


let state:RootStateType = {
    dialogPage : {
        DialogsData : [
            {id: v1(), name: "Timych"},
            {id: v1(), name: "Yulia"},
            {id: v1(), name: "Asal"},
            {id: v1(), name: "Sasha"},
            {id: v1(), name: "Dimych"}
        ],
        MessagesData : [
            {id: v1(), message: "How are you?!", own:false},
            {id: v1(), message: "Cool! Learning react!", own:true},
            {id: v1(), message: "Node rules", own:false},
            {id: v1(), message: "Node rules", own:false},
            {id: v1(), message: "Node rules", own:false}
        ]
    },
    profilePage : {
        PostsData : [
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
        addPost : (postText:string) => {
            let newPost = {
                id:5,
                postText : postText,
                postLikes: 0
            }
            state.profilePage.PostsData.push(newPost);
            // renderEntireTree(state);
        }
    },
    sidebar : [
        {
            id: 1,
            name: "Sasha",
            photo: "https://www.befunky.com/images/prismic/2ba00f8e1b504cd1576ff85bd101c2137ea6a02e_landing-photo-to-art-img-4-before.png?auto=webp&format=jpg&width=736"
        },
        {
            id: 2,
            name: "Yuliya",
            photo: "https://i2.wp.com/www.alphr.com/wp-content/uploads/2018/04/how_to_back_up_photos_on_google_photos.jpg?resize=563%2C563&ssl=1"
        },
        {
            id: 3,
            name: "Asal",
            photo: "https://i.pinimg.com/474x/98/3f/e4/983fe4272910dd6579a4e046202f4c38.jpg"
        }
    ]
}



export default state;