import React from "react";
import styles from "./Default.module.css";

export const DefaultNav = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.sidebar}>
        <h2 id={styles.title}>🌲 도봉계곡 실시간 정보 시스템</h2>
        <div className={styles.guide}>
          이 서비스는 <b>도봉계곡 상류 1곳, 하류 3곳</b>의 위치 정보를 지도에
          표시하고,
          <br />
          <strong>카카오맵 API</strong> 기반으로 각 지점을 쉽게 찾고 비교할 수
          있도록 만들었습니다.
          <br />
          <b>유속</b>, <b>수위</b>, <b>위험도</b>, <b>물의 급수</b>,{" "}
          <b>취사 가능 여부</b> 등 필요한 정보를 한눈에 안내합니다.
        </div>

        <div className={styles.container}>
          <h3>✨ 프로그램 주요 기능</h3>
          <ul>
            <li>
              <span className={styles.icon}>🗺️</span> 계곡별 위치(상류 1/하류 3) 마킹
            </li>
            <li>
              <span className={styles.icon}>🏷️</span> 각 지점의{" "}
              <strong>지번 주소·위도/경도·급수·취사 가능</strong> 정보 제공
            </li>
            <li>
              <span className={styles.icon}>⚡</span> 지점 클릭시 실시간{" "}
              <b>유속·수위·위험도</b> 표시
            </li>
            <li>
              <span className={styles.icon}>⏱️</span>{" "}
              <strong>10분마다 데이터 자동 갱신</strong>
            </li>
          </ul>
        </div>

        <div className={styles.container}>
          <h3>📝 이용 방법</h3>
          <ul>
            <li>
              지도 위 측정 지점(상류/하류 마커)을 클릭하면,{" "}
              <b>유속·수위·위험도 등 실시간 정보</b>가 패널에 상세히 표시됩니다.
            </li>
            <li>모든 데이터는 10분 간격으로 자동 갱신됩니다.</li>
            <li>
              불러오는 데이터값(기본 정보)은 최초 1회, 실시간값은 패널에서만
              표출됩니다.
            </li>
          </ul>
        </div>

        <div className={styles.warning}>
          ⚠️ <b>본 정보는 참고용입니다.</b>
          <br />
          실제 위험 상황에서는 반드시 현장 안전지침을 우선하세요.
          <br />
          <span style={{ color: "#ba1e1e" }}>
            (계곡, 강변 등 자연환경은 예기치 못한 위험이 있으니 항상 주의
            바랍니다.)
          </span>
        </div>
      </div>
    </div>
  );
};
