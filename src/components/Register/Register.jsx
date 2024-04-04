import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.confing";


const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // create a new users
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log(userCredential.user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <div className="mx-auto md:w-1/2 space-y-5">
            <h2 className="text-3xl">Please Register</h2>
            <form onSubmit={handleRegister}>
                <input className="mb-4 md:w-3/4 px-4 py-3" type="email" name="email" placeholder="Enter Your Email" id="" />
                <br />
                <input className="mb-4 md:w-3/4 px-4 py-3" placeholder="Enter Password" type="password" name="password" id="" />
                <br />
                <input className="mb-4 md:w-3/4 btn btn-secondary"  type="submit" value="Register" />
            </form>
            </div>
        </div>
    );
};

export default Register;