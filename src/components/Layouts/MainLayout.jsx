import { useContext } from "react";
import { Header } from "../Fragments/Header";
import { Navbar } from "../Fragments/Navbar";
import { ThemeContext } from "../../context/themeContext";
import { NotifContext } from "../../context/notifContext";
import SimpleBackdrop from "../Elements/Backdrop";
import CustomizedSnackbars from "../Elements/SnackBar";


const MainLayout = (props) => {

    const { children } = props;
    const { msg, setMsg, open, setOpen, isLoading, setIsLoading } = useContext(NotifContext);
     const { theme } = useContext(ThemeContext);

    return (
      <div className={`flex bg-special-mainBg w-screen min-h-screen max-w-full ${theme.name}`}>
       {/* navbar start*/}
        <Navbar/>
        {/* navbar end*/}
        <div className="w-screen">
          {isLoading && (
            <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading}/>
          )}
          {msg && (
          <CustomizedSnackbars
          severity={msg.severity}
          message={msg.desc}
          open={open}
          setOpen={setOpen}
          />
          )}
        {/* header start*/}
        <Header/>
        {/* header end*/}  
        {/* content start*/}
        <main className="px-6 py-4">{children}</main>
        {/* content start*/}
        </div>
      </div>
    );
  };
  
  export default MainLayout;