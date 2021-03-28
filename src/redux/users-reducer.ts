
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'


export type UserType = {
    id: number,
    followed: boolean,
    name:string,
    status:string,
    photos : {
        small: string,
        large: string
    }
}

export type UsersInitialStateType = {
    Users : Array<UserType>
}

const initialState:UsersInitialStateType = {
    Users : []
}

const userReducer = (state:UsersInitialStateType = initialState, action:any):UsersInitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                Users: state.Users.map( u => {
                    if( u.id === action.userID  ) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                Users: state.Users.map( u => {
                    if( u.id === action.userID  ) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }


        case SET_USERS:
            return {...state, Users: [...state.Users, ...action.Users]}


        default:
            return state

    }
}

export const followAC = (userId:number) => {
    return {
        type: FOLLOW, userId: userId
    }
}

export const unfollowAC = (userId:number) => {

    return {
        type: UNFOLLOW, userId: userId
    }
}
export const setUsersAC = (Users:Array<UserType>) => {

    return {
        type: SET_USERS, Users: Users
    }
}

export default userReducer;