/**
 * Reduce takes in 2 things, the action and a copy of current state
 * @param  {Array}  state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
function users(state = [], action) {
 
  switch( action.type ){

  	case 'ADD_USER_TO_GAME':
  		return [
  			...state.filter( e => {return e.ID != action.user.ID} )
  		];

   	case 'REMOVE_USER':	
      return [
        ...state,
        action.user
      ];
  		 		
  	default:
  		return state;
  }
}

export default users;
