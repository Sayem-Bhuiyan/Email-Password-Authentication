import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.confing";
import { useState } from "react";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";


const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);
        // reset error and success messages
        setRegisterError('')
        setSuccess('')
        
        
        if(password.length < 6) {
            setRegisterError('Password should be at least 6 characters');
            return;
        }
        else if(!(/[A-z]/.test(password))){
            setRegisterError('Your password should have at least one upperCase charecter')
            return;
        }


        // create a new users
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log(userCredential.user);
            setSuccess('User created Successfully')
        })
        .catch(error => {
            setRegisterError(error.message);
            
        })
    }
    console.log(registerError);
    return (
        <div>
            <div className="mx-auto md:w-1/2 space-y-5">
            <h2 className="text-3xl">Please Register</h2>
            <form onSubmit={handleRegister}>
                <input className="mb-4 md:w-3/4 px-4 py-3" type="email" name="email" placeholder="Enter Your Email" id="" required />
                <br />
                <div className="relative">
                <input 
                className="relative mb-4 md:w-3/4 px-4 py-3" 
                placeholder="Enter Password" 
                type={showPassword ? 'text' : 'password'}
                name="password" 
                id="" />
                <span onClick={() => setShowPassword(!showPassword)} className="cursor-default absolute right-48 top-4 text-xl">{
                    showPassword ? <IoMdEyeOff /> : <IoMdEye />
                }</span>
                </div>
                <br />
                <input className="mb-2 md:w-3/4 btn btn-secondary"  type="submit" value="Register" required />
            </form>
            {
                registerError && <p className="text-xl text-red-500 font-medium">{registerError}</p>
            }
            {
                success && <p className="text-xl text-green-500 font-medium">{success}</p>
            }
            </div>
        </div>
    );
};

export default Register;