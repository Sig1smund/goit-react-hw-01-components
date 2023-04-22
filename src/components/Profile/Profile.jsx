import PropTypes from 'prop-types';
import s from './profile.module.css';

export function Profile({ avatar, tag, location, username, stats }) {
  return (
    <div className={s.container}>
      <div className={s.profile}>
        <img src={avatar} alt={username} className="avatar" />
        <ul className={s.profileList}>
          <li className={s.profileItem}>{username}</li>
          <li className={s.profileItem}>@{tag}</li>
          <li className={s.profileItem}>{location}</li>
        </ul>
        <ul className={s.stats}>
          <li>
            <span className={s.label}>Followers</span>
            <span className={s.quantity}>{stats.followers}</span>
          </li>
          <li>
            <span className={s.label}>Views</span>
            <span className={s.quantity}>{stats.views}</span>
          </li>
          <li>
            <span className={s.label}>Likes</span>
            <span className={s.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
