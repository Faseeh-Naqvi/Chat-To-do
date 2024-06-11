//provide whole user object
//if the user is logged in then there will be a boolean inside it which will be true.
//we will have login and logout functions

import {ReactNode, createContext, useContext, useEffect, useState} from 'react'

type User={
    name:string;
    email:string;

}
type UserAuth ={
    isLoggedIn:Boolean;
    user: User | null;//or null
    login:(email:string,password:string)=>Promise<void>;//dont want to retun anything from promise
    signup:(name:string,email:string,password:string)=>Promise<void>;
    logout:()=> Promise<void>;// need to remove cookies //once logout clicked, authentication cookies will be removed
}
const AuthContext = createContext<UserAuth|null>(null);


//provider for ^authcontext

export const AuthProvider = ({children}:{children: ReactNode})=>{
    const [user,setUser] = useState<User|null>(null);
    const[isLoggedIn,setIsloggedIn]= useState(false);


    //after user logs in. verifies user's cookies
    useEffect(()=>{
        //fetch if the users cookies are valid, then skip login
    },[])
    const login = async( email:string,password:string)=>{};
    const logout = async( )=>{};
    const signup = async( name:string,email:string,password:string)=>{};

    //provider needs to set the values used by the children:
    const value={
        user,
        isLoggedIn,
        login,
        logout,
        signup,
    };

    //need to return all of the stated to the children:
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    
};



export const useAuth = ()=> useContext(AuthContext);
