const convertTemp = (temp: number | undefined, isCelsius: boolean) => {
  if (temp) {
    if (isCelsius) {
      return `${Math.round(temp)} °C`;
    } else {
      return `${Math.round(temp * 1.8 + 32)} °F`;
    }
  }
};

export default convertTemp;
