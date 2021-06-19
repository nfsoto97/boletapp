import { HOST}  from "../_shared/var.constant"
import axios from 'axios';

class LoginService{
  logear=async (user, pass) =>{
    // const {data, status} = await axios.post(
    //     `${HOST}/Login/login`,
    //     JSON.stringify([{username:user,password:pass}])
    //   );
  
    //   if (status === 200) {
    //     console.log(data,"data");
    //     //AsyncStorage.setItem(countryAsyncStorageKey, JSON.stringify(data));
    //   }

    var md5 = require('md5');
    
    const url =`${HOST}/Login/login`;
    return fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
     },
     body: JSON.stringify({username:user,password:md5(pass)}),
    }).then(res=>res.json());

  }
}
export default new LoginService();