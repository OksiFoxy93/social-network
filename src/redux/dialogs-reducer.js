const UPDATE_TEXTAREA_MESSAGE = "UPDATE-TEXTAREA-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
    dialogsData:
        [
            {name:"Dima", path:"1", src:"https://pbs.twimg.com/media/EuwqCthXUAEkbZv.jpg"},
            {name:"Natali", path:"2", src:"https://www.blast.hk/attachments/64805/"},
            {name:"Andrey", path:"3", src:"https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png"},
            {name:"Sveta", path:"4", src:"https://d3b4rd8qvu76va.cloudfront.net/926/273/020/-239996977-1tl3gsi-6qb96nnfdp8fnia/original/avatar.jpg"},
            {name:"Oksi", path:"5", src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1WI2hziPDHpkDeFIjtxC86g6P3oO9YrSAQ&usqp=CAU"},
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

    let stateCopy = Object.assign({}, state)

    switch (action.type) {
        case UPDATE_TEXTAREA_MESSAGE:
            stateCopy.newMessageText = action.newMessageText;
            return stateCopy;
        case SEND_MESSAGE:
            let newMessageText = stateCopy.newMessageText;
            stateCopy.newMessageText = "";
            let newMessageBody = {
                name: "Oksana",
                id: stateCopy.messageData.length + 1,
                message: newMessageText,
                src: "https://i.pinimg.com/originals/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
            }
            console.log()
            console.log(state)
            stateCopy.messageData.push(newMessageBody);
            return stateCopy;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateMessageTextareaCreator = text => {
    return {type: UPDATE_TEXTAREA_MESSAGE, newMessageText: text}
}