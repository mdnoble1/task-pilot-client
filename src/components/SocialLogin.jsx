import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);

        navigate("/");
      })

      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "User Credentials Doesn't Match !",
          showClass: {
            popup: "animate_animated animate_fadeInDown",
          },
          hideClass: {
            popup: "animate_animated animate_fadeOutUp",
          },
        });
      });
  };

  return (
    <div>
      <p className="font-medium text-lg">Or You Can Use</p>
      <button
        onClick={handleLoginWithGoogle}
        className="btn btn-outline mt-4 text-[#13ab94] w-32"
      >
        <FaGoogle className="text-2xl"></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
