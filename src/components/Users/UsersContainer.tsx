import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersInitialStateType, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";



type MapStatePropsType = {
    UsersPage:UsersInitialStateType
}

type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (Users:Array<UserType>) => void,
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state:AppStateType):MapStatePropsType=>{
    return {
        UsersPage : state.UsersPage
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType=>{
    return {
        follow : (userId:number)=>{
            dispatch(followAC(userId))
        },
        unfollow : (userId:number)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers : (Users:Array<UserType>)=>{
            dispatch(setUsersAC(Users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default  UsersContainer