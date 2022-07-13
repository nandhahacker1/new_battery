import React, { useState } from "react";
import styles from './Navbar.module.css'
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setAlignData, setInputText }) => {

  const navigate = useNavigate();

  const [addCalss, setAddCalss] = useState(false)

  const handleAlign = (num) => () => {
    setAlignData(num)
  }

  const handleChange = (text) => {
    setInputText(text)
    if (text.length > 0) {
      setAlignData(7)
    }
    else{
      setAlignData(1)
    }
  }

  return (
    <>
      <div className={`${styles.navbar} ${styles.nav1} ${addCalss ? styles.responsive : ""}`}  >
        <div className={styles.logo}>
          <h2 onClick={() => navigate("/")} >BatteryInfo</h2>
        </div>

        <input type="text" placeholder="Search" autoFocus onChange={e => handleChange(e.target.value)} />

        <div className={styles.filter}>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>
              <span>Filter</span>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className={styles.dropdown_content}>
              <a href="#" onClick={handleAlign(1)}>Id</a>
              <a href="#" onClick={handleAlign(2)}>Location</a>
              <a href="#" onClick={handleAlign(3)}>ConnectionStatusId</a>
            </div>
          </div>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>
              <span>Filter</span>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className={styles.dropdown_content}>
              <a href="#" onClick={handleAlign(4)}>Normal</a>
              <a href="#" onClick={handleAlign(5)}>Low - High</a>
              <a href="#" onClick={handleAlign(6)}>High - Low</a>
            </div>
          </div>
        </div>



        <div href="#" className={styles.icon} onClick={() => setAddCalss(!addCalss)}  >
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>

      <div className={`${styles.navbar} ${styles.nav2} ${addCalss ? styles.responsive : ""}`}  >
        <div className={styles.logo}>
          <h2 onClick={() => navigate("/")} >BatteryInfo</h2>
        </div>

        <div className={styles.bottom} >
          <div className={styles.filter}>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>
                <span>Filter</span>
                <i className="fa fa-caret-down"></i>
              </button>
              <div className={styles.dropdown_content}>
                <a href="#" onClick={handleAlign(1)}>Id</a>
                <a href="#" onClick={handleAlign(2)}>Location</a>
                <a href="#" onClick={handleAlign(3)}>ConnectionStatusId</a>
              </div>
            </div>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>
                <span>Filter</span>
                <i className="fa fa-caret-down"></i>
              </button>
              <div className={styles.dropdown_content}>
                <a href="#" onClick={handleAlign(4)}>Normal</a>
                <a href="#" onClick={handleAlign(5)}>Low - High</a>
                <a href="#" onClick={handleAlign(6)}>High - Low</a>
              </div>
            </div>
          </div>
          <input type="text" placeholder="Search" autoFocus onChange={e => handleChange(e.target.value)} />
        </div>

        <div href="#" className={styles.icon} onClick={() => setAddCalss(!addCalss)}  >
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Navbar;
