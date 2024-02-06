import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/action";
import { useNavigate } from "react-router-dom";

function Logout({ logout }) {
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/");
  }, [logout, navigate]);

  return (
    <div>
      {/* Aquí puedes mostrar cualquier contenido que desees, como una imagen */}
      <img src="../../assets/img/logout.jpeg" alt="logout" />
    </div>
  );
}

export default connect(null, { logout })(Logout);
