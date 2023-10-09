// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import { toast } from "react-toastify";
// import { setDoc, doc, serverTimestamp } from "firebase/firestore";
// import { db } from "../firebase.config";
// import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
// import visibilityIcon from "../assets/svg/visibilityIcon.svg";
// import OAuth from "../../components/OAuth";

// function SignUp() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const { name, email, password } = formData;

//   const navigate = useNavigate();

//   const onChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [e.target.id]: e.target.value,
//     }));
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const auth = getAuth();

//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );

//       const user = userCredential.user;

//       updateProfile(auth.currentUser, {
//         displayName: name,
//       });

//       const formDataCopy = { ...formData };
//       delete formDataCopy.password;
//       formDataCopy.timestamp = serverTimestamp();

//       await setDoc(doc(db, "users", user.uid), formDataCopy);

//       navigate("/");
//     } catch (error) {
//       toast.error("somthing is wrong somewhere");
//     }
//   };

//   return (
//     <>
//       <div className="pageContainer">
//         <header>
//           <p className="pageHeader">Welcome Back!</p>
//         </header>

//         <form onSubmit={onSubmit}>
//           <input
//             type="text"
//             className="nameInput"
//             placeholder="Name"
//             id="name"
//             value={name}
//             onChange={onChange}
//           />

//           <input
//             type="email"
//             className="emailInput"
//             placeholder="Email"
//             id="email"
//             value={email}
//             onChange={onChange}
//           />

//           <div className="passwordInputDiv">
//             <input
//               type={showPassword ? "text" : "password"}
//               className="passwordInput"
//               placeholder="password"
//               id="password"
//               value={password}
//               onChange={onChange}
//             />

//             <img
//               src={visibilityIcon}
//               alt="show password"
//               className="showPassword"
//               onClick={() => setShowPassword((prevState) => !prevState)}
//             />
//           </div>

//           <Link to="/forgot-password" className="forgotPasswordLink">
//             Forgot Password
//           </Link>

//           <div className="signUpBar">
//             <p className="signUpText">Sign Up</p>
//             <button className="signUpButton">
//               <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
//             </button>
//           </div>
//         </form>

//         <OAuth />

//         <Link to="/sign-in" className="registerLink">
//           Sign In Instead
//         </Link>
//       </div>
//     </>
//   );
// } border: 1px solid #F1F1F1

// export default SignUp;

