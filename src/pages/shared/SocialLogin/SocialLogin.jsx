import React from "react";
import { useContext } from "react";
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const {googleLogIn} = useContext(AuthContext);

    const handleGoogleLogIn = () => {
        googleLogIn()
        .then((result) => {
            const googleLogedUser = result.user;
            console.log(googleLogedUser);
            const saveUser = { name: googleLogedUser.displayName, email: googleLogedUser.email };
      console.log(saveUser);
      fetch("https://bistro-boss-server-liart.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
            navigate(from, {replace: true});
        });  
        })
    }
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button onClick={handleGoogleLogIn} className="btn btn-circle btn-outline">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
