// Add user to game in playerpicker
export function addPlayer( name, user ) {
  return {
    type: 'ADD_USER_TO_GAME',
    name,
    user
  }
}
// Add user to game in playerpicker
export function orderPlayer( sortedArray ) {
  return {
    type: 'REORDER_USERS',
    sortedArray
  }
}

// Remove user from playerpicker
export function removePlayer( index, user ) {
  return {
    type: 'REMOVE_USER',
    index,
    user
  }
}

export function saveShot( shot, user ) {
  return {
    type: 'SAVE_SHOT',
    shot,
    user
  }
}

export function saveScore( score, user ) {
  return {
    type: 'SAVE_SCORE',
    score,
    user
  }
}

export function setCurrent( user ) {
  return {
    type: 'SET_CURRENT',
    user
  }
}

export function setWinner( user, last_shot ) {
  return {
    type: 'SET_WINNER',
    user,
    last_shot
  }
}

export function setAllScore( user_score ) {
  return {
    type: 'SET_ALL_SCORE',
    user_score
  }
}
