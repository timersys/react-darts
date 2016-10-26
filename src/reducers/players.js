import update from 'react-addons-update';

function players(state = [], action) {

  switch( action.type ){

  	case 'ADD_USER_TO_GAME':
  		return [
  			...state,
  			action.user
  		];
    case 'REORDER_USERS':
      return action.sortedArray;

  	case 'REMOVE_USER':
      return [
        ...state.slice( 0, action.index ),
        ...state.slice( action.index + 1 ),
      ];

  	case 'SET_ALL_SCORE':
      let new_state = [...state];
      for( let player in new_state ){
          if( new_state[player].ID ) {
              new_state[player].score = action.user_score;
              new_state[player].shots = [];      
          }
      }
      return new_state;

    case 'SAVE_SHOT':
      return [
        ...state.slice( 0, action.user ),
        { ...state[action.user], shots: [...state[action.user].shots, action.shot] },
        ...state.slice( action.user + 1 ),
      ];

    case 'SAVE_SCORE':

      return [
        ...state.slice( 0, action.user ),
        { ...state[action.user], score: action.score },
        ...state.slice( action.user + 1 ),
      ];

  	default:
  		return state;
  }

}

export default players;
