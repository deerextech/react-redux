import React from 'react';
import Button from './button';
import UserMap from './user-map';

class Users extends React.Component{
constructor(props){
  super(props);
}

  render(){
    const { data, fetchUsers } = this.props;
    return(
      <div className='container'>
        <Button onClick={fetchUsers} text={'Fetch Users'}/>
        <div id={'users'}>
          {data.users.map((user,i) =>{
            return <UserMap key={i} user={user}/>
          })}
        </div>
      </div>
      )
  }
}

export default Users;
