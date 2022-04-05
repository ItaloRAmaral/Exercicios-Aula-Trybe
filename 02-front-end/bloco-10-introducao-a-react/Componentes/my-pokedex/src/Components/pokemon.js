import React from "react";

class Pokemon extends React.Component {
    render() {

        const poke = this.props.pokemon
        
        return (
            <section className="pokemon">
                <div className="poke-info">
                    <h1>{poke.name}</h1>
                    <p>{poke.type}</p>
                    <p>{poke.averageWeight.value} {poke.averageWeight.measurementUnit}</p>
                </div>
                <div className="image">
                    <img src={poke.image} alt={poke.name}></img>
                </div>
            </section>
        )
    }
}

export default Pokemon;