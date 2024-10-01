import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col mt-28">
      <h1 className="my-6 text-2xl">
        Contact
      </h1>
      <div className="flex flex-col w-[70%] gap-10">
        <p>If you're looking for someone passionate about improving lives through accessible design, let's connect! Reach out to me at</p>
        <span className="font-bold">
          dongpham21082001@gmail.com.
        </span>
      </div>
      <div className="flex gap-6 mt-6 pb-28">
        <Link to="https://www.linkedin.com/in/vandong-dev/" target="_blank" className="cursor-pointer">
          <FaLinkedin />
        </Link>
        <Link to="/" target="_blank" className="cursor-pointer">
          <FaFacebook />
        </Link>
        <Link to="https://github.com/dongpham2" target="_blank" className="cursor-pointer">
          <FaGithub />
        </Link>
      </div>
    </div>
  )
}

export default Footer