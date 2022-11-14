import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// https://www.geeksforgeeks.org/how-to-build-an-html-table-using-reactjs-from-arrays/
class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <h2>Table</h2>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        <tbody>
          {expenses.length !== 0 // check if expenses is empty, if so, then map following elements.
          // https://stackoverflow.com/questions/54284873/render-a-table-body-in-react-using-the-map-function
          && expenses.map((element) => (
            <tr key={ element.id }>
              <td>{element.description}</td>
              <td>{element.tag}</td>
              <td>{element.method}</td>
              <td>{Number(element.value).toFixed(2)}</td>
              <td>{element.exchangeRates[element.currency].name}</td>
              <td>
                {Number(element.exchangeRates[element.currency].ask)
                  .toFixed(2)}
              </td>
              <td>
                {Number((element.value
                * element.exchangeRates[element.currency].ask).toFixed(2))}
              </td>
              <td>BRL</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (globalState) => ({
  expenses: globalState.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps)(Table);
