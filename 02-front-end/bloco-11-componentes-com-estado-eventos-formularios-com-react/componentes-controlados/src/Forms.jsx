import React from 'react';
import Nome from './Nome'

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      estado: "",
    };
  }

  getInputValue = ({target}) => {
    const {name} = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
        [name]: value,
    })
  }

  render() {
    return (
      <section>
        <h1>Meu Formulario</h1>
        <form>
          <Nome value={this.state.name} onChange={this.getInputValue}/>
          <label>
            Seu Email:
            <input type="email"
            name="email"
            value={this.state.email}
            onChange={this.getInputValue} />
          </label>
          <label>
            Seu Estado:
            <select 
            name="estado"
            value={this.state.estado}
            onChange={this.getInputValue}>
              <option>SP</option>
              <option>RJ</option>
              <option>SC</option>
              <option>RS</option>
              <option>MG</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

export default Forms;