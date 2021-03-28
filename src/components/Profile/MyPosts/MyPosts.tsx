import css from "./MyPosts.module.css";
import React, {ChangeEvent, createRef, KeyboardEvent} from "react";
import Post from "./Post/Post";
import {MyPostPropsType} from "./MyPostsContainer";


const MyPosts = (props:MyPostPropsType) => {

    const postsComponents = props.ProfilePage.PostsData.map(post => <Post message={post.postText} likesCounter={post.postLikes}/>);
    const newPostElement = createRef<HTMLTextAreaElement>()

    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        if(newPostElement.current){
            let text = newPostElement.current.value
            props.updatePostText(text)
        }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.charCode === 13) props.addPost()
    }

    return (
        <div className={css.postsBlock}>
            <div className={css.header}> My Posts </div>
            <div className={css.newPost}>
                <div><textarea
                               ref={newPostElement}
                               value={props.ProfilePage.newPostText}
                               onChange={onPostChange}
                               onKeyPress={onKeyPressHandler}
                ></textarea></div>

                <button onClick={props.addPost}>Post</button>
            </div>
            <div className={css.posts}>
                {postsComponents}
            </div>
        </div>
    )
}

export default MyPosts;