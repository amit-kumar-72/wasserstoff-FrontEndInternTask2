
import PropTypes from 'prop-types';
import Card from '../components/Card';

const UserListPage = ({ currentUser }) => {
  return (
    <div className="user-list-wrapper">
      <h1 className="heading">All Users</h1>
      <div className="user-grid">
        <Card
          name={currentUser.name}
          email={currentUser.email}
          avatar={currentUser.avatar}
        />
      </div>
    </div>
  );
};

UserListPage.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
};

export default UserListPage;
