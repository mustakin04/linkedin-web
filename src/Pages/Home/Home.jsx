import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import bag from "../../assets/cover.jpg";
import profile from "../../assets/1682424226895-01.jpeg";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { FaPenAlt } from "react-icons/fa";
import { getAuth, updateProfile } from "firebase/auth";


const Home = () => {
    const auth = getAuth();
    
 

  const [userList, setUserList] = useState([]);
  const [show, setShow] = useState(false);
  const [school,setSchool]=useState()
  const db = getDatabase();
  const navigate = useNavigate();
  const data = useSelector((state) => state.details.userInfo);
  console.log(data)
  useEffect(() => {
    if (!data) {
      navigate("/login");
    }
  });
  useEffect(() => {
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      let arry = [];
      snapshot.forEach((item) => {
        arry.push(item.val());
      });
      setUserList(arry);
    });
  }, []);
  //   console.log(userList)
  const handleBio = () => {
    setShow(!show)
  };
  const handleInput=(e)=>{
      setSchool(e.target.value)
  }
   
 
  const handleSubmit = () => {
    const userId = auth.currentUser.uid; // Get the current user's UID
  
    // Save the school name and other user data to the database
    set(ref(db, 'users/' + userId), {
      username: auth.currentUser.displayName || "Anonymous",
      email: auth.currentUser.email || "No email provided",
      schoolName: school, // Use the state variable for the school name
    })
  }
  return (
    <div>
      <div className="relative">
        <img src={bag} alt="" className="w-full h-[300px] object-center" />
        <div
          className="w-[300px] h-[300px] bg-red-500 rounded-[50%] border-[4px] 
        border-[#cc1071] overflow-hidden absolute top-[150px] left-[150px]"
        >
          <img src={profile} alt="" className="overflow-hidden" />
        </div>
      </div>
      <div className="bg-[#0e1617] w-full h-screen">
        <div className="pt-[160px] pl-[150px]">
          <h1 className="font-poppins font-semibold text-[30px] text-white">
            Md Mustakin Hasan
          </h1>
          <p
            className="font-poppins font-normal text-[17px] text-[#b8bacf] 
            mt-[6px]"
          >
            Mustakin15-30072@duo.co
          </p>
          {/* <h3 className="font-poppins font-normal text-[17px] text-[#b8bacf] 
            mt-[6px]">{schoo}</h3> */}
          <div
            onClick={handleBio}
            className="flex items-center w-[140px] text-white bg-slate-600
            py-[6px] px-[8px] rounded"
          >
            <FaPenAlt />
            <button
              className="font-poppins font-semibold text-[20px]
           "
            >
              Add bio
            </button>
          </div>
          {show && (
            <div className="bg-yellow-300 w-[350px] h-[400px] py-[50px] px-[12px] rounded">
              <input
                onChange={handleInput}
                type="text"
                className="w-full py-[8px] pl-[10px] mb-[26px]"
                placeholder="enter school name"
              />
              <input
                type="text"
                className="w-full py-[8px] pl-[10px] mb-[26px]"
                placeholder="enter school name"
              />
              <input
                type="text"
                className="w-full py-[8px] pl-[10px] mb-[26px]"
                placeholder="enter school name"
              />
              <input
                type="text"
                className="w-full py-[8px] pl-[10px] mb-[16px]"
                placeholder="enter school name"
              />
              <button onClick={handleSubmit}
              className="w-full py-[8px] pl-[10px] mb-[16px]
               font-poppins font-semibold text-[20px] text-black bg-white">Submit</button>
            </div>

          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
