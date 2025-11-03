import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsRenderer,
  Autocomplete,
} from "@react-google-maps/api";
import "./TripPlanner.css";
import Footer from "../../footer/footer";

import { FaBusAlt, FaSubway } from "react-icons/fa";
import { IoTrain } from "react-icons/io5";
import { FaTrainTram } from "react-icons/fa6";
import { MdDirectionsRailway } from "react-icons/md";
import Headerr from "../../header/header";
import ScrollUpButton from "../../button/ScrollUpButton";
import ScrollUpButtonCs from "../../button/ScrollUpButtonCs";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 3.139,
  lng: 101.6869,
};

const getTransitIcon = (type) => {
  switch (type) {
    case "BUS":
      return <FaBusAlt />;
    case "SUBWAY":
      return <FaSubway />;
    case "TRAIN":
      return <IoTrain />;
    case "TRAM":
      return <FaTrainTram />;
    case "RAIL":
      return <MdDirectionsRailway />;
    default:
      return <FaSubway />;
  }
};

const TripPlanner = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [directions, setDirections] = useState(null);
  const [directionsResult, setDirectionsResult] = useState(null);
  const [originAuto, setOriginAuto] = useState(null);
  const [destAuto, setDestAuto] = useState(null);

  const handlePlanTrip = () => {
    const originText = originAuto?.getPlace()?.formatted_address || origin;
    const destinationText =
      destAuto?.getPlace()?.formatted_address || destination;

    if (!originText || !destinationText) return;

    const service = new window.google.maps.DirectionsService();
    service.route(
      {
        origin: originText,
        destination: destinationText,
        travelMode: window.google.maps.TravelMode.TRANSIT,
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
          setDirectionsResult(result);
        } else {
          alert("No route found: " + status);
        }
      }
    );
  };

  const currentLeg = directionsResult?.routes?.[0]?.legs?.[0];
  const base = import.meta.env.BASE_URL;

  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      libraries={["places"]}
    >
      <div className="trip-planner-wrapper">
        <Headerr
          backgroundImage={`${base}assets/pub.jpg`}
          style={{ backgroundSize: "100vw" }}
        />
        <div className="bottom-button">
          <div className="scroll-up-button-container">
            <ScrollUpButton />
          </div>
          <div className="scroll-button-cs">
            <ScrollUpButtonCs />
          </div>
        </div>
        <h2 className="pub-text-1">Public Transport Planner</h2>

        <div className="trip-body">
          <div className="trip-sidebar">
            <div className="input-panel">
              <Autocomplete onLoad={setOriginAuto}>
                <input
                  placeholder="From"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                />
              </Autocomplete>
              <Autocomplete onLoad={setDestAuto}>
                <input
                  placeholder="To"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </Autocomplete>
              <button onClick={handlePlanTrip}>Plan Trip</button>
            </div>

            {currentLeg && (
              <div className="route-details">
                <h3>Route Details</h3>
                <p>
                  <strong>From:</strong> {currentLeg.start_address}
                  <br />
                  <strong>To:</strong> {currentLeg.end_address}
                  <br />
                  <strong>Duration:</strong> {currentLeg.duration.text}
                  <br />
                  <strong>Distance:</strong> {currentLeg.distance.text}
                </p>

                <ol>
                  {currentLeg.steps.map((step, index) => (
                    <li key={index}>
                      <div
                        dangerouslySetInnerHTML={{ __html: step.instructions }}
                      />
                      <small>
                        ({step.distance.text}, {step.duration.text})
                      </small>

                      {step.travel_mode === "TRANSIT" && step.transit && (
                        <div
                          className="transit-line"
                          style={{
                            borderLeft: `5px solid ${
                              step.transit.line.color || "#2196f3"
                            }`,
                            backgroundColor:
                              `${step.transit.line.color}20` || "#e9f4ff",
                          }}
                        >
                          <strong>
                            {getTransitIcon(step.transit.line.vehicle?.type)}{" "}
                            {step.transit.line.name}
                          </strong>{" "}
                          ({step.transit.line.short_name || "No code"})<br />
                          Vehicle: {step.transit.line.vehicle?.name || "N/A"}
                          <br />
                          Departure: {step.transit.departure_stop?.name} at{" "}
                          {step.transit.departure_time?.text}
                          <br />
                          Arrival: {step.transit.arrival_stop?.name} at{" "}
                          {step.transit.arrival_time?.text}
                          <br />
                          Stops: {step.transit.num_stops}
                          <br />
                          {step.transit.headsign && (
                            <>
                              Direction: {step.transit.headsign}
                              <br />
                            </>
                          )}
                          {step.transit.line.agencies?.[0]?.name && (
                            <>
                              Operator: {step.transit.line.agencies[0].name}
                              <br />
                            </>
                          )}
                          {step.transit.fare?.text && (
                            <>
                              Fare: {step.transit.fare.text}
                              <br />
                            </>
                          )}
                        </div>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          <div className="trip-map">
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={center}
              zoom={12}
            >
              {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
          </div>
        </div>

        <Footer />
      </div>
    </LoadScript>
  );
};

export default TripPlanner;
