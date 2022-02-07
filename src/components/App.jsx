import Profile from './profile/profile';
import Statistics from './statistics/statistics'
import FriendList from './friendslist/friendslist';
import TransactionHistory from './trasactions/transactionHistory';
import user from '../info/user';
import data from '../info/data';
import friends from '../info/friends'
import transactions from '../info/transactions'

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   textTransform: 'uppercase',
      //   color: '#010101',
      // }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
      
    </div>
  );
};
