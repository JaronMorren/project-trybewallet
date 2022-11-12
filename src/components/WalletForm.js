import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionFetchCurrency } from '../redux/actions';

// https://scrimba.com/learn/learnreact/forms-in-react-select-option-co83b466d859cf1d6c4b3efaf

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actionFetchCurrency());
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);

    return (
      <form>
        <label
          htmlFor="value-input"
        >
          Expense Value:
          <input
            type="number"
            data-testid="value-input"
            name="value-input"
          />
        </label>
        <label
          htmlFor="description-input"
        >
          Description:
          <input
            type="text"
            data-testid="description-input"
            name="description-input"
          />
        </label>
        <label htmlFor="currency">
          Currency:
          <select
            name="currency"
            id="currency"
            data-testid="currency-input"
          >

            {
              currencies.map((currency) => (
                <option
                  key={ currency }
                  value={ currency }
                >
                  { currency }
                </option>
              ))
            }
            {/* https://www.section.io/engineering-education/how-to-build-a-currency-converter-with-react-and-its-material-ui/ */}
          </select>
        </label>
        <label
          htmlFor="method-input"
        >
          <select data-testid="method-input">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label
          htmlFor="tag-input"
        >
          <select data-testid="tag-input">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}
WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired };

const mapStateToProps = (globalState) => ({
  currencies: globalState.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
