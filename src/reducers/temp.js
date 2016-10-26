import update from 'react-addons-update';

function temp(state = [], action) {

  switch( action.type ){

  	case 'SET_CURRENT':
      return {...state, currentPlayer : action.user }



  	case 'SET_WINNER':
      return {...state, winner : action.user, last_shot : action.last_shot }


  	default:
  		return state;
  }

}

export default temp;
