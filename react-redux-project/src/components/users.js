import React from 'react';

class Users extends React.Component{
constructor(props){
  super(props);
  this.componentDidMount = this.componentDidMount.bind(this);
}
componentDidMount(){
  console.log(this.props)
}
  render(){
    return(
      <div>
        stufpfdjsa;fdsa
      </div>
      )
  }
}

export default Users;
