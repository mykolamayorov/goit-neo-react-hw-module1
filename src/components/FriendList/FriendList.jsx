import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={styles.friendList}>
        {friends.map((friend) => {
          return (
            <li key={friend.id}>
              <FriendListItem friend={friend} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendList;
