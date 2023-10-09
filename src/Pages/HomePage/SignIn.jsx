//  import React, { useState } from "react";
// // import { toast } from "react-toastify";
// // import { Link, useNavigate } from "react-router-dom";
// // import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// // import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
// // import visibilityIcon from "../assets/svg/visibilityIcon.svg";
// // import OAuth from "../components/OAuth";

//  function Signin() {
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [formData, setFormData] = useState({
// //     email: "",
// //     password: "",
// //   });
// //   const { email, password } = formData;

// //   const navigate = useNavigate();

// //   const onChange = (e) => {
// //     setFormData((prevState) => ({
// //       ...prevState,
// //       [e.target.id]: e.target.value,
// //     }));
// //   };

// //   const onSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const auth = getAuth();

// //       const userCredential = await signInWithEmailAndPassword(
// //         auth,
// //         email,
// //         password
// //       );

// //       if (userCredential.user) {
// //         navigate("/");
// //       }
// //     } catch (error) {
// //       toast.error("Bad user credentials");
// //     }
// //   };

//   return (
//      <>
//        <div className="pageContainer">
//          <header>
//            <p className="pageHeader">Welcome Back!</p>
//          </header>

//          <form onSubmit={onSubmit}>
//            <input
// //             type="email"
// //             className="emailInput"
// //             placeholder="Email"
// //             id="email"
// //             value={email}
// //             onChange={onChange}
// //           />

// //           <div className="passwordInputDiv">
// //             <input
// //               type={showPassword ? "text" : "password"}
// //               className="passwordInput"
// //               placeholder="password"
// //               id="password"
// //               value={password}
// //               onChange={onChange}
// //             />

// //             <img
// //               src={visibilityIcon}
// //               alt="show password"
// //               className="showPassword"
// //               onClick={() => setShowPassword((prevState) => !prevState)}
// //             />
// //           </div>

// //           <Link to="/forgot-password" className="forgotPasswordLink">
// //             Forgot Password
// //           </Link>

// //           <div className="signInBar">
// //             <p className="signInText">Sign In</p>
// //             <button className="signInButton">
// //               <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
// //             </button>
// //           </div>
// //         </form>
// //         <OAuth />
// //         <Link to="/sign-up" className="registerLink">
// //           Sign Up Instead
// //         </Link>
// //       </div>
//      </>
//    );
//  }

//  export default Signin;

import React, { useState, useEffect } from "react";
import signside from "../../assets/signside.png";
import logo from "../../assets/Logo.png";
import visibilityIcon from "../../assets/visibilityIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";

function SignIn() {
  const [forminData, setForminData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = forminData;
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [avalid, setAvalid] = useState(true);
  const checkA = (e) => {
    const mailregex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const ismailvalid = mailregex.test(email);
    if (!ismailvalid) {
      setAvalid(false);
    } else {
      setAvalid(true);
    }
  };

  const onChange = (e) => {
    setForminData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    // console.log(forminData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email,
      password,
    };

    try {
      const resp = await axios.post(
        "https://autopms.onrender.com/api/v1/auth/login",
        data
      );

      if (resp.data.message === "Login successful") {
        toast.success(resp.data.message);
        setLoading(false);
        localStorage.setItem("user", JSON.stringify(resp.data.user));

        if (resp.data.user.name === "Drey") {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      }

      console.log(resp.data);
      console.log(resp);
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      }
      if (error.response.data.error) {
        toast.error(error.response.data.error);
      }
      console.log(error);
      setLoading(false);
    }
  };

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   // Check if the user is already logged in.
  //   if (localStorage.getItem("user")) {
  //     setIsLoggedIn(true);
  //   }
  //   if (isLoggedIn) {
  //     navigate("/user");
  //   }
  // }, []);

  return (
    <div className="signpage">
      <div className="signside">
        <img src={signside} alt="background" />
      </div>
      <div className="signmains">
        <div className="signform">
          <div className="formHead">
            <div className="formlogo">
              <img src={logo} alt="logo" />
              <p className="formtxt">APMS</p>
            </div>
            <div className="formtitle">
              {" "}
              Automatic Power Management <br /> System
            </div>
            {loading ? (
              <Spinner />
            ) : (
              <form className="upform informmt" onSubmit={onSubmit}>
                <label className="upbel">
                  Email: <br />
                  <input
                    type="email"
                    className="emailInput input"
                    placeholder="Email"
                    id="email"
                    value={email}
                    onChange={onChange}
                    onBlur={checkA}
                    required={true}
                  />
                  {!avalid && (
                    <span className="errmessage">email not valid</span>
                  )}
                </label>

                <label className="upbel">
                  Password: <br />
                  <div className="passwordInputDiv input">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="passwordInput "
                      placeholder="password"
                      id="password"
                      value={password}
                      onChange={onChange}
                      required={true}
                    />

                    <img
                      src={visibilityIcon}
                      alt="show password"
                      className="showPassword"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  </div>
                  <div className="forgotcontainer">
                    <Link to="/forgot-password" className="forgotPasswordLink">
                      Forgot Password?
                    </Link>
                  </div>
                </label>

                <div className="signInBar">
                  <button className="signButton">
                    <p className="signText">Log In</p>
                  </button>
                </div>

                <div className="forgotcontainer">
                  <Link to="/signup" className="forgotPasswordLink">
                    <p className="instead"> Don't have an account? Register!</p>
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
