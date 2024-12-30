import Button from "../Elements/Button";
import CheckBox from "../Elements/CheckBox";
import LabeledInput from "../Elements/LabeledInput";
import { useForm } from "react-hook-form";
import axios from "axios"; // Import axios
import { useState , useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { NotifContext } from "../../context/notifContext";

const FormSignIn = () => {
  const { setMsg, setOpen } = useContext(NotifContext); // Ambil setMsg dan setOpen dari NotifContext
  const { setIsLoggedIn, setName } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, // Ambil errors dari formState
  } = useForm({
    mode: "onChange",
  });

  const onFormSubmit = async (data) => {
    setIsLoggedIn(true);
    try {
      const response = await axios.post(
        "https://jwt-auth-eight-neon.vercel.app/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      setIsLoggedIn(false);
      setOpen(true);
      setMsg({ severity: "success", desc: "Login Success" }); // Perbaiki kesalahan penulisan "syccess" menjadi "success"
      
      const decoded = jwtDecode(response.data.refreshToken);
      console.log(decoded);

      // Simpan refreshToken di localStorage
      localStorage.setItem("refreshToken", response.data.refreshToken);

      setIsLoggedIn(true);
      setName(decoded.name);
      navigate("/"); // Arahkan ke halaman utama setelah login
      
    } catch (error) {
      // Jika terjadi error, set loading ke false jika menggunakan setIsLoading
      // setIsLoading(false); // Uncomment jika Anda menambahkan setIsLoading

      if (error.response) {
        setOpen(true);
        setMsg({ severity: "error", desc: error.response.data.msg });
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
        variant={`!isValid
            ? "bg-gray-05" : "bg-primary zoom-in"}
            w-full text-white`}
        type="submit"
        disabled={!isValid ? "disabled" : ""}
      >
        Login
      </Button>
      {setMsg && (
        <CustomizedSnackbars
          severity={setMsg.severity}
          message={setMsg.desc}
          open={setOpen}
          setOpen={setOpen}
        />
      )}
    </form>
  );
};

export default FormSignIn;
