const ADD_POST = "ADD-POST";
const UPDATE_TEXTAREA_POST = "UPDATE-TEXTAREA-POST";

const initialState = {
    profileData: {
        name: "Oksana",
        job: "front-end developer",
        age: "27",
        src: "https://i.pinimg.com/originals/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg",
        city: "Kharkiv",
        education: "KhAI University"
    },
    postData:
        [
            {
                id:1,
                text: "I love IT-kamasutra",
                likes: 23
            },
            {
                id:2,
                text: "How long will it last?",
                likes: 2
            }
        ],
    newPostText: "Write your new post"
}

export default function profileReducer(state = initialState, action) {

    let stateCopy = Object.assign({}, state)

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: stateCopy.postData.length + 1,
                text: stateCopy.newPostText,
                likes: 0
            }
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        case UPDATE_TEXTAREA_POST:
            stateCopy.newPostText = action.newText;
            return stateCopy;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateTextareaPostActionCreator = (text) => {
    return {type: UPDATE_TEXTAREA_POST, newText: text}
}