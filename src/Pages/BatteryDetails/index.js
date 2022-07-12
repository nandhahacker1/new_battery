import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from './BatteryDetails.module.css'
import StatusChart from "../../components/StatusChart";
import Navbar from '../../components/Navbar'

const BatteryDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  const img = {
    red: "/images/red.jpg",
    yellow: "/images/yellow.jpg",
    green: "/images/green.jpg",
    blue: "/images/blue.jpg",
  };

  const apiLink =
    "https://f2byongc84.execute-api.eu-central-1.amazonaws.com/webdev_test_fetch_batteries";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiLink}?id=${id}`);
      setData(response.data);
    };
    fetchData();
  }, [id]);

  console.log(data);

  return (
    <div>
      <Navbar />
      {data !== null && (
        <>
          <div className={styles.title}  >
            <i className="fa-solid fa-location-dot"></i>
            <h1>{data.location ? data.location : "N/A"}</h1>
          </div>
          <div className={styles.subTitle}>
            <h3>Capacity: {data.capacity}</h3>
            <h3>Voltage: {data.voltage}</h3>
            <h3>ConnectionStatusId: {data.connectionStatusId}</h3>
            <h3>LastConnectionTime: {data.lastConnectionTime}</h3>
          </div>

          <div className={styles.container}>
            <div className={styles.card} >
              <div className={styles.status} >
                <div className={styles.alert}
                  style={{ background: `url(${data.stateOfCharge < 20 ? img.red : data.stateOfCharge < 50 ? img.yellow : data.stateOfCharge < 101 ? img.green : ""})`, height: data.stateOfCharge == null ? "0" : `${data.stateOfCharge}%` }}
                />
                <div className={styles.battery} />
                <div className={styles.percentage} >
                  <span>
                    <i class="fa-solid fa-bolt"></i>
                  </span>
                </div>
              </div>
              <p>{data.stateOfCharge != null ? `${data.stateOfCharge}%` : "NA"}</p>
              <h4>Charge</h4>
            </div>


            <div className={styles.card} >
              <div className={styles.status} >
                <div className={styles.alert}
                  style={{ background: `url(${data.stateOfHealth < 20 ? img.red : data.stateOfHealth < 50 ? img.yellow : data.stateOfHealth < 101 ? img.green : ""})`, height: data.stateOfHealth == null ? "0" : `${data.stateOfHealth}%` }}
                />
                <div className={styles.battery} />
                <div className={styles.percentage} >
                  <span>
                    <i class="fa-solid fa-leaf"></i>
                  </span>
                </div>
              </div>
              <p>{data.stateOfHealth != null ? `${data.stateOfHealth}%` : "NA"}</p>
              <h4>Health</h4>
            </div>

            <div className={styles.card} >
              <div className={styles.status} >
                <div className={styles.alert}
                  style={{ background: `url(${img.blue})`, height: `99%` }}
                />
                <div className={styles.battery} />
                <div className={styles.percentage} >
                  <span>
                    <i class="fa-solid fa-plug"></i>
                  </span>
                </div>
              </div>
              <p>{data.connectionStatus != null ? `${data.connectionStatus}` : "NA"}</p>
              <h4>Connection</h4>
            </div>

            <div className={styles.card} >
              <div className={styles.status} >
                <div className={styles.alert}
                  style={{ background: `url(${img.yellow})`, height: `99%` }}
                />
                <div className={styles.battery} />
                <div className={styles.percentage} >
                  <span>
                    <i class="fa-solid fa-triangle-exclamation"></i>
                  </span>
                </div>
              </div>
              <p>{data.recentIssues.length}</p>
              <h4>Issues</h4>
            </div>
          </div>

          <div className={styles.chart} >
            <StatusChart chartData={data.measurements} />
          </div>
        </>
      )}
    </div>
  );
};

export default BatteryDetails;
