let state = {

   posts: [
      {id: 1, message: "It's first post",  like: 3, dlike: 0}, 
      {id: 2, message: "It's second post", like: 6, dlike: 1}, 
      {id: 3, message: "It's a last post", like: 9, dlike: 2},    
   ],

   dialogs: [
      {id: 1, name: 'Artyom'}, 
      {id: 2, name: 'Artur'}, 
      {id: 4, name: 'David'}, 
      {id: 5, name: 'Narek'}, 
      {id: 6, name: 'Karen'},   
   ],
   
   messages: [
      {id: 1, message: 'Good day everyone'}, 
      {id: 2, message: 'Artur is an actor'}, 
      {id: 4, message: 'David is a programmer'}, 
      {id: 5, message: 'Narek is a little boy'}, 
      {id: 6, message: 'Karen is a newborn chlid'},   
   ]
}

export default state;