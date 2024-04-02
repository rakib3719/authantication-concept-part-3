import { useContext, useRef, useState } from "react";
import { EmailAuthContext } from "../context/AuthContext";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";



const Login = () => {
const emailRef = useRef()
    const {logIn, forgetPassword } = useContext(EmailAuthContext)
    const [sucess, setSucess] = useState('')
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    const handle = e => {
        e.preventDefault();
        setSucess('')
        setError('')
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
        if(password < 6){
            setError("Password minimum 6 required")
            return
        }
        if(!/^(?=.*[A-Z]).+$/.test(password)){
            setError("Minimum 1 charachter should be uppercase")
            return
        }
        logIn(email, password)
        .then(result => {

            console.log(result.user)
        if(result.user.emailVerified){
          setSucess("Log In Sucessfully")
          e.target.reset()
        }

        else{

          alert("Plase verify your account")
          return;
        }
        })
        .catch (error => {
setError(error.message)
        })
        
    }

    // forget password 

    const forgetHandle = ()=> {

      const email = emailRef.current.value;
      forgetPassword(email);
      setSucess("Check Your Mail")
    }
    // forget password 
    return (
        <div>

           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
  
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handle} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input ref={emailRef} name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type={show ? "text" : "password"}placeholder="password" className="input input-bordered" required />
          <button className="absolute top-1/2 right-12" onClick={()=> {

setShow(!show)
}} >

{show ? <FaRegEyeSlash /> :<FaRegEye />}
</button>
          <label className="label">
            <a onClick={forgetHandle} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    
    {

        sucess && <p className="text-center text-green-700" >{sucess} </p>
    }
    {

        error && <p className="text-center text-red-700" >{error} </p>
    }

    </div>
  </div>
</div> 
        </div>
    );
};

export default Login;