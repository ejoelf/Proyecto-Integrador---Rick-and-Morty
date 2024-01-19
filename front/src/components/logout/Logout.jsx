import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout({ onLogout }) {
  const navigate = useNavigate();

  useEffect(() => {
    onLogout();
    navigate("/");
  }, [onLogout, navigate]);

  return (
    <div>
      //Lograr hacer ver la imagen antes de salir
      <img src="../../assets/img/logout.jpeg" alt="logout" />
    </div>
  );
}

export default Logout;
