import React from "react";

const temperatureComponent = props => {
  function convertToCelcius(temp) {
    const inputTemp = parseInt(temp, 10);
    const convertTemp = (inputTemp - 32) * 5 / 9;
    const outputTemp = convertTemp.toFixed(0);

    return outputTemp;
  }

  const { temperature, isCelcius } = props;

  return isCelcius === true ? (
    <p>{convertToCelcius(temperature)}</p>
  ) : (
    <p>{temperature}</p>
  );
};

export default temperatureComponent;
