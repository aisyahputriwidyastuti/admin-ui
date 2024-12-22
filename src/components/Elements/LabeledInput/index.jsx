const Input = ({ name, type, placeholder, register}) => {
  const variant = "bg-special-mainBg border border-gray-03";

  return (
    <input 
    type={type}
    className={`${variant} py-3 ps-4 text-sm rounded-md w-full text-gray-01 focus:border-black`}
    placeholder={placeholder}
    name={name}
    id={name}
    {...register}/>
  );
};
export default Input;