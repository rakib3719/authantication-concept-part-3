
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';


export const EmailAuthContext = createContext(null)
const AuthContext = ({children}) => {

    const signUp = (email, password) => {
 return createUserWithEmailAndPassword( auth , email, password)
    }

    const logIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=> {

         return signOut(auth)
    }


    const [user, setUser] = useState(null)
    // user
    useEffect(()=> {

        const unsubcribe =  onAuthStateChanged(auth, currentUser => {

 setUser(currentUser)
})
return ()=> {unsubcribe()}


    }, [])


    // forget password 



    const forgetPassword = (password)=> {

        sendPasswordResetEmail(auth, password)
    }
    // forget password 
    // user

    const authInfo = {signUp, logIn, logOut, user, forgetPassword }
    return (
       <EmailAuthContext.Provider  value={authInfo}>

        {children}
       </EmailAuthContext.Provider>
    );
};

AuthContext.propTypes = {
    children: PropTypes.node
};

export default AuthContext;