import React from "react";
import styles from './Navbar.module.css'
import { useNavigate } from 'react-router-dom';

const Navbar = ({ alignData, setAlignData }) => {

  const navigate = useNavigate();

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h2 onClick={() => navigate("/")} >BatteryInfo</h2>
      </div>
      <div className={styles.filter}>
        <select
          value={alignData}
          onChange={(e) => setAlignData(Number(e.target.value))}
          className={styles.Dropdown_control }
        >
          <optgroup className={styles.Dropdown_menu}>
          <option value="1">Id</option>
          <option value="2">Location</option>
          <option value="3">StateofCharge</option>
          <option value="4">ConnectionStatusId</option>
          </optgroup>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
