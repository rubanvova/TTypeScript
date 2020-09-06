import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.wrapperNav}>
      <div className={styles.logo}>TypeScript ToDo </div>
      <div className={styles.href}>
        <NavLink to="/">info</NavLink>
        <NavLink to="/about">spicok</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
