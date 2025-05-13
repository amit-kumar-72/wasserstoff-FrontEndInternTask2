// src/components/Card.js
import PropTypes from 'prop-types';

const Card = ({ name, email, avatar }) => {
  return (
    <div className="user-card">
      {avatar && (
        <img src={avatar} alt={name} className="user-avatar object-cover" />
      )}
      <div className="card-content">
        <div className="card-title">{name}</div>
        <div className="card-body">{email}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

export default Card;
