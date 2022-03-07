const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            }
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            }
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        }
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const customerName = order["name"];
    const customerTelephone = order["phoneNumber"];
    const customerStreet = order["address"].street;
    const customerStreetNumber = order["address"].number;
    const customerApartment = order["address"].apartment;

    console.log(`Olá Ana Silveira, entrega para ${customerName}, Telefone: ${customerTelephone}, R ${customerStreet}, NR: ${customerStreetNumber}, AP: ${customerApartment}`)
}

customerInfo(order);

const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const newBuyer = order.name = 'Luiz Silva';
    const newPrice = order.payment = '50'
    const drinkCoke = order.order.drinks.coke.type;
    const pizzaMarguertia = order.order.pizza.marguerita;
    const pizzas = Object.keys(order.order.pizza)

    console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, e ${pizzas[1]} e ${drinkCoke} é R$ ${newPrice}. `);


// "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

}

orderModifier(order);