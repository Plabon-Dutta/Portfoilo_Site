import logo from "../assets/JDP.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-12 w-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <FaLinkedin />
      <FaGithub />
      <FaInstagram />
      <TfiTwitter />
    </div>
  </nav>
};

export default Navbar;