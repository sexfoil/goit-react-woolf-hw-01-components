import css from './FriendList.module.css';

const FriendList = props => {
  return (
    <ul className={css['friend-list']}>
      {props.friends.map(friend => (
        <li key={friend.id} className={css.item}>
          <span
            className={
              friend.isOnline ? css['status-online'] : css['status-ofline']
            }
          ></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
