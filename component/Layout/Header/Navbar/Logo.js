
import Image from "next/image";

import clasess from "./Navbar.module.css";

const Logo = () => {
  return <div className={clasess.logo}><Image src="/images/p1-logo (1).png" alt="plutos One logo" width="20" height="40"></Image></div>;
};

export default Logo;