import axios from 'axios'

const setAuthtoken = (token)=>{
if(token){
     axios.defaults.headers.common['x-auth-token'] = token
     //localStorage.setItem('token', token);
}
else{
      delete axios.defaults.headers.common['x-auth-token']
      //localStorage.removeItem('token');
}
}
export default setAuthtoken