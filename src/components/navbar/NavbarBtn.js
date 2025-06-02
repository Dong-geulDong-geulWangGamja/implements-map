import React from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export const NavbarBtn = (props) => {
  return (
    <div className={styles.wrap}>
      <div
        className={styles.btn}
        onClick={() => props.setToggleNav(!props.toggleNav)}
      >
        {props.toggleNav ? (
          <FontAwesomeIcon icon={faCaretLeft} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faCaretRight} size="lg" />
        )}
      </div>
    </div>
  );
};