import React, { useState } from "react";
import signside from "../../assets/signside.png";
import logo from "../../assets/Logo.png";
import visibilityIcon from "../../assets/visibilityIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api/base/index.js";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    tele: "",
    meterNumber: "",
    address: "",
  });
  const { name, email, password, tele, meterNumber, address } = formData;
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [avalid, setAvalid] = useState(true);
  const [bvalid, setBvalid] = useState(true);
  const [cvalid, setCvalid] = useState(true);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const checkA = (e) => {
    const mailregex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const ismailvalid = mailregex.test(email);
    if (!ismailvalid) {
      setAvalid(false);
    } else {
      setAvalid(true);
    }
  };
  const checkB = (e) => {
    const phoneregex = /^([0]{1})([7-9]{1})([0-1]{1})[0-9]{8}$/;
    const isphonevalid = phoneregex.test(tele);
    if (!isphonevalid) {
      setBvalid(false);
    } else {
      setBvalid(true);
    }
  };

  const checkC = (e) => {
    const meterregex = /^[A-Z]{1}[0-9]{1,3}$/;
    const ismetervalid = meterregex.test(meterNumber);
    if (!ismetervalid) {
      setCvalid(false);
    } else {
      setCvalid(true);
    }
  };

  //const [cpass, setCpass] = useState("");
  const checkpass = (value) => {
    if (password === value) {
      setIspassm(true);
    } else {
      setIspassm(false);
    }
  };

  const [ispassm, setIspassm] = useState(true);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    // console.log(formData);
  };
  // https://autopms.onrender.com/api/v1/auth/register
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      tele,
      meterNumber,
      address,
    };
    setLoading(true);

    try {
      const resp = await axios.post(
        "https://autopms.onrender.com/api/v1/auth/register",
        data
      );

      if (resp.data.message === "User created successfully") {
        toast.success("SignUp successful");
        setLoading(false);
        localStorage.setItem("user", JSON.stringify(resp.data.data));
        navigate("/user");
      }

      console.log(resp.data);
      console.log(resp.data.data);
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
              <form className="upform" onSubmit={onSubmit}>
                <label className="upbel">
                  {" "}
                  {/* Full Name: <br /> */}
                  <input
                    type="text"
                    className="nameInput upput"
                    placeholder="Full Name"
                    id="name"
                    value={name}
                    onChange={onChange}
                    // required={true}
                  />
                  <span className="errmessage"></span>
                </label>

                <label className="upbel">
                  {/* Email: <br /> */}
                  <input
                    type="email"
                    className="emailInput upput"
                    placeholder="Email"
                    id="email"
                    value={email}
                    onChange={onChange}
                    onBlur={checkA}
                    // required={true}
                  />
                  {!avalid && (
                    <span className="errmessage">email not valid</span>
                  )}
                </label>

                <label className="upbel">
                  {/* Password: <br /> */}
                  <div className="passwordInputDiv upput">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="passwordInput "
                      placeholder="password"
                      id="password"
                      value={password}
                      onChange={onChange}
                      // required={true}
                    />

                    <img
                      src={visibilityIcon}
                      alt="show password"
                      className="showPassword"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  </div>
                  <span className="errmessage"></span>
                </label>

                <label className="upbel">
                  {" "}
                  {/* PhoneNumber: <br /> */}
                  <input
                    type="string"
                    className="phoneInput upput"
                    placeholder=" phoneNumber/081xxxxxxxx"
                    id="tele"
                    value={tele}
                    onChange={onChange}
                    onBlur={checkB}
                    // required={true}
                  />
                  {!bvalid && (
                    <span className="errmessage">phone numer not valid</span>
                  )}
                </label>

                <label className="upbel">
                  {" "}
                  {/* Meter Number: <br /> */}
                  <input
                    type="string"
                    className="meterInput upput"
                    placeholder="Enter meter number"
                    id="meterNumber"
                    value={meterNumber}
                    onChange={onChange}
                    onBlur={checkC}
                    // required={true}
                  />
                  {!cvalid && (
                    <span className="errmessage">
                      Please enter a valid meter number
                    </span>
                  )}
                </label>

                <label className="upbel">
                  {" "}
                  {/* Address: <br /> */}
                  <textarea
                    type="textarea"
                    className="addressInput upput"
                    placeholder="please enter your home address"
                    id="address"
                    value={address}
                    onChange={onChange}
                    // required={true}
                  />
                </label>

                {/* confirmpassword last  */}

                <label className="upbel">
                  {/* Confirm Password: <br /> */}
                  <div className="passwordInputDiv upput">
                    <input
                      type={showCPassword ? "text" : "password"}
                      className="passwordInput "
                      placeholder="Confirm  password"
                      id="confirmpassword"
                      // value={cpass}
                      onChange={(e) => {
                        checkpass(e.target.value);
                      }}
                      // required={true}
                    />

                    <img
                      src={visibilityIcon}
                      alt="show password"
                      className="showPassword"
                      onClick={() =>
                        setShowCPassword((prevState) => !prevState)
                      }
                    />
                  </div>
                  {!ispassm && (
                    <span className="errmessage">passwords don't match</span>
                  )}
                </label>

                <div className="signUpBar">
                  <button type="submit" className="signButton">
                    <p className="signText">Register</p>
                  </button>
                </div>

                <div className="forgotcontainer">
                  <Link to="/signin" className="forgotPasswordLink">
                    <p className="instead"> LogIn instead?</p>
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

export default SignUp;
