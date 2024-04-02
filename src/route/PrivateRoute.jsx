
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { EmailAuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';




const PrivateRoute = ({children}) => {
    const {user} = useContext(EmailAuthContext)
    

   if(user){
    return children;
   }
   else{

   return <Navigate to='/login' ></Navigate>

   }
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;