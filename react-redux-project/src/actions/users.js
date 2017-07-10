import axios from 'axios';

//updated request to grab 16 users.
// ?results= X is the query for that business.

export default function fetchUsers() {
  return {
    type:'FETCH_USER',
    payload: axios.get("https://randomuser.me/api/?results=16")
  }
}
