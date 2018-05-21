import React from "react";

const temperatureComponent = props => {
  function convertToCelcius(temp) {
    const inputTemp = parseInt(temp, 10);
    const convertTemp = (inputTemp - 32) * 5 / 9;
    const outputTemp = convertTemp.toFixed(0);

    return outputTemp;
  }

  const { temperature, isCelcius } = props;

  // eslint-disable-next-line
  if (!props.styling) {
    const styling = "";
  } else {
    const { styling } = props;
  }

  return isCelcius === true ? (
    <p className={props.styling}>{convertToCelcius(temperature)} °C</p>
  ) : (
    <p className={props.styling}>{temperature.toFixed(0)} °F</p>
  );
};

export default temperatureComponent;
