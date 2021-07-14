import {renderEntireTree} from "./render"

let state = {
    profilePage: {
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
    },
    dialogsPage: {
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
                id:"1", 
                message:"Hi, bro!",
                src:"https://i.pinimg.com/originals/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
            },
            {
                name:"Natali", 
                id:"2", 
                message:"Hi, how are you?",
                src:"https://www.blast.hk/attachments/64805/"
            },
            {
                name:"Oksana", 
                id:"3", 
                message: "Amazing!!!",
                src:"https://i.pinimg.com/originals/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
            }
        ]
    },
    sidebar: {
        sidebarData: 
        [
            {name:"Natali", path:"2", src:"https://www.blast.hk/attachments/64805/"},
            {name:"Andrey", path:"3", src:"https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png"},
            {name:"Sveta", path:"4", src:"https://d3b4rd8qvu76va.cloudfront.net/926/273/020/-239996977-1tl3gsi-6qb96nnfdp8fnia/original/avatar.jpg"},
            {name:"Oksi", path:"5", src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1WI2hziPDHpkDeFIjtxC86g6P3oO9YrSAQ&usqp=CAU"},
        ]
    }
}

window.state = state

export default state;

export let addPost = () => {
    let newPost = {
        id: 3,
        text: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.postData.push(newPost);
    renderEntireTree(state);
    updateTextareaPost("Write your new post");
}

export let updateTextareaPost = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}
