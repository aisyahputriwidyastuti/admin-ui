import LabeledInput from '../Elements/LabeledInput';
import CheckBox from '../Elements/CheckBox';
import Button from '../Elements/Button/index';
import { useForm } from "react-hook-form";
import axios from "axios";
import {useContext, useState} from "react";
import CustomizedSnackbars from '../Elements/SnackBar';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { NotifContext } from '../../context/notifContext';


const FormSignIn = () => {
  const { msg, setMsg, setOpen, setIsLoading } = useContext(NotifContext);
  const { setIsLoggedIn, setName } = useContext(AuthContext);
  // const [msg,setMsg] = useState("");
  // const [open, setOpen] = useState(true);
  // const { setIsLoggedIn, setName } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors,isValid },
  } = useForm({
    mode: "onChange",
  });

  const onFormSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://jwt-auth-eight-neon.vercel.app/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      setIsLoading(false);
      setOpen(true);
      setMsg({ severty: "success", desc: "Login Success"});
      
      setIsLoggedIn(true);
      localStorage.setItem("refreshToken", response.data.refreshToken);

      const decode = jwtDecode(response.data.refreshToken);
      setName(decode.name);

      navigate("/");

    } catch (error) {
      setIsLoading(false);

      if (error.response) {
        setOpen(true);
        setMsg( {severity: "error", desc : error.response.data.msg});
      }
    }
  };
  const onErrors = (errors) => console.error(errors);

  return (
    <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
      <div className="mb-6">
        <LabeledInput
          label="Email address"
          type="email"
          placeholder="hello@example.com"
          name="email"
          register={register("email", {
            required: "Email address is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address format",
            },
          })}
        />
        {errors?.email && (
          <div className="text-center text-red-500">{errors.email.message}</div>
        )}
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
          register={register("password", {
            required: "Password is required",
          })}
        />
        {errors?.password && (
          <div className="text-center text-red-500">{errors.password.message}</div>
        )}
      </div>
      <div className="mb-3">
        <CheckBox label="Keep me signed in" name="status" />
      </div>
      <Button 
        variant={`${!isValid ? "bg-gray-05" : "bg-primary zoom-in"}
                w-full text-white`}
      type="submit"
      disable={!isValid ? "disable" : ""}
      >
        Login
      </Button>
      {msg && (
        <CustomizedSnackbars
          severty={msg.severty}
          message={msg.desc}
          open={open}
          setOpen={setOpen}
        />
      )}
      {/* <div className="mt-3 text-center text-red-500">{msg}</div> */}
    </form>
  );
};

export default FormSignIn;
