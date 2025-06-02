import { useKakaoLoader } from "react-kakao-maps-sdk";

export const MapLoader = () => {
  useKakaoLoader({
    appkey: "ce943377323e1f8d6874872c1899bc3e",
    libraries: ["clusterer", "drawing", "services"],
  });
};
