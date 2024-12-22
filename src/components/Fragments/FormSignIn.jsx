import Button from "../Elements/Button";
import CheckBox from "../Elements/CheckBox";
import LabeledInput from "../Elements/LabeledInput";
import { useForm } from "react-hook-form";
import axios from "axios"; // Import axios
import { useState , useContext } from "react";
import CustomizedSnackbars from "../Elements/SnackBar";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const FormSignIn = () => {
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(true);
  const { setIsLoggedIn, setName } = useContext(AuthContext);
  const navigate = useNavigate ();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, // Ambil errors dari formState
  } = useForm({
    mode: "onChange",
  });

  const onFormSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://jwt-auth-eight-neon.vercel.app/login",
        {
          email: data.email,
          password: data.password,
        }
      );
      
      const decoded = jwtDecode (response.data.refreshToken);
      console.log(decoded);

      // console.log(response); // Log response jika berhasil
      setOpen(true);
      setMsg({ severity: "success", desc: "Login Success" });

      localStorage.setItem("refreshToken", response.data.refreshToken);

      setIsLoggedIn(true);
      setName(decoded.name);
      navigate("/");
      
    } catch (error) {
      if (error.response) {
        setOpen(true);
        setMsg({ severity: "error", desc: error.response.data.msg }); // Log error response jika ada
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="mb-6">
        <LabeledInput
          label="Email address"
          type="email"
          placeholder="hello@example.com"
          name="email"
          register={{
            ...register("email", {
              required: "Email address is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address format",
              },
            }),
          }}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>} {/* Tampilkan error */}
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
          register={{
            ...register("password", {
              required: "Password is required",
            }),
          }}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>} {/* Tampilkan error */}
      </div>
      <div className="mb-3">
        <CheckBox label="Keep me signed in" name="status" />
      </div>
      <Button
        variant={
          !isValid
            ? "bg-gray-05 w-full text-white"
            : "bg-primary w-full text-white"
        }
        type="submit"
        disabled={!isValid ? "disabled" : ""}
      >
        Login
      </Button>
      {msg && (
        <CustomizedSnackbars
          severity={msg.severity}
          message={msg.desc}
          open={open}
          setOpen={setOpen}
        />
      )}
    </form>
  );
};

export default FormSignIn;
