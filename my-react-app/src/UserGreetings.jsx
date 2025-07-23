import PropTypes from "prop-types";
function UserGreetings(props) {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.username}</h2>
  );

  const loginPromt = <h2 className="login-prompt">Please login to continue</h2>;
  return props.isLoggedin ? welcomeMessage : loginPromt;
}

UserGreetings.PropTypes = {
  isLoggedin: PropTypes.bool,
  username: PropTypes.string,
};

UserGreetings.defaultProps = {
  isLoggedin: false,
  username: "Guest",
};

export default UserGreetings;
