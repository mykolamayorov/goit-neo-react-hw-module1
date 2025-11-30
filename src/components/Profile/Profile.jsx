import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.userProfile}>
      <div className={styles.userInfo}>
        <img className={styles.userPicture} src={image} alt="User avatar" />
        <p className={styles.userName}>{name}</p>
        <p className={styles.userTag}>@{tag}</p>
        <p className={styles.userLocation}>{location}</p>
      </div>

      <ul className={styles.userStats}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
