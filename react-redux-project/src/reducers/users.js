const initalState = {
  users:[],
  loading:false,
  error:null
}
// * ... spread operator *


// REDCUER
function usersReducer(state=initalState, action) {
  let user;

  switch (action.type) {
    case 'FETCH_USER_PENDING':
    //sends request
      return {...state, loading:true }
      break;
    case 'FETCH_USER_FULFILLED':
    users = actions.payload.data.results; //list of users given back from api.
      return {...state, loading:false, users}
    break;
    case 'FETCH_USER_REJECTED':
    //this case happens when promise is rejected.
    return {...state, loading:false, error: `${action.payload.message}`}
    default:
      return state
  }
}

export default usersReducer;
