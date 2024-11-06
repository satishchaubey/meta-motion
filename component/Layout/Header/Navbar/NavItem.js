import Link from "next/link";
import classes from "./Navbar.module.css";


const NavItem = ({ text, href, active }) => {
  return (
    <Link rel="canonical" href={href} className={classes.button1}>
      {text}
    </Link>
  );
};

export default NavItem;
