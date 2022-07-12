import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import { GlobalContext } from "../../context/GlobalState";
import styles from './Home.module.css';


const Home = () => {
  const { batteryDetails } = useContext(GlobalContext);
  const [alignData, setAlignData] = useState(1);
  const [batteries, setBatteries] = useState(batteryDetails);

  const sortable = (field, a, b) => {
    if (a[field] === null) {
      return 1;
    }

    if (b[field] === null) {
      return -1;
    }

    if (a[field] === b[field]) {
      return 0;
    }

    return a[field] < b[field] ? -1 : 1;
  };

  useEffect(() => {
    if (alignData === 1) {
      const data = batteryDetails
        ?.map((item) => item)
        .sort((a, b) => {
          sortable("id", a, b);
        });
      setBatteries(data);
    }
    if (alignData === 2) {
      const data = batteryDetails
        ?.map((item) => item)
        .sort((a, b) => sortable("location", a, b));
      setBatteries(data);
    }
    if (alignData === 3) {
      const data = batteryDetails
        ?.map((item) => item)
        .sort((a, b) => sortable("stateOfCharge", a, b));
      setBatteries(data);
    }
    if (alignData === 4) {
      const data = batteryDetails
        ?.map((item) => item)
        .sort((a, b) => sortable("connectionStatusId", a, b));
      setBatteries(data);
    }
  }, [alignData, batteryDetails]);


  return (
    <>
      <Navbar alignData={alignData} setAlignData={setAlignData} />
      <div className={styles.container} >
        {batteries.length > 0 &&
          batteries.map((item) => (
            <Card
              key={item.id}
              {...item}
              color={
                item.stateOfCharge < 20
                  ? "red"
                  : item.stateOfCharge < 50
                    ? "yellow"
                    : "green"
              }
            />
          ))}
      </div>
    </>

  );
};

export default Home;
