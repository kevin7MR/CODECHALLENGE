import {createContext, useState, useEffect} from 'react';
import {Token} from "../Api/Token"
import {User} from "../Api/services"

const tokenCtrl = new Token();
const userCtlr = new User();
export const AuthContex = createContext();
export  function AuthProvider(props) {
    const {children}=props;    

    
    const [user, setUser] = useState(null);  
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
      (async ()=>{
       const token = tokenCtrl.getToken();
       if (!token){
         logout();
         setLoading(false);
         return;
       }

       if (tokenCtrl.hasExpired(token)) {
         logout();
       } else{
         await login(token);
         }
       } )();
   },[] );


    const login =async (token) =>{
        try {
           
            tokenCtrl.setToken(token)
            const response=await userCtlr.GetUser();  
            setUser(response);
            setToken(token);
            setLoading(false);
            
        }catch (error){
        console.error(error);
        setLoading(false);
        }
    };

    const logout = () =>{
      tokenCtrl.removeToken();
      setToken(null);
      setUser(null);
      
    };
    
    const data ={
        accessToken:token ,
        user,
        login,
        logout,
        updateUser:null,
    };
    if (loading) return null;

    

  return (
    <AuthContex.Provider value={data}>
     {children}
    </AuthContex.Provider>
  );
}
