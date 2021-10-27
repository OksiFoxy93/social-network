const UPDATE_TEXTAREA_MESSAGE = "UPDATE-TEXTAREA-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
    dialogsData:
        [
            {id:0, name:"Dima", path:"1", src:"https://pbs.twimg.com/media/EuwqCthXUAEkbZv.jpg"},
            {id:1, name:"Natali", path:"2", src:"https://www.blast.hk/attachments/64805/"},
            {id:2, name:"Andrey", path:"3", src:"https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png"},
            {id:3, name:"Sveta", path:"4", src:"https://d3b4rd8qvu76va.cloudfront.net/926/273/020/-239996977-1tl3gsi-6qb96nnfdp8fnia/original/avatar.jpg"},
            {id:4, name:"Oksi", path:"5", src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1WI2hziPDHpkDeFIjtxC86g6P3oO9YrSAQ&usqp=CAU"},
        ],

    messageData:
        [
            {
                name:"Oksana",
                id:1,
                message:"Hi, bro!",
                src:"https://i.pinimg.com/originals/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
            },
            {
                name:"Natali",
                id:2,
                message:"Hi, how are you?",
                src:"https://www.blast.hk/attachments/64805/"
            },
            {
                name:"Oksana",
                id:3,
                message: "Amazing!!!",
                src:"https://i.pinimg.com/originals/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
            }
        ],

    newMessageText: ""
}

export default function dialogsReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TEXTAREA_MESSAGE: return {
            ...state,
            newMessageText: action.newMessageText
        }
        case SEND_MESSAGE: return {
            ...state,
            messageData: [...state.messageData, {
                name: "Oksana",
                id: state.messageData.length + 1,
                message: state.newMessageText,
                src: "https://i.pinimg.com/originals/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
            }],
            newMessageText: ''
        }

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateMessageTextareaCreator = text => {
    return {type: UPDATE_TEXTAREA_MESSAGE, newMessageText: text}
}