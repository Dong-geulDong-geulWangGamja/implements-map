import React, { useEffect, useState } from "react";
import styles from "./Marker.module.css";
import { getRiskGrade, riskColor } from "../../utils/util";

export const Marker = (props) => {
  const [noticeColor, setNoticeColor] = useState();

  useEffect(() => {
    setNoticeColor(riskColor(props.info.totalRisk));
  }, [props]);

  return (
    <div className={styles.container}>
      <div className={styles.spot}>
        <span id={styles.name}>{props.info.name}</span>
        <span id={styles.addr}>{props.info.addr}</span>
      </div>
      <div className={styles.danger}>
        <span>위험도</span>
        <div className={`${noticeColor} ${styles.notice}`}>
          {getRiskGrade(props.info.totalRisk)}
        </div>
      </div>
    </div>
  );
};
