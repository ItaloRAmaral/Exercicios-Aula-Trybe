import React from "react";
import FormsImpresso from "./FormsImpresso";

const estadoInicial = {
  name: "",
  email: "",
  cpf: "",
  endereco: "",
  cidade: "",
  estado: "SP",
  curriculo: "",
  cargo: "",
  descricaoCargo: "",
  enviado: false,
};

class Forms extends React.Component {
  constructor() {
    super();

    this.state = estadoInicial
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
        enviado: true,
    })
  };

  resetForms = () => {
      this.setState(estadoInicial);
  }


  render() {
      const {
        name,
        email,
        cpf,
        endereco,
        cidade,
        estado,
        curriculo,
        cargo,
        descricaoCargo,
        enviado,
      } = this.state;

    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Informações Pessoais</legend>
            <label htmlFor="nameInput">Name:</label>
            <input
              type="text"
              name="name"
              maxLength="40"
              id="nameInput"
              value={name}
              onChange={this.handleChange}
            />

            <label htmlFor="emailInput">Email:</label>
            <input
              type="email"
              name="email"
              id="emailInput"
              maxLength="50"
              value={email}
              onChange={this.handleChange}
            />

            <label htmlFor="cpfInput">CPF:</label>
            <input
              type="text"
              name="cpf"
              id="cpfInput"
              maxLength="11"
              value={cpf}
              onChange={this.handleChange}
            />

            <label htmlFor="endInput">Endereço</label>
            <input
              type="text"
              name="endereco"
              id="endInput"
              maxLength="200"
              value={endereco}
              onChange={this.handleChange}
            />

            <label htmlFor="cidadeInput">Cidade:</label>
            <input
              type="text"
              name="cidade"
              id="cidadeInput"
              maxLength="28"
              value={cidade}
              onChange={this.handleChange}
            />

            <label htmlFor="estadoInput">Estado:</label>
            <select
              id="estadoInput"
              name="estado"
              value={estado}
              onChange={this.handleChange}
            >
              <option>SP</option>
              <option>PR</option>
              <option>SC</option>
              <option>RS</option>
              <option>MG</option>
            </select>
          </fieldset>

          <fieldset>
            <legend>Ultimo Emprego</legend>
            <label htmlFor="curriculoInput">Resumo do Curriculo</label>
            <textarea
              id="curriculoInput"
              name="curriculo"
              value={curriculo}
              onChange={this.handleChange}
            ></textarea>

            <label htmlFor="cargoInput">Cargo</label>
            <input
              type="text"
              id="cargoInput"
              name="cargo"
              value={cargo}
              onChange={this.handleChange}
            ></input>

            <label htmlFor="descricaoCargo">Descrição do Cargo</label>
            <textarea
              id="descricaoCargo"
              name="descricaoCargo"
              value={descricaoCargo}
              onChange={this.handleChange}
            ></textarea>
          </fieldset>
          <button type="submit">Enviar</button>
          {/* <button onClick={this.resetForms}>Limpar</button> */}
        </form>
        <button onClick={this.resetForms}>Limpar</button>
        {enviado && <FormsImpresso currentState={this.state} />}
      </section>
    );
  }
}

export default Forms;
