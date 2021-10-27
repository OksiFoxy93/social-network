const ADD_POST = "ADD-POST";
const UPDATE_TEXTAREA_POST = "UPDATE-TEXTAREA-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    profileData: {
        id: 1500001,
        fullName: "Oksana",
        photos: {
            small: null,
            large: "https://i.pinimg.com/originals/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
        },
        aboutMe: 'I love front-end',
        contacts: {
            facebook: "facebook.com",
            github: null,
            instagram: "instagram.com/oksi.foxy",
            mainLink: null,
            twitter: null,
            vk: null,
            website: null,
            youtube: null
        }
    },
    isFetching: false,
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
    switch (action.type) {
        case ADD_POST: return {
                ...state,
                newPost: {
                    id: state.postData.length + 1,
                    text: state.newPostText,
                    likes: 0
                },
                postData: [...state.postData, {
                    id: state.postData.length + 1,
                    text: state.newPostText,
                    likes: 0
                } ],
                newPostText: ""
        }
        case UPDATE_TEXTAREA_POST: return {
            ...state,
            newPostText: action.newText
        }
        case SET_USER_PROFILE: return {
            ...state,
            profileData: {
                id: action.data.userId,
                fullName: action.data.fullName,
                photos: action.data.photos,
                aboutMe: action.data.aboutMe,
                contacts: action.data.contacts
            }
        }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateTextareaPostActionCreator = (text) => {
    return {type: UPDATE_TEXTAREA_POST, newText: text}
}
export const setIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });
export const setUserProfile = (data) => {
    return {type: SET_USER_PROFILE, data}
}
