import React from 'react';

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: "",
    };
  }

  getInputValue = (e) => {
    this.setState({
        nome: e.target.value,
    })
  }

  render() {
    return (
      <section>
        <h1>Meu Formulario</h1>
        <form>
          <label>
            Seu Nome:
            <input type="text" value={this.state.name} onChange={this.getInputValue}></input>
          </label>
          <label>
            Seu Email:
            <input type="email"/>
          </label>
          <label>
            Seu Estado:
            <select>
              <option value="">SP</option>
              <option value="">RJ</option>
              <option value="">SC</option>
              <option value="">RS</option>
              <option value="">MG</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

export default Forms;