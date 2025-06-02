import { useKakaoLoader } from "react-kakao-maps-sdk";

export const MapLoader = () => {
  useKakaoLoader({
    appkey: process.env.REACT_APP_MAP_API,
    libraries: ["clusterer", "drawing", "services"],
  });
};
