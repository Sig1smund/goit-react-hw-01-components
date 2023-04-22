import {Profile} from './Profile/Profile.jsx';
import {Statistics} from './Statistics/Statistics.jsx'
import {FriendsList} from './Friendslist/FriendsList.jsx';
import {TransactionHistory} from './TrasactionHistory/TransactionHistory.jsx';
import user from '../info/user';
import data from '../info/data';
import friends from '../info/friends'
import transactions from '../info/transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};