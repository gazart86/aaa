let reRender = () => {
   console.log('state changed');
}


export const state = {
   profilePage: {
      posts: [
         {id: 1, message: "It's first post",  like: 3, dlike: 0}, 
         {id: 2, message: "It's second post", like: 6, dlike: 1}, 
         {id: 3, message: "It's a last post", like: 9, dlike: 2}
      ],

      newPostText: 'hi-tech'
   },
   
   messagesPage: { 
      dialogs: [
         {id: 1, name: 'Artyom'}, 
         {id: 2, name: 'Artur'}, 
         {id: 3, name: 'David'}, 
         {id: 4, name: 'Narek'}, 
         {id: 5, name: 'Karen'}
      ],
      
      messages: [
         {id: 1, message: 'Good day everyone'}, 
         {id: 2, message: 'Artur is an actor'}, 
         {id: 3, message: 'David is a programmer'}, 
         {id: 4, message: 'Narek is a little boy'}, 
         {id: 5, message: 'Karen is a newborn chlid'}  
      ]
   },

   sidebar: {}
}

export const addPost = () => { 
   
   let newPost = {
      id: 4,
      message: state.profilePage.newPostText,
      like: 2,
      dlike: 0
   };

   state.profilePage.posts.push(newPost);

   reRender();
}

export const updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText;
   reRender();
}

export const subscribe = (observer) => {
   reRender = observer;
}