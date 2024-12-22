import Button from "../Elements/Button";
import CheckBox from "../Elements/CheckBox";
import LabeledInput from "../Elements/LabeledInput";
import { useForm } from "react-hook-form";

const FormSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, // Ambil errors dari formState
  } = useForm({
    mode: "onChange",
  });

  const onFormSubmit = (data) => console.log(data);

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
      <Button variant={
        !isValid
        ? "bg-gray-05 w-full text-white"
        : "bg-primary w-full text-white"
        } 
        type="submit"
        disabled={!isValid ? "disabled" : ""}
        >
        Login
      </Button>
    </form>
  );
};

export default FormSignIn;
