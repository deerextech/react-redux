import { connect } from 'react-redux';
import Users from '../components/users';

const mapStateToProps = (state) =>({
  //return object
  data:'Test'
});

const UsersContainer = connect(
  mapStateToProps,
)(Users)

export default UsersContainer;
