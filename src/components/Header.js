import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h1>Wallet</h1>
        <div data-testid="email-field">
          { email }
        </div>
        <div data-testid="total-field">
          0
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </header>
    );
  }
}
Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (globalState) => ({
  email: globalState.user.email,
});

export default connect(mapStateToProps)(Header);
