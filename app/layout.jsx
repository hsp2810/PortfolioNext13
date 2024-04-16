import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { Josefin_Sans } from "next/font/google";
const inter = Josefin_Sans({ subsets: ["latin"] });
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Harshit Patel",
  description:
    "I am a Full stack developer and I enjoy learning new frameworks and building web applications which can solve problems",
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className={inter.className}>
          <ToastContainer
            position='bottom-left'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            theme='dark'
          />
          <Navbar />
          <div className='main_container flex items-center justify-center'>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
