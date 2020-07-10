import React from "react";

const Result = (props) => {
  const {
    error,
    city,
    temp,
    date,
    sunrise,
    sunset,
    pressure,
    wind,
  } = props.weather;

  return (
    <>
      <div>Pogoda dla: {city}</div>
      <div>Temperatura: {temp}</div>
    </>
  );
};

export default Result;
