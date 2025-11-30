import styles from "./FriendListItem.module.css";

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <div className={styles.friend}>
      <img
        className={styles.friendAvatar}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p>{name}</p>
      {isOnline ? (
        <p className={styles.friendStatusOnline}>Online</p>
      ) : (
        <p className={styles.friendStatusOffline}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
