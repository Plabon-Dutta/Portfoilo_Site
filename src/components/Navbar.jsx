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
      <a href="https://www.linkedin.com/in/jayonto-dutta-plabon/"><FaLinkedin /></a>
      <a href="https://github.com/Plabon-Dutta"><FaGithub /></a>
      <a href="https://www.instagram.com/plabon.dutta/"><FaInstagram /></a>
      <a href="https://x.com/plabon__dutta"><TfiTwitter /></a>
    </div>
  </nav>
};

export default Navbar;