import { HOST}  from "../_shared/var.constant"
import axios from 'axios';
import BoletaRestDto from "../model/BoletaRestDTO";

class BoletaService{
  generateBoleta=async (data) =>{
    
    const url =`${HOST}/Boletads/generateBoleta`;
    return fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
     },
     body: JSON.stringify(data),
    }).then(res=>res.json());

  }
}
export default new BoletaService();