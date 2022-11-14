import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// https://javascript.plainenglish.io/create-a-currency-converter-in-react-7e67ac290c39
class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const getTotalExpenses = () => {
      const total = (expenses.length === 0) ? 0 : expenses
        .reduce((accumulator, currentValue) => accumulator + currentValue.value
        * currentValue.exchangeRates[currentValue.currency].ask, 0);
      // console.log({ total });

      return total.toFixed(2);
    };
    // console.log('header', expenses);

    return (
      <header>
        <h1>Wallet</h1>
        <div data-testid="email-field">
          Email:
          { email }
        </div>
        <div>
          Total:
          <p data-testid="total-field">{getTotalExpenses()}</p>

        </div>
        <div data-testid="header-currency-field">
          Currency: BRL
        </div>
      </header>
    );
  }
}
Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
};

const mapStateToProps = (globalState) => ({
  email: globalState.user.email,
  expenses: globalState.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
