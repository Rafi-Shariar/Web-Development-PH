import React, { useState } from "react";
import { createUserWithEmailAndPassword ,sendEmailVerification} from "firebase/auth";
import { auth } from "../../firebase.init";
import { Link } from "react-router";
const Register = () => {
  const [successMassage, setSuccessMassage] = useState(false);
  const [show, setShow] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.checkbox.checked;
    console.log(terms);

    setSuccessMassage(false);

    // firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setSuccessMassage(true);

        //email varification
        sendEmailVerification(auth.currentUser)
        .then(()=>{
            alert('varified');
        })

      })
      .then((error) => {
        console.log(error);
      });


  };

  return (
    <div className="p-10 border max-w-lg">
      <h1 className="text-2xl mb-5">Please Register</h1>
      <form onSubmit={handleRegister}>
        {/* email field */}
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            type="email"
            placeholder="mail@site.com"
            required
            name="email"
          />
        </label>
        <br />
        {/* Password */}
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <div>
            <input
              type={show ? "text" : "password"}
              required
              placeholder="Password"
              name="password"
            />
            {show ? (
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setShow(!show);
                }}
              >
                hide
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => {
                  setShow(!show);
                }}
              >
                show
              </button>
            )}
          </div>
        </label>
        <br />

        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4 my-10">
          <legend className="fieldset-legend">Terms & Conditions</legend>
          <label className="label">
            <input type="checkbox" className="checkbox" name="checkbox" />
            Except terms and conditions
          </label>
        </fieldset>

        <input
          className="btn btn-primary max-w-sm"
          type="submit"
          value="register"
        ></input>
      </form>

      <p>Already have an account? please <Link to='/login' className="text-blue-400 font-semibold">Login</Link></p>

      {successMassage && (
        <h1 className="text-green-600 font-semibold">
          User Registered Successfully
        </h1>
      )}
    </div>
  );
};

export default Register;
