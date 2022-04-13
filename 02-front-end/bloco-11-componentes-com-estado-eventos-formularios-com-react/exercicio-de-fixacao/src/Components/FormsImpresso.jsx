import React from "react";
import './FormsImpresso.css'

class FormsImpresso extends React.Component {

    render() {
        
        const { name, email, cpf, endereco, cidade, estado, curriculo, cargo, descricaoCargo} = this.props.currentState;

        return (
          <section className="">
            <h2>Dados enviados</h2>
            <h3>Pessoal</h3>
            <div> Name: {name}</div>
            <div> Email: {email}</div>
            <div> CPF: {cpf}</div>
            <div> Endereço: {endereco}</div>
            <div> Cidade: {cidade}</div>
            <div> Estado: {estado}</div>
            <h3>Profissional</h3>
            <div> Currículo: {curriculo}</div>
            <div> Cargo: {cargo}</div>
            <div> Descrição do cargo: {descricaoCargo}</div>
          </section>
        );
    }
}

export default FormsImpresso;