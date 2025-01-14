import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import sign_in from "../../assets/sin_in.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { adminInfo } from "../../Component/AdminInfo/AdminInfo";

const Login = () => {
  const auth = getAuth();
  const dispatch=useDispatch()
  // const navigate=useNavigate("")
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errmail, setErrMail] = useState("");
  const [errpassword, setErrPassword] = useState("");

  const [seePassword, setSeePassword] = useState(false);

  const handleMail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    let invalid = true;
    if (!mail) {
      setErrMail("Enter a Mail");
      invalid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
      setErrMail("Enter valid Mail");
      invalid = false;
    } else {
      setErrMail("");
    }
    if (!password) {
      setErrPassword("Enter a password");
      invalid = false;
    } else if (!/(^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$)/.test(password)) {
      setErrPassword(
        "Minimum eight characters, at least one letter and one number"
       
      );
      invalid = false;
    } else {
      setErrPassword("");
    }
    if (invalid) {
      signInWithEmailAndPassword(auth, mail, password)
        .then((user) => {
            const data=user.user
            if(!data.emailVerified){
                setErrMail("Please verify your email before logging in.");
                return;
            }
            console.log(user,"55")
          dispatch(adminInfo(user.user)) 
          localStorage.setItem("userLoginInfo",JSON.stringify(user.user))
          // Signed in
           toast("🦄 Registration succesfully Done   ", {
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
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorMessage.includes("auth/invalid-credential")){
            setErrMail("this mail is not your")
          }
          else{
            setErrMail("")
          }
        });
    }
  };
  return (
    <div>
      <div className="flex">
        <div className="w-1/2  ml-[147px] mt-[200px]">
          <h1 className="font-sans font-bold text-[34px] text-[#03014C]">
            Login to your account!
          </h1>
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
          <div className="flex w-[220px] h-[62px] border-[2px] border-[#cbcada] py-[22px] pl-[29px] my-[31px] ">
            <div className="w-[19px] h-[19px]  gap-[2px] ">
              {/* <FcGoogle /> */}
            </div>
            <p className="font-sans font-semibold text-[13px] text-[#03014C]">
              Login with Google
            </p>
          </div>
          {/* <ToastContainer /> */}
          <div className="border-b-[2px] w-[372px]">
            <p className="font-sans font-normal text-[13px] text-[#ababc4]">
              Email Addres
            </p>
            <input
              value={mail}
              type="email"
              onChange={handleMail}
              placeholder="Enter mail"
              className="border-none focus:outline-none placeholder-black"
            />
          </div>

          <p className="bg-red-500 font-sans font-normal text-[15px] w-[220px] rounded-[10px] ">
            {errmail}
          </p>
          <div className="relative border-b-[2px] w-[372px] mt-[56px]">
            <p className="font-sans font-normal text-[13px] text-[#ababc4]">
              Password
            </p>
            {seePassword ? (
              <FaEye
                onClick={() => setSeePassword(!seePassword)}
                className="absolute top-[10px] right-[10px] text-xl"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setSeePassword(!seePassword)}
                className="absolute top-[10px] right-[10px] text-xl"
              />
            )}

            <input
              value={password}
              type={seePassword ? "text" : "password"}
              onChange={handlePassword}
              placeholder="Enter your password"
              className="border-none focus:outline-none placeholder-black"
            />
          </div>
          <p className="bg-red-500 font-sans font-normal text-[15px] w-[220px] rounded-[10px] ">
            {errpassword}
          </p>

          <div className="w-[424px] h-[90px] mt-[56px] bg-[#5F34F5]">
            <button
              onClick={handleLogin}
              className="font-sans font-semibold text-[20px] text-white py-[19px] px-[113px]"
              href=""
            >
              Login to Continue
            </button>
          </div>
          <div className="w-[424px]  mt-[16px] bg-orange-300 ">
            <p className="text-center py-[12px]">
              <Link to="/forgetpassword"> Forget Password</Link>
            </p>
          </div>
          <div className="mt-[45px]">
            <p className="font-sans font-mixed text-[13px]">
              Don’t have an account ?
              <span className="font-sans font-mixed text-[13px] text-[#EA6C00]">
                <Link to="/registration"> Sign up</Link>
              </span>
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <img className="w-full h-screen object-center" src={sign_in} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
