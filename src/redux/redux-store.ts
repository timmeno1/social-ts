import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import messagesReducer from "./messages-reducer";
import userReducer from "./users-reducer";

let rootReducer = combineReducers({
    ProfilePage: profileReducer,
    FriendsBlock: sidebarReducer,
    DialogsPage: messagesReducer,
    UsersPage: userReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

export default store