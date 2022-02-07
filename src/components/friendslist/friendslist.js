import PropTypes from 'prop-types';
import FriendListItem from '../friendslist/friendslistitem';
import s from './friendslist.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendlist}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
          name={friend.name}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
