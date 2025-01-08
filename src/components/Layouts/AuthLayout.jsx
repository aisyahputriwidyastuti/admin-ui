import React from 'react'
import Logo from '../Elements/Logo'
import { useContext } from 'react'
import { NotifContext } from '../../context/notifContext'
import { ThemeContext } from '../../context/themeContext'
import SimpleBackdrop from '../Elements/Backdrop'
import CustomizedSnackbars from '../Elements/SnackBar'
import { Link } from "react-router-dom"
import * as motion from "motion/react-client"

const AuthLayout = (props) => {
    const {children, type} = props;
    const { msg, setMsg, open, setOpen, isLoading, setIsLoading } =
    useContext(NotifContext);
    const { theme, darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className={`flex justify-center min-h-screen items-center ${darkMode ? 'bg-gray-900' : 'bg-special-mainBg'}`}>
      {isLoading && (
          <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />
      )}
      {msg && (
          <CustomizedSnackbars
          severity={msg.severity}
          message={msg.desc}
          open={open}
          setOpen={setOpen}
          />
      )}
      
      {/* Theme Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        style={{ color: theme.color }}
      >
        {darkMode ? (
          // Sun icon
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        ) : (
          // Moon icon
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </button>

      {/* container start */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className={`w-full max-w-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}
      >
        
        {/* logo start */}
        <Logo/>
        {/* logo end */}

        {/* form start */}
        <div className="mt-14">
          {children}
        </div>
        {/* form end */}

        {/* teks start */}
        {(type === "signin" || type === "signup") && (
          <div className={`my-9 px-7 flex justify-center text-xs ${darkMode ? 'text-gray-400' : 'text-gray-03'} items-center flex-col static`}>
            <div className={`border ${darkMode ? 'border-gray-700' : 'border-gray-05'} w-full`}></div>
            <div className={`px-2 ${darkMode ? 'bg-gray-900' : 'bg-special-mainBg'} absolute`}>
              or sign in with
            </div>
          </div>
        )}
        {/* teks end */}

        {/* sign in with google start */} 
        {(type === "signin" || type === "signup") && (
          <div className="mb-8">
            <button
              className={`h-12 flex items-center justify-center rounded-md text-sm w-full ${
                darkMode ? 'bg-gray-800 text-white' : 'bg-gray-05 text-gray-01'
              } hover:opacity-90 transition-opacity`}
              type="button"
            >
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="-0.5 0 48 48"
                version="1.1"
              >
                <title>Google-color</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Color-" transform="translate(-401.000000, -860.000000)">
                    <g id="Google" transform="translate(401.000000, 860.000000)">
                      <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"></path>
                      <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"></path>
                      <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"></path>
                      <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"></path>
                    </g>
                  </g>
                </g>
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>
        )}
        {/* sign in with google end */}

        {/* link start */}
        <div className="flex justify-center">
            {type === "signin" ? (
                <div className="flex flex-col">
                    <div className="flex justify-center">
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-03'}`}>
                          Already have an account?&nbsp;
                      </span>
                      <Link to='/register' style={{ color: theme.color }} className="text-sm font-bold">
                        Create an account
                      </Link>
                    </div>
                    <div className="flex justify-center mt-3">
                      <Link 
                        to='/forgotpassword' 
                        className={`text-sm font-bold ${darkMode ? 'text-gray-300' : 'text-gray-02'}`}
                      >
                        Forgot Password
                      </Link>
                    </div>
                </div>
            ) : type === "signup" ? (
              <Link to='/login' style={{ color: theme.color }} className="text-sm font-bold">
                Sign In Here
              </Link>
            ) : (
              <Link to='/login' className={`text-sm font-bold ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Back to login
              </Link>
            )}
        </div>
        {/* link end */}
      </motion.div>
      {/* container end */}
    </div>
  )
}

export default AuthLayout