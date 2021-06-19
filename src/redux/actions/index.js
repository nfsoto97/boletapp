import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginService from '../../services/LoginService'




export const login = ({user, password}) => {
  return dispatch => {
    dispatch({
      type: 'LOADING',
      isLoading: true,
    });
    LoginService.logear(user,password).then(response=>{
      AsyncStorage.multiSet([
        ['username',response.username.toString()],
        ['empresa',response.empresa.toString()],
        ['id_empresa',response.id_empresa.toString()],
        ['id_usuario',response.id_usuario.toString()],
        ['token',response.token.toString()],
        ['id_empresa_padre',response.id_empresa_padre.toString()],
        ['emisor_dte',response.emisor_dte.toString()],
        ['id_entidad',response.id_entidad.toString()],
        ]);
      dispatch({
          type: 'LOGIN_IN',
        });
    }).catch(error=>{
      dispatch({
        type: 'LOADING',
        isLoading: false,
      });
    });
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};