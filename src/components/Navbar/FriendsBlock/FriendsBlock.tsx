import React from "react";
import css from "./FriendsBlock.module.css";
import Friend from "./Friend/Friend";
import {FriendsBlockType} from "../../../redux/sidebar-reducer";

const FriendsBlock = (props:FriendsBlockType) => {
    let friends = props.friendsList.map((friend: { name: string; photo: string; }) => <Friend name={friend.name} photo={friend.photo}/>)
    return (
        <div>
            <h3>Friends</h3>
            <div className={css.friends}>
                {friends}
            </div>
        </div>
    )
}

export default FriendsBlock;