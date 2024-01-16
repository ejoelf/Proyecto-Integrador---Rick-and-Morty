import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Error() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/home"), 2000);
  }, []);

  return (
    <img
      src="https://res.cloudinary.com/dpiy1qwcm/image/upload/v1684371895/Error_404_m6fj3t.gif"
      alt="Error404"
    />
  );
}

export default Error;
