import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
//I am importing the CSS file from node_module/dist/leaflet css. because fixed broken in map=====
//if we import something from node_module, we need to import it like this
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Coverage = () => {
  //i am using in position latitude and longitude
  const position = [23.8103, 90.4125];
  //I am getting data from route.jsx
  const serviceCenters = useLoaderData();
  console.log(serviceCenters);

  //when user search country name  then go useRef
  const mapRef = useRef(null);
  //search work implement
  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    console.log(location);
    const district = serviceCenters.find((c) =>
      //Use includes to see if what the user writes is input
      c.district.toLowerCase().includes(location.toLowerCase()),
    );

    //if form district
    if (district) {
      const coord = [district.latitude, district.longitude];
      console.log(district, coord);
      //zoom 14
      //this line interesting go to the location
      mapRef.current.flyTo(coord, 14);
    }
  };
  return (
    <div>
      <h2 className="text-5xl">We are available in 64 districts</h2>
      <div>
        {/* search  */}
        <form onSubmit={handleSearch}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow" name="location" placeholder="Search" />
          </label>
        </form>
      </div>
      {/*  */}
      <div className="border w-full h-[800px]">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[800px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br /> Service Area:{" "}
                {center.covered_area.join(", ")}.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
