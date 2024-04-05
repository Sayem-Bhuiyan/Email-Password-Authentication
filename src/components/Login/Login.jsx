import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.confing";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [errorLogin, setErrorLogin] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef(null)

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setErrorLogin('');
        setSuccess('');


        // login users
        signInWithEmailAndPassword(auth , email, password)
        .then(userCredential => {
            console.log(userCredential.user);
            setSuccess('You have loged in Successfully')
        })
        .catch(error => {
            setErrorLogin(error.message);
        })
    }

    const handleForgotPassword = () => {
        const email = emailRef.current.value;
        if(!email){
            console.log('please enter an email');
            return;
        }
        else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            console.log('please provide a valid email');
            return;
        }

        sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log('Please check your email');
        })
        .catch(error => {
            console.log(error.message);
        })

    }

  return (
    <div className="mx-auto text-center">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form 
        onSubmit={handleLogin}
        className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              ref={emailRef}
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
              required
            />
            <label className="label">
              <a onClick={handleForgotPassword} href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          
          <div className="form-control mt-6">
            <input type="submit" value="Login"  className="btn btn-primary"/>
          </div>
          {
            errorLogin && <p className="text-xl text-red-500">{errorLogin}</p>
          }
          {
            success && <p className="text-xl text-green-500">{success}</p>
          }
          <span>New to this Website? <Link to='/register' className="underline" >Create an Account</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Login;
