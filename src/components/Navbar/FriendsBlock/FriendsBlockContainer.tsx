import React from "react";
import {connect} from "react-redux";
import FriendsBlock from "./FriendsBlock";
import {FriendsBlockType} from "../../../redux/sidebar-reducer";
import {AppStateType} from "../../../redux/redux-store";


type MapStateToPropsType = FriendsBlockType

let mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        friendsList:state.FriendsBlock.friendsList
    }
}

const FriendsBlockContainer = connect(mapStateToProps)(FriendsBlock)

export default FriendsBlockContainer