import React from 'react'
import styles from "./profile.module.scss";
export const Profile = () => {
    return (
        <div className={styles.profile}>
      <h1>agent</h1>
      <div className={styles["profile-img"]}>
        <img src="path_to_image.jpg" alt="Profile Picture" />
      </div>
      <div className={styles["profile-details"]}>
        <p><strong>Name:</strong> sami</p>
        <p><strong>Email:</strong> salem</p>
        <p><strong>Location:</strong> New York, USA</p>
       
      </div>
      
    </div>
    )
}
export default Profile