import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userInformationAction } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisabled: true,
  };
  // https://userfront.com/guide/build-login-form-react#email-or-username-field

  handleInputChange = (event) => {
    const { target } = event;
    this.setState({
      [target.name]: target.value,
    }, () => this.verifyInput());
  };

  verifyInput = () => {
    if (this.isValidEmail() && this.isValidPassword()) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  };

  // https://bobbyhadz.com/blog/react-check-if-email-is-valid#:~:text=To%20validate%20an%20email%20in,is%20valid%20and%20false%20otherwise.&text=Copied!

  isValidEmail = () => {
    const { email } = this.state;
    return /\S+@\S+\.\S+/.test(email);
  };

  // https://codesandbox.io/s/react-password-length-validator-bqq4t?file=/src/index.js

  isValidPassword = () => {
    const { password } = this.state;
    const minimumLength = 6;
    return password.length >= minimumLength;
  };

  // https://bobbyhadz.com/blog/react-disable-button

  handleClick = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(userInformationAction(email));
    history.push('/carteira');
  };

  // https://userfront.com/guide/build-login-form-react#email-or-username-field

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <div>
        Login
        <form>
          <label htmlFor="email">
            Email
            <input
              name="email"
              type="text"
              data-testid="email-input"
              value={ email }
              onChange={ this.handleInputChange }
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              name="password"
              type="password"
              data-testid="password-input"
              value={ password }
              onChange={ this.handleInputChange }
            />
          </label>
          <button
            type="button"
            onClick={ this.handleClick }
            disabled={ isDisabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps)(Login);
