import React, { useEffect, useRef, useState } from "react";
import { MapLoader } from "./utils/MapLoader";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Marker } from "./components/marker/Marker";
import { getData, getTotalData } from "./api/DataApi";
import { Navbar } from "./components/navbar/Navbar";
import { NavbarBtn } from "./components/navbar/NavbarBtn";

export const App = () => {
  MapLoader();
  const [defaultPlace, setDefaultPlace] = useState({
    lat: process.env.REACT_APP_DEFAULT_LAT,
    lng: process.env.REACT_APP_DEFAULT_LNG,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [toggleNav, setToggleNav] = useState(true);
  const [navStyle, setNavStyle] = useState({ left: "0" });
  const [selectedMarkerId, setSelectMarkerId] = useState(null);
  const [totalData, setTotalData] = useState([]);
  const [currentData, setCurrentData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState(false);
  const [reloadTime, setReloadTime] = useState(new Date());
  const [currentIdx, setCurrentIdx] = useState(null);
  const currentIdxRef = useRef(currentIdx);
  const [showData, setShowData] = useState(false);
  const reloadTimer = 1000;

  useEffect(() => {
    setReloadTime(new Date());
    getTotalData()
      .then((res) => {
        if (res.exists()) {
          setTotalData(res.val());
          setLoading(true);
        }
      })
      .catch((_err) => {
        setTotalData([]);
      });

    const interval = setInterval(reloadData, reloadTimer); //600000
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (toggleNav) {
      setNavStyle({ left: "0" });
    } else {
      setNavStyle({ left: "-350px" });
    }
  }, [toggleNav]);

  useEffect(() => {
    currentIdxRef.current = currentIdx;
  }, [currentIdx]);

  const togglePoint = (pointId) => {
    setIsOpen(true);
    setSelectMarkerId(pointId);
  };

  const reloadData = () => {
    getTotalData().then((res) => {
      if (res.exists()) {
        setTotalData(res.val());
      }
    });
    if (currentIdxRef.current != null) {
      getData(currentIdxRef.current)
        .then((res) => {
          if (res.exists()) {
            setCurrentData(res.val());
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setReloadTime(new Date());
  };

  const goLocation = (lat, lng) => {
    setDefaultPlace({
      lat: lat,
      lng: lng
    })
  }

  const getLoactionData = (idx) => {
    setNavStyle({ left: "0" });
    setToggleNav(true);
    setShowData(true);
    setCurrentIdx(idx);
    getData(idx)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setCurrentData(snapshot.val());
          goLocation(snapshot.val().lat, snapshot.val().lng);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return !loading ? (
    <div>loading..</div>
  ) : (
    <div className="app">
      <div className="nav" style={navStyle}>
        <Navbar
          data={currentData}
          flag={flag}
          setFlag={setFlag}
          showData={showData}
          setShowData={setShowData}
          reloadTime={reloadTime}
        />
        <NavbarBtn toggleNav={toggleNav} setToggleNav={setToggleNav} />
      </div>
      <Map
        id="map"
        center={{
          lat: `${defaultPlace.lat}`,
          lng: `${defaultPlace.lng}`,
        }}
        isPanto="true"
        style={{
          width: "100%",
          height: "100%",
        }}
        level={4}
      >
        {totalData.map((marker, _idx) => (
          <MapMarker
            key={`marker_${_idx}`}
            position={{
              lat: `${marker.lat}`,
              lng: `${marker.lng}`,
            }}
            clickable={true}
            onMouseOver={() => togglePoint(marker.id)}
            onMouseOut={() => setIsOpen(false)}
            onClick={() => getLoactionData(_idx)}
          >
            {isOpen && selectedMarkerId === marker.id && (
              <Marker info={marker} />
            )}
          </MapMarker>
        ))}
      </Map>
      <div className="current-location-btn" onClick={() => goLocation(process.env.REACT_APP_DEFAULT_LAT, process.env.REACT_APP_DEFAULT_LNG)}>
        <div className="current-btn-img" />
      </div>
    </div>
  );
};
