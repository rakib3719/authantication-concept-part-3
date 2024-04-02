import { useContext, useState } from "react";
import { EmailAuthContext } from "../context/AuthContext";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { GithubAuthProvider, GoogleAuthProvider, sendEmailVerification, signInWithPopup, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";


const SignUp = () => {
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()
const {signUp} = useContext(EmailAuthContext)
const [sucess, setSucess] = useState('')
const [error, setError] = useState('')
const [show, setShow] = useState(false)
const handle = e => { 
    e.preventDefault();
    setSucess('')
    setError('')
    const email = e.target.email.value
    const password = e.target.password.value
    const terms = e.target.terms.checked
    const name =  e.target.name.value

    console.log(terms);

    console.log(email, password);
    if(password < 6){
        setError("Password minimum 6 required")
        return
    }
    if(!/^(?=.*[A-Z]).+$/.test(password)){
        setError("Minimum 1 charachter should be uppercase")
        return
    }
    if(!terms){
        setError('Please accept our terms and conditon')
        return

    }
    signUp(email, password)
    .then(result => {

        console.log(result.user)


        setSucess("Sign Up Sucessfully")


        updateProfile(

          result.user, {
            displayName: name
          }
        )
        .then(result2 => {
          console.log(result2);
        })
        .catch(error => {
          console.log(error.message);
        })
        sendEmailVerification(result.user)
        .then(alert('Please check your email and verified'))
        .catch(error=> {
          alert(error.message)
        })
    })
    .catch (error => {
setError(error.message)
    })
    
}

// google sign up
const handleGoogle = ()=> {

  signInWithPopup(auth, googleProvider)
  .then(result => {
    console.log(result.user)
    setSucess("Sign Up sucessfully")
  })
  .catch(error => {
    console.log(error)
    setError(error.message)
  })
}
// google sign up

// GitHUb sign in 
const handleGithub = ()=> {
signInWithPopup(auth, githubProvider)
.then(result => {
  console.log(result.user)
  setSucess("Sign Up sucessfully")
})
.catch(error => {
  console.log(error)
  setError(error.message)
})

}
// GitHUb sign in 
    return (
        <div>
             <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
  
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handle} className="card-body">
        <div className="form-control">

        <label className="label">
            <span className="label-text">Name</span>
           
          
          </label>
          <input name="name" type="text" placeholder="Name" className="input input-bordered" required />




          <label className="label">
            <span className="label-text">Email</span>
           
          
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type={show ? "text" : "password"} placeholder="password" className="input input-bordered" required />

         

          <button className="absolute top-1/2 right-12" onClick={()=> {

setShow(!show)
}} >

{show ? <FaRegEyeSlash /> :<FaRegEye />}
</button>
          <label className="label">

            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>


      <div  className="flex gap-2" >
      <input  type="checkbox" name="terms" id="" /> <p>Accept Our terms and condtion</p>
      </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>

        <div>
        <button onClick={handleGoogle} className="btn bg-green-800 text-white w-full hover:text-black" >  Sign up with google </button>
        <button onClick={handleGithub} className="btn bg-black text-white w-full hover:text-black" >  Sign up with GitHub </button>
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
        </div>
    );
};

export default SignUp;