// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Components/Order';

class App extends React.Component {
  render() {
    const shoppingCart = [{
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    },

      {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    }]

    return (

      shoppingCart.map((element) => {
       return <div className="App">
        <h1> Orders recently created </h1>
         <Order order={element} />
        </div>
      })

      
    );
  }
}

export default App;