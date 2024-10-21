import React from 'react'
import { ForgotPassword } from '../components/Fragments/ForgotPassword';
import Authlayout from '../components/Layouts/AuthLayout';


export const ForgotPw = () => {
  return (
    <Authlayout type="forgotpassword">
    <ForgotPassword/>
  </Authlayout>
  );
};