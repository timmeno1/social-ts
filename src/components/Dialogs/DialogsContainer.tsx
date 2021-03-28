import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {DialogPageType, SendMessageAC, UpdateMessageBodyAC} from "../../redux/messages-reducer";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType =  DialogPageType

type MapDispatchToProps = {
    sendMessage: () => void,
    updateMessageBody: (text:string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToProps

let mapStateToProps = (state:AppStateType):MapStateToPropsType=> {
    return {
        DialogsData : state.DialogsPage.DialogsData,
        MessagesData : state.DialogsPage.MessagesData,
        messageBody : state.DialogsPage.messageBody
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps=>{
    return {
        sendMessage : () =>{
            dispatch(SendMessageAC())
        },
        updateMessageBody : (text:string) =>{
            dispatch(UpdateMessageBodyAC(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer