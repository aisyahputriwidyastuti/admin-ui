import React from 'react'
import Label from './Label'
import Input from './Input'


const LabeledInput = ({ label, name, type, placeholder, register }) => {

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} register={register} />
    </>
  );
};

export default LabeledInput;