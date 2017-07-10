import { connect } from 'react-redux';
import Users from '../components/users';
import ferchUsers from '../actions/users'; //uses redux action.

const mapStateToProps = (state) =>({
  //return object
  data:state
});

//This will map property called fetchUswers into react component.
//And then I can call fetchUsers in said component
// And THAT will dispatch fetch users action.

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchUsers: () =>{
      display(fetchUsers()) //dispatch users action.
    }
  }
}
//can add to connect now.
const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

export default UsersContainer;
