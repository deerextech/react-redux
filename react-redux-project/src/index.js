import { render } from 'react-dom';
import React from 'react';
import Users from './containers/users';
import {Provider} from 'react-redux';
import UsersStore from './store';

//importing Provider//
//pass redux store to provider
//give provider child components (which are actually redux containers)
//These containers map state to props and give state to props in react components


render(
  <Provider store={UsersStore}>
    <Users />
  </Provider>,
  document.getElementById('app')
)
