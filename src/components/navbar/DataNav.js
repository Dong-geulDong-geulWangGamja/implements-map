import React, { useEffect, useState } from "react";
import styles from "./DataNav.module.css";
import { getRiskGrade, riskColor } from "../../utils/util";

export const DataNav = (props) => {
  const [waterLvColor, setWaterLvColor] = useState();
  const [flowRateColor, setFlowRateColor] = useState();
  const [totalColor, setTotaltotalColor] = useState();
  const [data, setData] = useState(null);
  const [reloadTime, setReloadTime] = useState();

  useEffect(() => {
    setData(props.data);
    setWaterLvColor(riskColor(props.data?.waterLvRisk));
    setFlowRateColor(riskColor(props.data?.flowRateRisk));
    setTotaltotalColor(riskColor(props.data?.totalRisk));
  }, [props.data]);

  useEffect(() => {
    setReloadTime(props.reloadTime.toLocaleString());
  }, [props.reloadTime]);

  return (
    <div className={styles.dataNav}>
      <div className={styles.wrap}>
        <div className={styles.nav}>
          <button type="button" className={styles.panelClose}>
            <span aria-label="패널 닫기" onClick={() => props.setFlag(false)}>
              ✕
            </span>
          </button>
        </div>
        <div className={styles.img}>
          <img src={`img/info-${data?.id}.jpg`} alt="img" />
        </div>
        <div className={styles.panelContent}>
          <h2 className={styles.valleyTitle}>{data?.name}</h2>
          <div className={styles.valleyInfoGroup}>
            <span className={styles.valleyBadge}>주소</span>
            <span className={styles.valleyValue}>{data?.addr}</span>
          </div>
          <div className={styles.valleyInfoGroup}>
            <span className={styles.valleyBadge}>유속</span>
            <span className={styles.valleyValue}>
              {data?.flowRate} m/s
              <span
                className={`${styles.valleyDangerColor} ${flowRateColor}`}
              >
                {getRiskGrade(data?.flowRateRisk)}
              </span>
            </span>
          </div>
          <div className={styles.valleyInfoGroup}>
            <span className={styles.valleyBadge}>수위</span>
            <span className={styles.valleyValue}>
              {data?.waterLv} cm
              <span
                className={`${styles.valleyDangerColor} ${waterLvColor}`}
              >
                {getRiskGrade(data?.waterLvRisk)}
              </span>
            </span>
          </div>
          <div className={styles.valleyInfoGroup}>
            <span
              className={`${styles.valleyBadge} ${styles.valleyBadgeDanger}`}
            >
              총 위험도
            </span>
            <span className={styles.valleyValue}>
              <span
                className={`${styles.valleyDangerColor} ${totalColor}`}
              >
                {getRiskGrade(data?.totalRisk)}
              </span>
            </span>
          </div>
          <div className={styles.cautionMessage}>
            <span className={styles.cautionIcon}>⚠️</span>
            <div className={styles.cautionTitle}>본 정보는 참고용입니다.</div>
            <div className={styles.cautionDetail}>
              실제 위험 상황에서는 반드시 현장 안전지침을 우선하세요.
              <br />
              (계곡, 강변 등 자연환경은 예기치 못한 위험이 있으니 항상 주의
              바랍니다.)
            </div>
          </div>
          <div className={styles.valleyUpdated}>
            정보 갱신 <span>{reloadTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
