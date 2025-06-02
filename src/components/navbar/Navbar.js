import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import { DataNav } from "./DataNav";
import { DefaultNav } from "./DefaultNav";

export const Navbar = (props) => {
  useEffect(() => {
    if (props.data) {
      props.setFlag(true);
    } else {
      props.setFlag(false);
    }
  }, [props]);

  return (
    <div className={styles.nav}>
      {props.showData ? (
        <DataNav
          data={props.data}
          setFlag={props.setShowData}
          reloadTime={props.reloadTime}
        />
      ) : (
        <DefaultNav />
      )}
    </div>
  );
};
