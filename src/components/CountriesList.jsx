/* eslint-disable react/prop-types */
import Spinner from "./Spinner";
import Message from "./Message";
import CityItem from "./CityItem";
import styles from "./ContriesList.module.css";

function ContriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking a city on the map" />
    );
  return (
    <ul className={styles.contriesList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default ContriesList;
