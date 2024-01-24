import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import "./error.css";

function Error() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => navigate("/Home"), 2000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div>
      <img
        src="https://res.cloudinary.com/dpiy1qwcm/image/upload/v1684371895/Error_404_m6fj3t.gif"
        alt="Error404: Id no encontrado"
      />
    </div>
  );
}

export default Error;
