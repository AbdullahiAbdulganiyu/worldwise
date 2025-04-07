import { useState } from "react";

export function useGeolocation(defaultPosition = null) {
  const [isLoadingGeolocationPosition, setIsLoadingGeolocationPosition] =
    useState(false);
  const [geolocationPosition, setGeolocationPosition] =
    useState(defaultPosition);
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoadingGeolocationPosition(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGeolocationPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoadingGeolocationPosition(false);
      },
      (error) => {
        setError(error.message);
        setIsLoadingGeolocationPosition(false);
      }
    );
  }

  return {
    isLoadingGeolocationPosition,
    geolocationPosition,
    error,
    getPosition,
  };
}
