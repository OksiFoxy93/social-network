const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    users:
        [
            // {
            //     id: 0,
            //     name: "Dima K.",
            //     path: "1",
            //     src: "https://pbs.twimg.com/media/EuwqCthXUAEkbZv.jpg",
            //     status: "I have to do CDP now...",
            //     location: {
            //         country: "Belarus",
            //         city: "Minsk"
            //     },
            //     followed: false,
            // },
            // {
            //     id: 1,
            //     name: "Natali",
            //     path: "2",
            //     src: "https://www.blast.hk/attachments/64805/",
            //     status: "I love dogs!",
            //     location: {
            //         country: "Ukraine",
            //         city: "Kharkiv"
            //     },
            //     followed: true,
            // },
            // {
            //     id: 2,
            //     name: "Andrey",
            //     path: "3",
            //     src: "https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png",
            //     status: "I am so sad...",
            //     location: {
            //         country: "Ukraine",
            //         city: "Odessa"
            //     },
            //     followed: false,
            // },
            // {
            //     id: 3,
            //     name: "Sveta",
            //     path: "4",
            //     src: "https://d3b4rd8qvu76va.cloudfront.net/926/273/020/-239996977-1tl3gsi-6qb96nnfdp8fnia/original/avatar.jpg",
            //     status: "I am so sad...",
            //     location: {
            //         country: "Ukraine",
            //         city: "Odessa"
            //     },
            //     followed: true,
            // },
            // {
            //     id: 4,
            //     name: "Oksi",
            //     path: "5",
            //     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1WI2hziPDHpkDeFIjtxC86g6P3oO9YrSAQ&usqp=CAU",
            //     status: "I am happy. Do you want coffee?",
            //     location: {
            //         country: "Ukraine",
            //         city: "Kiev"
            //     },
            //     followed: false,
            // },
        ],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map( user => {
                    if (action.userId === user.id) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map( user => {
                    if (action.userId === user.id) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        default:
            return state;
    }
}

export const follow = userId => ({ type: FOLLOW, userId: userId });
export const unfollow = userId => ({ type: UNFOLLOW , userId: userId });
export const setUsers = users => ({ type: SET_USERS, users: users });
export const setCurrentPage = pageNumber => ({ type: SET_CURRENT_PAGE, currentPage: pageNumber });
export const setTotalUsersCount = count => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: count });
export const setIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });
