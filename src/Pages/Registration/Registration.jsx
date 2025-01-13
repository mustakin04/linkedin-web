import React, { useState } from "react";
import sign_up from "../../assets/sign_up.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [nam, setName] = useState("");
  const [password, setPassword] = useState("");

  const [errorMail, setErrorMail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    let invalid = true;
    if (!email) {
      setErrorMail("Enter a Email");
      invalid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMail("Invalid email format.");
      invalid = false;
    } else {
      setErrorMail("");
    }
    if (!nam) {
      setErrorName("Enter a Full Name");
      invalid = false;
    } else {
      setErrorName("");
    }
    if (!password) {
      setErrorPassword("Enter a Password");
      invalid = false;
    } else if (!/(^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$)/.test(password)) {
      setErrorPassword(
        "Minimum eight characters, at least one letter and one number"
      );
      invalid = false;
    } else {
      setErrorPassword("");
    }
    if (invalid) {
      toast('🦄 Registration succesfully Done   ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: Bounce,
        });
    }
  };

  return (
    <div className="flex">
      <div className="w-[45%] mt-[200px] ml-[190px]">
        <div>
          <h1 className="font-poppins font-bold text-[34px] text-[#11175D] mb-[13px]">
            Get Started With easily register
          </h1>
          <p className="font-poppins font-normal text-[20px] text-[#000000]">
            Free register and you can enjoy it
          </p>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          // transition={Bounce}
        />
        {/* Email Address */}
        <div className="relative mt-[40px] mb-[34px]">
          <input
            onChange={handleEmail}
            value={email}
            type="email"
            className="w-[368px] border-[1px] border-[#b8bacf] py-[26px] pl-[15px] outline-none
          placeholder:font-poppins placeholder:font-semibold placeholder:text-[20px] placeholder:text-[#b8bacf]"
            placeholder="Enter your Email"
          />
          <p
            className="font-poppins font-semibold text-[13px] text-[#b8bacf] 
          absolute top-[-10px] left-[20px] bg-white px-[10px]"
          >
            Email Address
          </p>
          <h2>{errorMail}</h2>
        </div>
        {/* Name */}
        <div className="relative mt-[40px] mb-[34px]">
          <input
            value={nam}
            type="text"
            onChange={handleName}
            className="w-[368px] border-[1px] border-[#b8bacf] py-[26px] pl-[15px] outline-none
          placeholder:font-poppins placeholder:font-semibold placeholder:text-[20px] placeholder:text-[#b8bacf]"
            placeholder="Enter your Full Name"
          />
          <p
            className="font-poppins font-semibold text-[13px] text-[#b8bacf] 
          absolute top-[-10px] left-[20px] bg-white px-[10px]"
          >
            Full Name
          </p>
          <h3>{errorName}</h3>
        </div>
        {/* pasword */}
        <div className="relative mt-[40px] mb-[34px]">
          <input
            value={password}
            type="text"
            onChange={handlePassword}
            className="w-[368px] border-[1px] border-[#b8bacf] py-[26px] pl-[15px] outline-none
          placeholder:font-poppins placeholder:font-semibold placeholder:text-[20px] placeholder:text-[#b8bacf]"
            placeholder="Enter your Password"
          />
          <p
            className="font-poppins font-semibold text-[13px] text-[#b8bacf] 
          absolute top-[-10px] left-[20px] bg-white px-[10px]"
          >
            Password
          </p>
          <h4>{errorPassword}</h4>
        </div>
        <button
          onClick={handleSubmit}
          className="w-[368px] bg-[#5F35F5] font-poppins font-semibold text-[20px]
         text-white py-[20px] rounded-[86px]"
        >
          Sign up
        </button>
        <p className="font-poppins font-medium text-[13px] text-[#03014C] mt-[35px] ml-[60px]">
          Already have an account?
          <span className="text-[#EA6C00]">
            <Link to="/login">Sign in</Link>
          </span>
        </p>
      </div>
      <div className="w-[55%]">
        <img src={sign_up} alt="" className="w-full h-screen object-center " />
      </div>
    </div>
  );
};

export default Registration;
