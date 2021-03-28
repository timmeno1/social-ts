import React from "react";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {AddPostActionCreator, ProfilePageType, UpdatePostActionCreator} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    ProfilePage : ProfilePageType
}

type MapDispatchToProps = {
    addPost: () => void,
    updatePostText: (text:string) => void
}


export type MyPostPropsType = MapStateToPropsType & MapDispatchToProps


const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        ProfilePage: {
            PostsData: state.ProfilePage.PostsData,
            newPostText: state.ProfilePage.newPostText
        }
    }
}

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps => {
    return {
        addPost: () => {
            dispatch(AddPostActionCreator())
        },
        updatePostText: (text:string) => {
            dispatch(UpdatePostActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;