import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './Card.module.css'

const Card = ({
  id,
  location,
  connectionStatusId,
  stateOfCharge,
  capacity,
  voltage,
  lastConnectionTime,
  stateOfHealth,
  recentIssues,
  color,
}) => {
  const navigate = useNavigate();

  const imageConfig = {
    green: "/images/green.jpg",
    yellow: "/images/yellow.jpg",
    red: "/images/red.jpg",
  };

  return (
    <div
      onClick={() => {
        navigate(`/${id}`);
      }}
      className={styles.container}
    >
      <div className={styles.title}>
        <i className="fa-solid fa-location-dot"></i>
        <h2>{location == null ? "N/A" : location}</h2>
      </div>

      <h3>
        Connection status Id:{" "}
        {connectionStatusId == null ? "N/A" : connectionStatusId}
      </h3>

      <h3>Capacity: {capacity == null ? "N/A" : capacity}</h3>
      <h3>Volatage: {voltage == null ? "N/A" : voltage}</h3>
      <h3>
        Last Connection Time:{" "}
        {lastConnectionTime == null ? "N/A" : new Date(lastConnectionTime).toLocaleDateString()}
      </h3>
      <h3>State Of Health: {stateOfHealth == null ? "N/A" : stateOfHealth}</h3>
      <h3>
        Recent Issues: {recentIssues.length === 0 ? "N/A" : recentIssues[0]}
      </h3>


      <div className={styles.status} >
        <div className={styles.alert} style={{ background: `url(${imageConfig[color]})`, width: stateOfCharge == null ? "0" : `${stateOfCharge}%` }} />

        <div className={styles.battery} />

        <div className={styles.percentage} >
          <span>{stateOfCharge != null ? `${stateOfCharge}%` : "NA"}</span>
        </div>

      </div>

    </div>
  );
};

export default Card;
