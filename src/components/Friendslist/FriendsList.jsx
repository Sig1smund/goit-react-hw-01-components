import PropTypes from 'prop-types';
import { FriendsListItem } from '../FriendsListItem/FriendsListItem';
import s from './friendsList.module.css';

export function FriendsList({ friends }) {
  return (
    <ul className={s.friendlist}>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
          name={friend.name}
        />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
